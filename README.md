# 🎬 Studio Ghibli World - Interactive Web Experience

A stunning, immersive web application celebrating the magical universe of Studio Ghibli films. Built with React and modern web technologies, this project features interactive character exploration, comprehensive movie database, AI-powered story creation, and beautiful animations inspired by the enchanting world of Studio Ghibli.

## 🌟 Features

### 🏠 **Landing Page**
- **Dynamic Theme System**: Beautiful light/dark mode toggle with smooth transitions
- **Parallax Animations**: Floating clouds, spirits, and interactive background elements
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Custom SVG Icons**: Hand-crafted Totoro, No-Face, Soot Sprites, and other Ghibli characters
- **Film Showcase**: Featured films collection with ratings and descriptions
- **Character Gallery**: Interactive character cards with detailed information

### 🎭 **Characters Page**
- **Comprehensive Character Database**: Detailed profiles of beloved Ghibli characters
- **Interactive Character Cards**: Beautiful cards with character images, descriptions, and film associations
- **Search & Filter**: Find characters by name, film, or characteristics
- **Character Stats**: Ages, abilities, personality traits, and memorable quotes
- **Animated Interactions**: Hover effects and smooth transitions

### 🎬 **Movies Page**
- **Complete Film Library**: All Studio Ghibli films from 1979 to present
- **Detailed Film Information**: Year, director, awards, ratings, and synopses
- **Film Categories**: Fantasy, adventure, slice-of-life, and historical dramas
- **Visual Timeline**: Chronological exploration of Ghibli's cinematic journey
- **Award Tracking**: Academy Awards, Golden Bears, and other accolades

### ✨ **Story Creator Page**
- **AI-Powered Story Generation**: Create original Ghibli-style stories using Google's Generative AI
- **Customizable Parameters**: Choose genre, themes, and story elements
- **Interactive Story Builder**: Input keywords and let AI craft magical narratives
- **Story Templates**: Pre-built structures following classic Ghibli storytelling patterns
- **Export & Share**: Save and share your created stories

## 🛠 Technology Stack

### **Frontend Framework**
- **React 18.2.0**: Modern React with hooks and functional components
- **React Router DOM 7.5.1**: Client-side routing for seamless navigation
- **Vite 6.3.1**: Lightning-fast build tool and development server

### **Styling & Animation**
- **Tailwind CSS**: Utility-first CSS framework (configured via classes)
- **Framer Motion 10.16.0**: Advanced animations and transitions
- **React Spring 9.7.5**: Spring-physics based animations
- **Custom CSS**: Theme transitions and specialized animations

### **3D Graphics & Visualization**
- **Three.js 0.152.0**: 3D graphics library for immersive elements
- **React Three Fiber 8.14.0**: React renderer for Three.js
- **React Three Drei 9.94.1**: Useful helpers and abstractions for R3F

### **Interactive Elements**
- **React Konva 18.2.10**: 2D canvas library for interactive graphics
- **Konva 8.4.3**: High-performance 2D graphics
- **React Parallax Tilt 1.7.291**: Interactive tilt effects
- **React Intersection Observer 9.5.3**: Scroll-triggered animations

### **Particle Effects**
- **React TSParticles 2.12.2**: Beautiful particle systems
- **TSParticles 2.12.0**: Core particle engine
- **TSParticles Slim 2.12.0**: Lightweight particle effects

### **AI Integration**
- **Google Generative AI 0.24.0**: AI-powered story generation
- **Axios 1.8.4**: HTTP client for API requests

### **Icons & UI**
- **React Icons 5.5.0**: Comprehensive icon library
- **Custom SVG Components**: Hand-crafted Ghibli-themed icons

### **Development Tools**
- **ESLint 9.22.0**: Code linting and quality
- **TypeScript Types**: Type definitions for React and React DOM
- **Vite React Plugin**: Optimized React development experience

## 📁 Project Structure

```
Studio-Ghibli/
├── README.md                    # Main project documentation
└── ghibli/                      # Main application directory
    ├── package.json             # Dependencies and scripts
    ├── vite.config.js          # Vite configuration
    ├── vercel.json             # Vercel deployment config
    ├── eslint.config.js        # ESLint configuration
    ├── index.html              # Main HTML template
    ├── README.md               # Vite-specific documentation
    ├── public/                 # Static assets
    │   ├── ghibli.png         # Studio Ghibli logo
    │   └── vite.svg           # Vite logo
    └── src/                    # Source code
        ├── main.jsx           # Application entry point
        ├── App.jsx            # Main App component with routing
        ├── App.css            # Global application styles
        ├── index.css          # Global CSS imports
        ├── assets/            # Static assets
        │   └── react.svg      # React logo
        └── pages/             # Page components
            ├── Landing.jsx         # Home page with hero section
            ├── Landing.css         # Landing page specific styles
            ├── CharactersPage.jsx  # Character exploration
            ├── MoviesPage.jsx      # Film database
            ├── StoryCreatorPage.jsx # AI story generator
            └── Story.css           # Story page animations
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js 16.x or higher
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Studio-Ghibli.git
   cd Studio-Ghibli/ghibli
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (for AI features)
   ```bash
   # Create .env file in the ghibli directory
   echo "VITE_GOOGLE_AI_API_KEY=your_google_ai_api_key" > .env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### **Available Scripts**

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎨 Design Philosophy

### **Visual Design**
- **Studio Ghibli Aesthetic**: Inspired by the organic, hand-drawn beauty of Ghibli films
- **Color Palette**: Earthy tones, magical blues, forest greens, and warm sunset colors
- **Typography**: Custom Ghibli-inspired fonts for headings and readable sans-serif for body text
- **Animations**: Subtle, meaningful animations that enhance rather than distract

### **User Experience**
- **Intuitive Navigation**: Clear, accessible navigation with visual feedback
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Performance First**: Optimized images, lazy loading, and efficient animations
- **Accessibility**: Proper ARIA labels, keyboard navigation, and color contrast

### **Interactive Elements**
- **Parallax Scrolling**: Creates depth and immersion
- **Hover Effects**: Subtle animations provide feedback
- **Theme Toggle**: Seamless light/dark mode transitions
- **Responsive Design**: Adapts beautifully to all screen sizes

## 🌍 Deployment

### **Vercel Deployment** (Recommended)
The project is configured for Vercel deployment with single-page application routing:

```bash
# Deploy to Vercel
npm install -g vercel
vercel --prod
```

### **Other Platforms**
- **Netlify**: Drag and drop the `dist` folder after `npm run build`
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload build files to S3 bucket with static website hosting

## 🔧 Configuration

### **Environment Variables**
```env
# Google AI API Key for story generation
VITE_GOOGLE_AI_API_KEY=your_api_key_here

# Optional: Analytics tracking
VITE_GA_TRACKING_ID=your_google_analytics_id

# Optional: Custom API endpoints
VITE_API_BASE_URL=https://your-api.com
```

### **Customization**
- **Colors**: Modify Tailwind color palette in the CSS classes
- **Animations**: Adjust timing and easing in Framer Motion components
- **Content**: Update film and character data in the respective page components
- **Themes**: Extend the dark/light theme system with additional color schemes

## 🤝 Contributing

We welcome contributions to make this Studio Ghibli experience even more magical!

### **How to Contribute**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Contribution Guidelines**
- Follow the existing code style and conventions
- Add proper documentation for new features
- Include responsive design for all UI changes
- Test across different browsers and devices
- Maintain the Studio Ghibli aesthetic and theme

### **Ideas for Contributions**
- Add more character profiles and detailed information
- Implement advanced search and filtering
- Create interactive movie timelines
- Add sound effects and background music
- Implement user favorites and collections
- Add multi-language support
- Create mobile app version

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Note**: This is a fan project created to celebrate Studio Ghibli's incredible work. All Studio Ghibli characters, films, and related content are the property of Studio Ghibli. This project is not affiliated with or endorsed by Studio Ghibli.

## 🙏 Acknowledgments

- **Studio Ghibli**: For creating the magical worlds that inspired this project
- **Hayao Miyazaki**: For his visionary storytelling and artistry
- **React Community**: For the incredible ecosystem of tools and libraries
- **Open Source Contributors**: For making web development more accessible and enjoyable


*"Always believe in yourself. Do this and no matter where you are, you will have nothing to fear."* - Baron Humbert von Gikkingen, The Cat Returns

Made with ❤️ and ✨ for Studio Ghibli fans around the world.