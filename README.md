# Bible Planner - Landing Page

A modern, multilingual landing page for the Bible Planner mobile application. Built with React, TypeScript, and Vite, featuring a beautiful design with dark/light theme support and complete internationalization.

🌐 **Live Site**: [https://bibleplanner.app/](https://www.bibleplanner.app/)

<img src="./public/logo.png" alt="Screenshot" />

## ✨ Features

- 🌍 **Multilingual Support** - Available in English, Portuguese (BR), and Spanish
- 🌓 **Dark/Light Theme** - Automatic system preference detection with manual toggle
- 📱 **Responsive Design** - Optimized for all screen sizes
- 🎨 **Modern UI** - Beautiful animations and smooth transitions
- 🚀 **Fast Performance** - Built with Vite for lightning-fast builds
- ♿ **Accessible** - Follows web accessibility best practices
- 🔒 **Privacy-First** - Dedicated privacy policy page
- 📲 **Smart Platform Detection** - Automatically prioritizes iOS/Android buttons based on user's device

## 🛠️ Tech Stack

### Core
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### Styling
- **Vanilla CSS** - Pure CSS with CSS Variables
- **CSS Animations** - Smooth fade-in and slide-up effects

### Internationalization
- **react-i18next** - React integration for i18next
- **i18next** - Internationalization framework
- **i18next-browser-languagedetector** - Automatic language detection

### Icons
- **lucide-react** - Modern icon library
- **Custom SVG Components** - Platform-specific icons (Android, Apple, Windows)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/bible-planner-web-client.git
cd bible-planner-web-client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```

### Deploy
The project can be deployed to any static hosting service:
- **Vercel** - `vercel deploy`
- **Netlify** - Drag and drop the `dist` folder
- **GitHub Pages** - Use GitHub Actions
- **Firebase Hosting** - `firebase deploy`

## 📁 Project Structure

```
bible-planner-web-client/
├── public/
│   └── logo.png              # App logo and favicon
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Navigation header with theme toggle
│   │   ├── Hero.tsx          # Main hero section with CTAs
│   │   ├── Features.tsx      # Features grid section
│   │   ├── Footer.tsx        # Footer with privacy link
│   │   ├── PrivacyPolicy.tsx # Privacy policy page
│   │   └── Icons.tsx         # Custom platform icons
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   ├── i18n.ts               # i18n configuration
│   └── index.css             # Global styles and theme variables
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── README.md                 # This file
```

## 🌍 Supported Languages

- 🇺🇸 **English** (en)
- 🇧🇷 **Portuguese** (pt-BR)
- 🇪🇸 **Spanish** (es)

The language is automatically detected from the browser settings, but users can manually switch languages using the language selector in the header.

## 🎨 Theming

The application supports both light and dark themes:

- **Automatic Detection**: Respects user's system preference (`prefers-color-scheme`)
- **Manual Toggle**: Users can switch themes using the sun/moon icon in the header
- **CSS Variables**: All colors are defined using CSS custom properties for easy customization

### Color Palette

The design uses the official Bible Planner color palette:

**Light Theme:**
- Primary: `#4C5C92`
- Background: `#FAF8FF`
- Surface: `#FFFFFF`

**Dark Theme:**
- Primary: `#B6C4FF`
- Background: `#121318`
- Surface: `#1D1E24`

## 🔧 Customization

### Adding a New Language

1. Open `src/i18n.ts`
2. Add your translations to the `resources` object:

```typescript
const resources = {
  // ... existing languages
  fr: {
    translation: {
      "app_title": "Bible Planner",
      "app_description": "Lisez toute la Bible en 1 an...",
      // ... other translations
    }
  }
};
```

3. Add the language option to the Header component

### Modifying Theme Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --color-primary: #your-color;
  --color-bg: #your-background;
  /* ... other variables */
}
```

## 📱 Features Overview

### Home Page
- Eye-catching hero section with app description
- Platform-specific download buttons (iOS, Android)
- Features showcase with icons
- Responsive grid layout

### Privacy Policy Page
- Comprehensive privacy policy
- Multilingual support
- Clean, readable layout
- Easy navigation back to home

### Smart Features
- **Device Detection**: Automatically shows iOS button first on Apple devices, Android first on Android devices
- **Dynamic Page Titles**: Browser tab title changes based on current page and language
- **Smooth Animations**: Staggered fade-in effects for better UX
- **Hover Effects**: Interactive elements with smooth transitions

## 📊 Analytics

For a detailed list of tracked events, see [Analytics Events](docs/analytics_events.md).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is part of the Bible Planner application suite.

© 2025 Quartel Enterprise. All rights reserved.

## 📞 Contact

For questions or support, please visit the Bible Planner app page in your device's app store.

---

**Made with ❤️ for Bible readers worldwide**
