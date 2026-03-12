# WebPort Portfolio - Customization Guide

## Quick Start

Your React portfolio is ready to use! Here's how to personalize it.

## 1. Update Hero Section

Edit `src/components/Hero.jsx`:
```javascript
// Change the heading and description
"Hello, I'm a Developer" → Your name/title
"I create beautiful..." → Your elevator pitch
```

## 2. Add Your Projects

Edit `src/components/Projects.jsx`:
```javascript
const sampleProjects = [
  { 
    id: 1, 
    name: 'Your Project Name', 
    description: 'Description of what your project does',
    tags: ['React', 'Your Tech Stack']
  },
  // Add more projects here
];
```

## 3. Update Skills

Edit `src/components/Skills.jsx`:
```javascript
const skills = [
  { 
    category: 'Frontend', 
    items: ['Add', 'Your', 'Skills'] 
  },
  // Update categories and items
];
```

## 4. Customize Contact Links

Edit `src/components/Contact.jsx`:
```javascript
// Replace # with your actual links
<a href="https://github.com/yourname">GitHub</a>
<a href="https://linkedin.com/in/yourname">LinkedIn</a>
<a href="https://twitter.com/yourname">Twitter</a>
```

## 5. Configure Header Navigation

Edit `src/components/Header.jsx`:
```html
<!-- These links already support smooth scroll with anchor IDs -->
<!-- Update if you add/remove sections -->
```

## 6. Theme Customization

### Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      // Add custom colors here
    }
  }
}
```

### Dark Mode
- Already built-in with `dark:` prefix classes
- Toggle in Header component
- Uses `class` strategy in Tailwind config

## 7. Global Styles

Edit `src/index.css`:
```css
/* Add custom CSS here if needed */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 8. Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect GitHub repo
- **GitHub Pages**: Configure vite config
- **AWS S3 + CloudFront**: Upload dist folder

## Tips

✅ Keep the design minimal and professional
✅ Use the gradient colors consistently
✅ Add real project links and descriptions
✅ Test dark mode functionality
✅ Check responsiveness on mobile
✅ Optimize images for web

## Common Customizations

### Change Primary Colors
Search for `blue-600` and `purple-600` throughout components and replace with your brand colors.

### Update Footer Year
Auto-updates with `new Date().getFullYear()` - no action needed!

### Add More Sections
Create new components in `src/components/` and import them in `App.jsx`.

### Add Icons
Consider using:
- Heroicons (lightweight SVG icons)
- FontAwesome (icon library)
- Tabler Icons

### Add Animations
Install Framer Motion:
```bash
npm install framer-motion
```

## Need Help?

1. Check Tailwind CSS docs: https://tailwindcss.com
2. React documentation: https://react.dev
3. Vite guide: https://vitejs.dev

---

Happy building! 🚀
