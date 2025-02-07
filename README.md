# Modern Portfolio Website

## Overview
A sophisticated personal portfolio website built with Next.js 13 and enhanced with modern animation libraries and interactive elements. This project showcases professional work through an engaging, dynamic user interface.

## Preview


<p align="center">
<img src="https://github.com/himuexe/Portfolio-V3/blob/dedecef9c8c8e96a0f53dc73cf3d41c5a941ac79/public/media/images/Capture.PNG">
*Modern, animated home page with interactive elements*


<p align="center">
<img src="https://github.com/himuexe/Portfolio-V3/blob/dedecef9c8c8e96a0f53dc73cf3d41c5a941ac79/public/media/images/Capture1.PNG">



<p align="center">
<img src="https://github.com/himuexe/Portfolio-V3/blob/dedecef9c8c8e96a0f53dc73cf3d41c5a941ac79/public/media/images/Capture2.PNG">

## Visual Features
- **Animated Backgrounds**: Utilizing Vanta.js for dynamic 3D backgrounds
- **Smooth Transitions**: Framer Motion page transitions and component animations
- **Interactive Elements**: GSAP-powered scrolling effects and hover states
- **Responsive Design**: Seamless experience across all device sizes

## Tech Stack
### Core Technologies
- **Next.js 13.5.5** - React framework for production
- **React 18.2.0** - UI development
- **Tailwind CSS** - Utility-first styling

### Animation & Visual Effects
- **Framer Motion** - Advanced animations
- **GSAP** - Timeline-based animations
- **React Spring** - Physics-based animations
- **Vanta.js** - 3D animated backgrounds
- **Three.js** - 3D graphics
- **Lottie** - Vector animations
- **React Confetti** - Celebration effects
- **P5.js** - Creative coding and visual effects

### UI Components & Styling
- **Material-UI** - Component library
- **Font Awesome** - Icons
- **React Icons** - Comprehensive icon library
- **Hamburger React** - Animated menu button
- **React Fast Marquee** - Scrolling text effects

### Additional Features
- **Nodemailer** - Contact form functionality
- **Environment Variables** - Secure configuration
- **ESLint** - Code quality maintenance

## Asset Management
```
public/
├── images/           # Static images
│   ├── portfolio-home.png
│   ├── projects.png
│   ├── contact.png
│   └── [other images]
├── animations/       # Lottie animation files
└── fonts/           # Custom fonts
```

## Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/himuexe/Portfolio-V2

# Install dependencies
npm install
# or
yarn install

# Create environment file
cp .env.example .env.local
```

### Development
```bash
# Start development server
npm run dev
# or
yarn dev

# Open http://localhost:3000 in your browser
```

### Build for Production
```bash
# Create production build
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```

### Linting
```bash
npm run lint
# or
yarn lint
```

## Project Structure
```
project-root/
├── components/      # Reusable UI components
├── pages/          # Next.js pages
├── public/         # Static assets
├── styles/         # Global styles and Tailwind config
├── utils/          # Utility functions
└── [Add other relevant directories]
```

## Environment Variables
Create a `.env.local` file in the root directory:
```env
# Add your environment variables here
NEXT_PUBLIC_EXAMPLE_VAR=value
```

## Performance Optimization
- Next.js image optimization
- Code splitting
- Dynamic imports
- Tailwind CSS purging unused styles
- Optimized animations for performance

## Image Optimization
This project uses Next.js Image component for optimal image loading:
- Automatic WebP conversion
- Responsive images with automatic srcset
- Lazy loading
- Blur placeholder effects
- Automatic size optimization

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing
Feel free to submit issues and enhancement requests.

## License
License.md

---
*Built with ❤️ using Next.js and modern web technologies*







