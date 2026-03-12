# WebPort - Modern React Portfolio

A professional, responsive portfolio website built with React, Vite, and Tailwind CSS featuring a clean, minimal design with dark mode support.

## Features

✨ **Modern UI/UX**
- Clean, minimal design philosophy
- Professional gradient accents
- Smooth animations and transitions
- Fully responsive layout (mobile, tablet, desktop)

🌙 **Dark Mode**
- Toggle between light and dark themes
- Persistent theme with system preference detection
- Optimized colors for both modes

🎨 **Component Architecture**
- Modular, reusable components
- Clear separation of concerns
- Easy to customize and extend

📱 **Responsive Design**
- Mobile-first approach
- Tailwind CSS utility classes
- Optimized for all screen sizes

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Navigation & theme toggle
│   ├── Hero.jsx         # Landing section
│   ├── Projects.jsx     # Portfolio showcase
│   ├── Skills.jsx       # Technical skills
│   ├── Contact.jsx      # Contact form & social links
│   └── Footer.jsx       # Footer with credits
├── App.jsx              # Main app component
├── main.jsx             # React entry point
└── index.css            # Tailwind directives
```

## Tech Stack

- **React 18** - UI library
- **Vite 4** - Lightning-fast build tool
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Component Details

### Header
- Sticky navigation bar
- Responsive menu (hidden on mobile)
- Dark mode toggle with emoji indicators
- Gradient logo text

### Hero
- Full viewport height landing section
- Gradient background
- Call-to-action buttons
- Smooth scroll anchors

### Projects
- Grid layout (responsive columns)
- Project cards with hover effects
- Technology tags
- Sample project data (customizable)

### Skills
- Three skill categories (Frontend, Backend, Tools)
- Clean list presentation
- Accent color indicators
- Organized grid layout

### Contact
- Email form with validation
- Success message feedback
- Social media links
- Form state management

### Footer
- Copyright information
- Tech stack credits
- Border separator

## Customization

### Colors
Edit `tailwind.config.js` to customize the theme colors.

### Content
Replace sample data in component files:
- `Hero.jsx` - Update introduction text
- `Projects.jsx` - Add your own projects
- `Skills.jsx` - List your technologies
- `Contact.jsx` - Add your social links
- `Header.jsx` - Update navigation links

### Fonts
Add custom fonts in `index.css` or `tailwind.config.js`.

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components use Tailwind's `md:` and `lg:` prefixes for responsive styling.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Light mode for older browsers

## Performance Optimizations

- Vite's fast refresh for development
- Minimal bundle size
- CSS purging with Tailwind
- Smooth transitions with GPU acceleration

## Future Enhancements

- Blog section with markdown support
- Project filtering system
- Animated scroll effects
- Form backend integration
- Deployment guides

## License

Free to use and modify for personal and commercial projects.

## Support

For questions or suggestions, feel free to reach out through the contact form on the portfolio.

---

**Built with ❤️ using React + Vite + Tailwind CSS**
