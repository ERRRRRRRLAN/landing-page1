# Modern Landing Page Template

A professional, modern landing page template built with Next.js 14, featuring a bold black & white gradient design with interactive animations. Perfect for showcasing your product, service, or business with a clean and professional presentation.

**UI/UX Reference**: [DeFi Landing Page by Levi Wilson](https://dribbble.com/shots/24287189-Defi-Landing-Page)

## Features

- **Modern Design**: Bold black & white gradient aesthetic with smooth transitions
- **Interactive Animations**: Smooth, engaging animations powered by Framer Motion
- **Multi-Language Support**: Full support for English and Indonesian (easily extensible to other languages)
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- **SEO Ready**: Optimized metadata and structure for search engines
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Easy Customization**: Simple text/variable replacement - minimal coding knowledge required

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Internationalization**: next-intl

## Prerequisites

Before you begin, ensure you have the following installed on your computer:

- **Node.js** version 18.17 or later ([Download here](https://nodejs.org/))
- **npm** version 9.0 or later (comes with Node.js)

### How to Check Your Versions

Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux) and run:

```bash
node --version
npm --version
```

If these commands show version numbers, you're ready to go! If not, please install Node.js first.

## Installation Guide

### Step 1: Download or Clone the Project

**Option A: Download as ZIP**
1. Click the green "Code" button on GitHub
2. Select "Download ZIP"
3. Extract the ZIP file to your desired location

**Option B: Clone with Git** (if you have Git installed)
```bash
git clone https://github.com/ERRRRRRRLAN/landing-page1.git
cd landing-page1
```

### Step 2: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages. Wait for it to complete (may take 2-5 minutes).

### Step 3: Start Development Server

```bash
npm run dev
```

You should see a message like:
```
✓ Ready in 3.8s
- Local: http://localhost:3000
```

### Step 4: View Your Website

Open your web browser and go to: **http://localhost:3000**

Congratulations! Your landing page is now running locally.

## Project Structure Explained

Understanding the project structure will help you customize it easily:

```
landing1/
├── app/                          # Main application folder
│   ├── [locale]/                # Language-specific pages (en, id)
│   │   ├── layout.tsx          # Layout wrapper for each language
│   │   └── page.tsx            # Main page that combines all sections
│   ├── globals.css             # Global styles (colors, fonts, etc.)
│   └── layout.tsx              # Root layout (SEO metadata, fonts)
│
├── components/                  # Reusable components
│   ├── sections/               # Page sections (each section is a component)
│   │   ├── Hero.tsx           # Top hero section with main headline
│   │   ├── Features.tsx       # Features grid section
│   │   ├── Testimonials.tsx   # Customer testimonials section
│   │   ├── Pricing.tsx        # Pricing plans section
│   │   └── Contact.tsx         # Contact form section
│   ├── Navigation.tsx          # Top navigation bar
│   └── Footer.tsx             # Footer component
│
├── messages/                    # All text content (translations)
│   ├── en.json                # English text content
│   └── id.json                # Indonesian text content
│
├── i18n.ts                     # Internationalization configuration
├── middleware.ts               # Handles language routing
├── routing.ts                  # Routing configuration
├── next.config.js             # Next.js settings
├── tailwind.config.ts         # Tailwind CSS customization
└── package.json               # Project dependencies
```

## Complete Customization Guide

This guide will walk you through customizing every aspect of the landing page. You don't need coding experience - just follow the steps and replace the text!

### Part 1: Brand Identity

#### 1.1 Change Your Logo/Brand Name

**File to edit**: `components/Navigation.tsx`

Find this code around line 56:
```tsx
<a href="#hero" className="text-2xl font-bold text-black">
  LOGO
</a>
```

Replace `LOGO` with your brand name:
```tsx
<a href="#hero" className="text-2xl font-bold text-black">
  Your Brand Name
</a>
```

**Also update in**: `components/Footer.tsx` (around line 22)

#### 1.2 Update Company Name in Footer

**File to edit**: `components/Footer.tsx`

Find this code around line 92:
```tsx
<p>&copy; {new Date().getFullYear()} Your Company. {t('rights')}.</p>
```

Replace `Your Company` with your actual company name:
```tsx
<p>&copy; {new Date().getFullYear()} Acme Corporation. {t('rights')}.</p>
```

### Part 2: Hero Section Content

**Files to edit**: `messages/en.json` and `messages/id.json`

Open `messages/en.json` and find the `hero` section:

```json
{
  "hero": {
    "title": "Transform Your Business",
    "subtitle": "Powerful solutions that make a difference",
    "description": "Discover innovative products and services designed to empower your success. Built for the community, driven by excellence.",
    "ctaPrimary": "Get Started",
    "ctaSecondary": "Learn More"
  }
}
```

**What to change:**
- `title`: Your main headline (appears largest on the page)
- `subtitle`: Your subheadline (appears below the title)
- `description`: Brief description of what you offer
- `ctaPrimary`: Text for the primary button (usually "Get Started", "Sign Up", etc.)
- `ctaSecondary`: Text for the secondary button (usually "Learn More", "View Demo", etc.)

**Example:**
```json
{
  "hero": {
    "title": "Revolutionize Your Workflow",
    "subtitle": "The all-in-one platform for modern teams",
    "description": "Streamline your operations with our cutting-edge platform. Join thousands of teams already transforming their workflow.",
    "ctaPrimary": "Start Free Trial",
    "ctaSecondary": "Watch Demo"
  }
}
```

**Important**: Update the same section in `messages/id.json` with Indonesian translations.

### Part 3: Features Section

**Files to edit**: `messages/en.json` and `messages/id.json`

Find the `features` section:

```json
{
  "features": {
    "title": "Why Choose Us",
    "subtitle": "Everything you need to succeed",
    "items": {
      "feature1": {
        "title": "Innovative Solutions",
        "description": "Cutting-edge technology designed to solve real-world problems"
      },
      "feature2": {
        "title": "Community Driven",
        "description": "Built with and for the community, ensuring maximum impact"
      }
      // ... feature3 through feature6
    }
  }
}
```

**How to customize:**
1. Change `title` and `subtitle` to match your brand
2. Update each feature (feature1 through feature6):
   - `title`: Feature name (e.g., "Fast Performance", "24/7 Support")
   - `description`: Brief explanation of the feature

**Example:**
```json
{
  "features": {
    "title": "Why Choose Our Platform",
    "subtitle": "Everything you need to succeed",
    "items": {
      "feature1": {
        "title": "Lightning Fast",
        "description": "Experience blazing-fast performance with our optimized infrastructure"
      },
      "feature2": {
        "title": "Secure & Reliable",
        "description": "Enterprise-grade security protecting your data 24/7"
      }
    }
  }
}
```

**Changing Feature Icons** (Optional):

If you want different icons, edit `components/sections/Features.tsx`:

Find this line (around line 7):
```tsx
import { Zap, Users, MousePointerClick, Headphones, TrendingUp, Shield } from 'lucide-react';
```

Replace with icons from [Lucide Icons](https://lucide.dev/icons/). For example:
```tsx
import { Rocket, Lock, Zap, Globe, Shield, Award } from 'lucide-react';
```

Then update the icons array (around line 38):
```tsx
const features = [
  { key: 'feature1', icon: Rocket },
  { key: 'feature2', icon: Lock },
  // ... etc
];
```

### Part 4: Testimonials

**File to edit**: `components/sections/Testimonials.tsx`

Find the `testimonials` array (around line 9):

```tsx
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'This platform has completely transformed how we operate...',
    rating: 5,
    avatar: 'SJ',
  },
  // ... more testimonials
];
```

**How to customize:**
- `name`: Customer's full name
- `role`: Their job title and company
- `content`: The testimonial text (keep it in quotes)
- `rating`: Number of stars (1-5)
- `avatar`: Two-letter initials for the avatar circle

**Example:**
```tsx
const testimonials = [
  {
    name: 'John Doe',
    role: 'Founder, StartupXYZ',
    content: 'This platform saved us hours every week. Highly recommended!',
    rating: 5,
    avatar: 'JD',
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Director, CompanyABC',
    content: 'The best investment we made this year. ROI was immediate.',
    rating: 5,
    avatar: 'JS',
  }
  // Add 2-4 more testimonials
];
```

### Part 5: Pricing Plans

**Files to edit**: `messages/en.json` and `messages/id.json`

Find the `pricing` section:

```json
{
  "pricing": {
    "title": "Choose Your Plan",
    "subtitle": "Flexible pricing for every need",
    "plans": {
      "starter": {
        "name": "Starter",
        "price": "Free",
        "description": "Perfect for getting started",
        "features": [
          "Basic features",
          "Community support",
          "Up to 5 projects"
        ],
        "cta": "Get Started"
      },
      "professional": {
        "name": "Professional",
        "price": "$29",
        "description": "For growing businesses",
        "features": [
          "All Starter features",
          "Priority support",
          "Unlimited projects"
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
          "Dedicated support",
          "Custom solutions"
        ],
        "cta": "Contact Sales"
      }
    }
  }
}
```

**How to customize:**
1. Update `title` and `subtitle`
2. For each plan (starter, professional, enterprise):
   - `name`: Plan name
   - `price`: Price (use "Free", "$X", or "Custom")
   - `description`: Brief plan description
   - `features`: Array of features (add/remove items as needed)
   - `cta`: Button text
   - `popular`: Only for the middle plan (professional) - shows "Most Popular" badge

**Example:**
```json
{
  "pricing": {
    "plans": {
      "starter": {
        "name": "Basic",
        "price": "$9",
        "description": "For individuals",
        "features": [
          "5 projects",
          "Email support",
          "Basic templates"
        ],
        "cta": "Start Now"
      }
    }
  }
}
```

**Note**: The middle plan (professional) will automatically have a "Most Popular" badge and be highlighted.

### Part 6: Contact Section

**Files to edit**: `messages/en.json` and `messages/id.json`

Find the `contact` section:

```json
{
  "contact": {
    "title": "Get In Touch",
    "subtitle": "We'd love to hear from you",
    "form": {
      "name": "Name",
      "email": "Email",
      "message": "Message",
      "submit": "Send Message",
      "sending": "Sending...",
      "success": "Message sent successfully!",
      "error": "Failed to send message. Please try again."
    }
  }
}
```

Update the text as needed. The form labels and messages will automatically update.

**Connecting the Form to a Backend** (Advanced):

Currently, the form only simulates submission. To make it functional:

1. Create `app/api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Add your email service here (Resend, SendGrid, etc.)
    // Example with console log for testing:
    console.log('Form submission:', data);
    
    // TODO: Send email or save to database
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
```

2. Update `components/sections/Contact.tsx`:
Find the `handleSubmit` function and replace the simulation with:
```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 5000);
  }
};
```

### Part 7: SEO and Metadata

**File to edit**: `app/layout.tsx`

Find the `metadata` object (around line 11):

```tsx
export const metadata: Metadata = {
  title: 'Transform Your Business | Innovative Solutions',
  description: 'Discover innovative products and services...',
  keywords: 'business solutions, innovation, community, technology',
  authors: [{ name: 'Your Company' }],
  openGraph: {
    title: 'Transform Your Business | Innovative Solutions',
    description: 'Discover innovative products and services...',
    type: 'website',
  },
};
```

**What to update:**
- `title`: Page title (appears in browser tab and search results)
- `description`: Meta description (appears in search results)
- `keywords`: SEO keywords (comma-separated)
- `authors`: Your name or company name
- `openGraph`: For social media sharing (Facebook, Twitter, etc.)

**Example:**
```tsx
export const metadata: Metadata = {
  title: 'My Awesome Product | Transform Your Workflow',
  description: 'The best platform for modern teams. Streamline operations and boost productivity.',
  keywords: 'productivity, workflow, team collaboration, business tools',
  authors: [{ name: 'John Doe' }],
  openGraph: {
    title: 'My Awesome Product | Transform Your Workflow',
    description: 'The best platform for modern teams.',
    type: 'website',
  },
};
```

### Part 8: Colors and Styling (Advanced)

**File to edit**: `tailwind.config.ts`

If you want to change the color scheme, find the `colors` section:

```ts
colors: {
  primary: {
    DEFAULT: '#000000',  // Main black color
    light: '#1a1a1a',
  },
  secondary: {
    DEFAULT: '#ffffff',  // Main white color
    dark: '#f5f5f5',
  },
}
```

To use different colors, replace the hex codes:
- `#000000` = Black
- `#ffffff` = White
- `#FF5733` = Orange (example)
- `#3498DB` = Blue (example)

**Note**: Changing colors requires updating components that use these color classes. The template uses black and white gradients throughout.

### Part 9: Adding New Languages

To add a new language (e.g., Spanish):

1. **Update routing configuration**: Edit `routing.ts`
```ts
export const routing = {
  locales: ['en', 'id', 'es'] as const,  // Add 'es'
  defaultLocale: 'en' as const,
  localePrefix: 'as-needed' as const
};
```

2. **Create translation file**: Create `messages/es.json`
3. **Copy structure**: Copy all content from `messages/en.json` to `messages/es.json`
4. **Translate**: Translate all text to Spanish

The language toggle will automatically appear in the navigation.

## Available Commands

### Development

```bash
npm run dev
```
Starts the development server at http://localhost:3000

### Production Build

```bash
npm run build
```
Creates an optimized production build

```bash
npm run start
```
Starts the production server (run after `npm run build`)

### Code Quality

```bash
npm run lint
```
Checks code for errors and style issues

## Deployment Guide

### Deploy to Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js - click "Deploy"
6. Your site will be live in minutes!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" > "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Deploy to Other Platforms

This project works on any platform that supports Next.js:
- **Railway**: One-click deploy from GitHub
- **AWS Amplify**: Connect repository and deploy
- **DigitalOcean App Platform**: Connect GitHub and deploy
- **Docker**: Build container and deploy anywhere

## Troubleshooting

### Problem: "Port 3000 is already in use"

**Solution**: Next.js will automatically use port 3001. Or specify a different port:
```bash
npm run dev -- -p 3001
```

### Problem: "Module not found" errors

**Solution**: Delete `node_modules` and reinstall:
```bash
# Windows PowerShell
Remove-Item -Recurse -Force node_modules
npm install

# Mac/Linux
rm -rf node_modules
npm install
```

### Problem: Build fails

**Solution**: Clear Next.js cache and rebuild:
```bash
# Windows PowerShell
Remove-Item -Recurse -Force .next
npm run build

# Mac/Linux
rm -rf .next
npm run build
```

### Problem: Translations not working

**Solution**: 
1. Ensure `messages/en.json` and `messages/id.json` exist
2. Check that JSON files are valid (no syntax errors)
3. Restart the development server

### Problem: Styles not updating

**Solution**: 
1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Restart development server

## Customization Checklist

Use this checklist to ensure you've customized everything:

- [ ] Updated logo/brand name in Navigation (`components/Navigation.tsx`)
- [ ] Updated company name in Footer (`components/Footer.tsx`)
- [ ] Updated Hero section content (`messages/en.json` and `messages/id.json`)
- [ ] Updated Features section (titles, descriptions, icons if needed)
- [ ] Updated Testimonials with real customer reviews (`components/sections/Testimonials.tsx`)
- [ ] Updated Pricing plans and prices (`messages/en.json` and `messages/id.json`)
- [ ] Updated Contact section text (`messages/en.json` and `messages/id.json`)
- [ ] Updated SEO metadata (`app/layout.tsx`)
- [ ] (Optional) Changed colors in `tailwind.config.ts`
- [ ] (Optional) Connected contact form to backend
- [ ] (Optional) Added custom images to `public/` folder

## File Reference Guide

### Where to Edit What

| What to Change | File Location |
|----------------|---------------|
| Logo/Brand Name | `components/Navigation.tsx`, `components/Footer.tsx` |
| All Text Content | `messages/en.json`, `messages/id.json` |
| Hero Section | `messages/en.json` → `hero` section |
| Features | `messages/en.json` → `features` section |
| Testimonials | `components/sections/Testimonials.tsx` |
| Pricing Plans | `messages/en.json` → `pricing` section |
| Contact Form Text | `messages/en.json` → `contact` section |
| SEO Metadata | `app/layout.tsx` → `metadata` object |
| Colors | `tailwind.config.ts` → `colors` section |
| Company Name | `components/Footer.tsx` |

## Common Questions

### Q: Can I use this for commercial projects?
**A**: Yes! This template is MIT licensed, meaning you can use it for any purpose, including commercial projects.

### Q: Do I need to know coding to customize this?
**A**: For basic customization (text, content), no coding knowledge is needed. Just edit the JSON files. For advanced customization (colors, layout), basic HTML/CSS knowledge helps.

### Q: How do I add more sections?
**A**: Create a new component in `components/sections/`, then import and add it to `app/[locale]/page.tsx`.

### Q: Can I remove sections I don't need?
**A**: Yes! Simply remove the import and component from `app/[locale]/page.tsx`.

### Q: How do I change the language?
**A**: Use the language toggle button in the navigation bar, or change the URL (e.g., `/id` for Indonesian, `/en` for English).

### Q: The contact form doesn't send emails. How do I fix it?
**A**: See "Part 6: Contact Section" in the customization guide. You'll need to set up an email service (Resend, SendGrid, etc.) or connect to a backend.

## Support and Contributing

### Getting Help

If you encounter issues:
1. Check the Troubleshooting section above
2. Review the [GitHub Issues](https://github.com/ERRRRRRRLAN/landing-page1/issues)
3. Create a new issue with details about your problem

### Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration: [DeFi Landing Page by Levi Wilson](https://dribbble.com/shots/24287189-Defi-Landing-Page)
- Built with [Next.js](https://nextjs.org/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

**Made for the community - Happy building!**
