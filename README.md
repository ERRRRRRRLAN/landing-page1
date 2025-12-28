# 🚀 Modern Landing Page Template

A stunning, modern landing page template built with Next.js 14, featuring a bold black & white gradient design with interactive animations. Perfect for showcasing your product, service, or business with a professional and eye-catching presentation.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- 🎨 **Modern Design**: Bold black & white gradient aesthetic with smooth transitions
- 🎭 **Interactive Animations**: Smooth, engaging animations powered by Framer Motion
- 🌍 **Multi-Language**: Full support for English and Indonesian (easily extensible)
- 📱 **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- ⚡ **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- 🔍 **SEO Ready**: Optimized metadata and structure for search engines
- ♿ **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- 🎯 **Easy Customization**: Simple text/variable replacement - no coding required!

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **i18n**: [next-intl](https://next-intl-docs.vercel.app/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17 or later
- **npm** 9.0 or later (or **yarn** / **pnpm**)

You can check your versions by running:
```bash
node --version
npm --version
```

## 🚀 Quick Start

### 1. Clone or Download

```bash
# If cloning from GitHub
git clone <your-repo-url>
cd landing1

# Or download and extract the ZIP file
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Open Your Browser

Navigate to [http://localhost:3000](http://localhost:3000)

You should see your landing page running locally! 🎉

## 📁 Project Structure

```
landing1/
├── app/
│   ├── [locale]/              # Locale-specific pages (en, id)
│   │   ├── layout.tsx        # Locale layout with Navigation & Footer
│   │   └── page.tsx          # Main page component
│   ├── globals.css           # Global styles and Tailwind imports
│   └── layout.tsx            # Root layout with metadata
├── components/
│   ├── sections/             # Page sections
│   │   ├── Hero.tsx         # Hero section with CTA buttons
│   │   ├── Features.tsx     # Features grid (Bento box style)
│   │   ├── Testimonials.tsx # Customer testimonials
│   │   ├── Pricing.tsx      # Pricing plans
│   │   └── Contact.tsx      # Contact form
│   ├── Navigation.tsx        # Top navigation bar
│   └── Footer.tsx           # Footer component
├── messages/                 # Translation files
│   ├── en.json              # English translations
│   └── id.json              # Indonesian translations
├── i18n.ts                  # i18n configuration
├── middleware.ts            # Next.js middleware for routing
├── routing.ts               # Routing configuration
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Customization Guide

### Step 1: Update Brand Information

#### Change Logo
Edit `components/Navigation.tsx` and `components/Footer.tsx`:

```tsx
// Find this line:
<a href="#hero" className="text-2xl font-bold text-black">
  LOGO
</a>

// Replace "LOGO" with your brand name or add an image:
<a href="#hero" className="text-2xl font-bold text-black">
  Your Brand Name
</a>
```

#### Change Company Name
Edit `components/Footer.tsx`:

```tsx
// Find this line:
<p>&copy; {new Date().getFullYear()} Your Company. {t('rights')}.</p>

// Replace "Your Company" with your actual company name
```

### Step 2: Update Content (Text & Translations)

All text content is stored in translation files. Simply edit the JSON files:

#### English Content (`messages/en.json`)

```json
{
  "hero": {
    "title": "Your Main Headline",
    "subtitle": "Your Subheadline",
    "description": "Your description text here",
    "ctaPrimary": "Your Primary Button Text",
    "ctaSecondary": "Your Secondary Button Text"
  },
  "features": {
    "title": "Your Features Title",
    "subtitle": "Your Features Subtitle",
    "items": {
      "feature1": {
        "title": "Feature 1 Title",
        "description": "Feature 1 Description"
      }
      // ... update other features
    }
  }
  // ... update other sections
}
```

#### Indonesian Content (`messages/id.json`)

Update the same structure in `messages/id.json` with Indonesian translations.

### Step 3: Update Features

Edit `messages/en.json` and `messages/id.json`:

```json
{
  "features": {
    "items": {
      "feature1": {
        "title": "Your Feature Title",
        "description": "Your feature description"
      },
      "feature2": {
        "title": "Another Feature",
        "description": "Another description"
      }
      // Add up to 6 features (feature1 - feature6)
    }
  }
}
```

**Note**: The icons are automatically assigned. To change icons, edit `components/sections/Features.tsx`:

```tsx
import { Zap, Users, MousePointerClick, Headphones, TrendingUp, Shield } from 'lucide-react';

// Change the icons array to match your features:
const icons = [Zap, Users, MousePointerClick, Headphones, TrendingUp, Shield];
```

### Step 4: Update Testimonials

Edit `components/sections/Testimonials.tsx`:

```tsx
const testimonials = [
  {
    name: 'Customer Name',
    role: 'Job Title, Company',
    content: 'Testimonial text here...',
    rating: 5,
    avatar: 'CN', // Initials for avatar
  },
  // Add more testimonials...
];
```

### Step 5: Update Pricing Plans

Edit `messages/en.json` and `messages/id.json`:

```json
{
  "pricing": {
    "plans": {
      "starter": {
        "name": "Starter Plan",
        "price": "$9",
        "description": "Perfect for individuals",
        "features": [
          "Feature 1",
          "Feature 2",
          "Feature 3"
        ],
        "cta": "Get Started"
      },
      "professional": {
        "name": "Professional",
        "price": "$29",
        "description": "For growing teams",
        "features": [
          "All Starter features",
          "Additional feature 1",
          "Additional feature 2"
        ],
        "cta": "Get Started",
        "popular": "Most Popular"
      },
      "enterprise": {
        "name": "Enterprise",
        "price": "Custom",
        "description": "For large organizations",
        "features": [
          "All Professional features",
          "Enterprise feature 1",
          "Enterprise feature 2"
        ],
        "cta": "Contact Sales"
      }
    }
  }
}
```

### Step 6: Update Colors (Optional)

Edit `tailwind.config.ts`:

```ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',    // Change to your primary color
          light: '#1a1a1a',
        },
        secondary: {
          DEFAULT: '#ffffff',    // Change to your secondary color
          dark: '#f5f5f5',
        },
      },
    },
  },
}
```

Then update components to use your custom colors.

### Step 7: Update SEO Metadata

Edit `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your Page Title | Your Brand',
  description: 'Your page description for SEO',
  keywords: 'your, keywords, here',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Open Graph Title',
    description: 'Your Open Graph Description',
    type: 'website',
  },
};
```

### Step 8: Update Contact Form (Optional)

The contact form currently simulates submission. To connect it to a real backend:

1. Create an API route: `app/api/contact/route.ts`
2. Update `components/sections/Contact.tsx` to call your API

Example API route:

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Add your email service or database logic here
  // Example: Send email using Resend, SendGrid, etc.
  
  return NextResponse.json({ success: true });
}
```

## 🌐 Adding New Languages

1. Add locale to `routing.ts`:

```ts
export const routing = {
  locales: ['en', 'id', 'es'] as const, // Add 'es' for Spanish
  defaultLocale: 'en' as const,
  localePrefix: 'as-needed' as const
};
```

2. Create translation file: `messages/es.json`
3. Copy structure from `messages/en.json` and translate

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start development server (http://localhost:3000)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 📦 Building for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

The production build will be optimized and ready to deploy.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

This project can be deployed to any platform that supports Next.js:

- **Netlify**: Connect your GitHub repo
- **Railway**: One-click deploy
- **AWS Amplify**: Connect repository
- **Docker**: Build and deploy container

## 🔧 Configuration Files

### `next.config.js`
- Image optimization settings
- Next-intl plugin configuration

### `tailwind.config.ts`
- Custom colors, fonts, and animations
- Theme extensions

### `tsconfig.json`
- TypeScript compiler options
- Path aliases (`@/*`)

## 📝 Customization Checklist

- [ ] Update logo/brand name in Navigation and Footer
- [ ] Update all text content in `messages/en.json` and `messages/id.json`
- [ ] Update features (titles, descriptions, icons)
- [ ] Update testimonials with real customer reviews
- [ ] Update pricing plans and prices
- [ ] Update SEO metadata in `app/layout.tsx`
- [ ] Update company name in Footer
- [ ] (Optional) Change colors in `tailwind.config.ts`
- [ ] (Optional) Connect contact form to backend
- [ ] (Optional) Add your own images/assets to `public/` folder

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Next.js will automatically try the next available port
# Or specify a port:
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Translation Not Working
- Ensure `messages/en.json` and `messages/id.json` exist
- Check `i18n.ts` configuration
- Verify `middleware.ts` is set up correctly

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern landing pages
- Built with [Next.js](https://nextjs.org/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

If you have any questions or need help customizing this template:

1. Check the [Issues](../../issues) section
2. Create a new issue with your question
3. Or reach out through your preferred channel

---

**Made with ❤️ for the community**

Happy coding! 🚀
