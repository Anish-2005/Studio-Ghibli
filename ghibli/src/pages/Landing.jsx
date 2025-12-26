import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// SVG Component Definitions
const TotoroIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="https://preview.redd.it/ko8rxxqv1yty.jpg?auto=webp&s=c2a0d44ed281f0309bba90d5723cf9bfb4761011">
    <path d="M50 15C30 15 20 35 20 50C20 65 30 85 50 85C70 85 80 65 80 50C80 35 70 15 50 15Z" />
    <circle cx="35" cy="45" r="5" fill="white" />
    <circle cx="65" cy="45" r="5" fill="white" />
    <circle cx="35" cy="45" r="2" fill="black" />
    <circle cx="65" cy="45" r="2" fill="black" />
    <path className="totoro-ears transition-transform duration-300" d="M35 20L30 5L40 10L50 0L60 10L70 5L65 20" />
    <path d="M40 60Q50 70 60 60" stroke="white" strokeWidth="2" fill="none" />
  </svg>
);

const NoFaceIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C30 10 20 30 20 50C20 80 35 90 50 90C65 90 80 80 80 50C80 30 70 10 50 10Z" />
    <path d="M40 40H45M55 40H60" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 55Q50 65 60 55" stroke="white" strokeWidth="2" fill="none" />
  </svg>
);

const SpiritIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 20C35 20 20 35 20 60C20 85 35 90 50 90C65 90 80 85 80 60C80 35 65 20 50 20Z" fill="currentColor" />
    <circle cx="40" cy="50" r="5" fill="white" />
    <circle cx="60" cy="50" r="5" fill="white" />
    <circle cx="40" cy="50" r="2" fill="black" />
    <circle cx="60" cy="50" r="2" fill="black" />
    <path d="M45 65Q50 70 55 65" stroke="white" strokeWidth="2" fill="none" />
  </svg>
);

const CloudIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 100 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 30C10 22.5 15 20 20 20C22.5 10 32.5 5 40 10C45 5 55 5 60 10C67.5 7.5 75 12.5 75 20C85 20 90 27.5 90 35C90 42.5 82.5 45 80 45H20C17.5 45 10 42.5 10 35C10 35 10 32.5 10 30Z" />
  </svg>
);

const SootspriteIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="30" />
    <circle cx="35" cy="40" r="5" fill="white" />
    <circle cx="65" cy="40" r="5" fill="white" />
    <line x1="30" y1="20" x2="20" y2="10" stroke="currentColor" strokeWidth="2" />
    <line x1="40" y1="15" x2="35" y2="5" stroke="currentColor" strokeWidth="2" />
    <line x1="50" y1="15" x2="50" y2="5" stroke="currentColor" strokeWidth="2" />
    <line x1="60" y1="15" x2="65" y2="5" stroke="currentColor" strokeWidth="2" />
    <line x1="70" y1="20" x2="80" y2="10" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const CatsIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 150 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="50" r="25" />
    <circle cx="30" cy="40" r="4" fill="white" />
    <circle cx="50" cy="40" r="4" fill="white" />
    <path d="M25 25L15 15M55 25L65 15" stroke="currentColor" strokeWidth="2" />
    <path d="M35 55Q40 60 45 55" stroke="white" strokeWidth="2" fill="none" />
    
    <circle cx="110" cy="50" r="25" />
    <circle cx="100" cy="40" r="4" fill="white" />
    <circle cx="120" cy="40" r="4" fill="white" />
    <path d="M95 25L85 15M125 25L135 15" stroke="currentColor" strokeWidth="2" />
    <path d="M105 55Q110 60 115 55" stroke="white" strokeWidth="2" fill="none" />
  </svg>
);

const HakuDragonIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 200 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 50C30 40 40 30 50 40C60 50 70 60 90 50C110 40 130 30 150 40C170 50 180 60 190 50" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
    <circle cx="30" cy="37" r="5" />
    <path d="M10 50C10 50 15 60 20 50" stroke="currentColor" strokeWidth="3" fill="none" />
  </svg>
);

// Main Landing Page Component
const GhibliLanding = () => {
    // Theme state with localStorage initialization
    
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mobile menu toggle
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const [darkMode, setDarkMode] = useState(() => {
      if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('ghibliDarkMode');
        return savedTheme ? JSON.parse(savedTheme) : false;
      }
      return false;
    });
  
    // Parallax refs
    const parallaxRefs = {
      clouds: useRef([]),
      spirits: useRef([]),
      foreground: useRef(null)
    };
  
    // Theme management useEffect
    useEffect(() => {
      const root = document.documentElement;
      if (darkMode) {
        root.classList.add('dark');
        localStorage.setItem('ghibliDarkMode', 'true');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('ghibliDarkMode', 'false');
      }
    }, [darkMode]);
  
    // Scroll handler useEffect
    useEffect(() => {
      const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
  
        // Parallax effects
        parallaxRefs.clouds.current.forEach((cloud, index) => {
          const speed = 0.1 + (index * 0.05);
          if (cloud) cloud.style.transform = `translateY(${position * speed}px)`;
        });
  
        parallaxRefs.spirits.current.forEach((spirit, index) => {
          const speed = 0.2 - (index * 0.03);
          if (spirit) spirit.style.transform = `translateY(${position * speed}px)`;
        });
  
        if (parallaxRefs.foreground.current) {
          parallaxRefs.foreground.current.style.transform = `translateY(${position * 0.3}px)`;
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    // Toggle function with animation support
    const toggleDarkMode = () => {
      setDarkMode(prevMode => {
        const newMode = !prevMode;
        // Add transition class for smooth change
        document.documentElement.classList.add('theme-transition');
        setTimeout(() => {
          document.documentElement.classList.remove('theme-transition');
        }, 500);
        return newMode;
      });
    };
  
    // Initial theme setup (only runs once)
    useEffect(() => {
      if (typeof window !== 'undefined' && 
          !localStorage.getItem('ghibliDarkMode') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true);
      }
    }, []);
  
    return (
      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-ghibli-dark text-white' : 'bg-ghibli-light text-ghibli-dark'}`}>
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden -z-10">
          {/* Day/Night sky gradient */}
          <div className={`absolute inset-0 transition-colors duration-700 ${darkMode ? 'bg-gradient-to-b from-indigo-900 via-purple-900 to-ghibli-dark' : 'bg-gradient-to-b from-blue-200 via-blue-100 to-ghibli-light'}`}></div>
          
          {/* Floating clouds */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div 
                key={`cloud-${i}`} 
                ref={el => parallaxRefs.clouds.current[i] = el}
                className={`absolute opacity-70 ${darkMode ? 'text-gray-700' : 'text-white'}`}
                style={{
                  left: `${i * 20}%`, 
                  top: `${i * 15 + 5}%`,
                  transform: `scale(${1 + i * 0.5})`,
                  transition: 'color 1s ease'
                }}
              >
                <CloudIcon className={`w-32 h-16 animate-float`} style={{ animationDelay: `${i * 0.5}s` }} />
              </div>
            ))}
          </div>
          
          {/* Floating spirits - only visible in dark mode */}
          <div className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ${darkMode ? 'opacity-80' : 'opacity-0'}`}>
            {[...Array(3)].map((_, i) => (
              <div 
                key={`spirit-${i}`} 
                ref={el => parallaxRefs.spirits.current[i] = el}
                className="absolute text-gray-500"
                style={{
                  right: `${i * 25 + 10}%`, 
                  top: `${i * 20 + 15}%`,
                  transform: `scale(${0.5 + i * 0.3})`,
                  opacity: 0.7
                }}
              >
                <SpiritIcon className="w-16 h-16 animate-float" style={{ animationDelay: `${i * 0.7}s` }} />
              </div>
            ))}
          </div>
          
          {/* Moving foreground */}
          <div 
            ref={parallaxRefs.foreground.current}
            className="absolute bottom-0 w-full h-64"
          >
            {/* Grass/water foreground */}
            <div className={`absolute bottom-0 w-full h-64 transition-colors duration-700 ${darkMode ? 'bg-gradient-to-t from-gray-900 to-transparent' : 'bg-gradient-to-t from-green-600 to-transparent'}`}></div>
          </div>
        </div>
  
        {/* Navigation Bar */}
        <nav className={`sticky top-0 z-50 backdrop-blur-md bg-opacity-80 ${darkMode ? 'bg-ghibli-dark' : 'bg-white'} transition-all duration-500 py-4 px-8 flex justify-between items-center shadow-lg`}>
          <div className="flex items-center">
            <TotoroIcon className={`w-10 h-10 mr-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
            <h1 className="font-ghibli text-2xl font-bold text-ghibli-teal">Studio Ghibli World</h1>
          </div>
  
          {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
            <Link to="/movie" className="font-medium hover:text-ghibli-teal transition-colors duration-300">Movies</Link>
            <Link to="/character" className="font-medium hover:text-ghibli-teal transition-colors duration-300">Characters</Link>
            <a href="#worlds" className="font-medium hover:text-ghibli-teal transition-colors duration-300">Worlds</a>
            <a href="#gallery" className="font-medium hover:text-ghibli-teal transition-colors duration-300">Gallery</a>
            <a href="#about" className="font-medium hover:text-ghibli-teal transition-colors duration-300">About</a>
            <a href="/create" className="font-medium hover:text-ghibli-teal transition-colors duration-300">Create Your Movie</a>
            
            {/* Desktop Theme Toggle */}
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full transition-colors duration-500 ${darkMode ? 'bg-yellow-300 text-ghibli-dark' : 'bg-indigo-900 text-yellow-200'}`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <TotoroIcon className="w-5 h-5" />
              ) : (
                <CatsIcon className="w-5 h-5" />
              )}
            </button>
          </div>
  
          {/* Mobile Controls */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Mobile Theme Toggle */}
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full transition-colors duration-500 ${darkMode ? 'bg-yellow-300 text-ghibli-dark' : 'bg-indigo-900 text-yellow-200'}`}
            >
              {darkMode ? (
                <TotoroIcon className="w-5 h-5" />
              ) : (
                <CatsIcon className="w-5 h-5" />
              )}
            </button>
  
            {/* Hamburger Menu Button */}
            <button 
              onClick={toggleMenu}
              className={`p-2 rounded-md ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
  
          {/* Mobile Menu */}
          {/* Mobile Menu */}
{isMenuOpen && (
  <div className={`absolute top-full left-0 right-0 md:hidden backdrop-blur-md bg-opacity-100 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <div className="px-8 py-4 space-y-4">
        <Link to="/movie" className="block font-medium hover:text-ghibli-teal transition-colors duration-300">Movies</Link>
        <Link to="/character" className="block font-medium hover:text-ghibli-teal transition-colors duration-300">Characters</Link>
      <a href="#worlds" className="block font-medium hover:text-ghibli-teal transition-colors duration-300">Worlds</a>
      <a href="#gallery" className="block font-medium hover:text-ghibli-teal transition-colors duration-300">Gallery</a>
      <a href="#about" className="block font-medium hover:text-ghibli-teal transition-colors duration-300">About</a>
      <a href="/create" className="block font-medium hover:text-ghibli-teal transition-colors duration-300">Create Your Movie</a>
    </div>
  </div>
)}
        </nav>
  
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center px-6 py-24 overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className={`font-ghibli text-5xl md:text-7xl mb-6 font-bold ${darkMode ? 'text-ghibli-teal' : 'text-ghibli-blue'} transition-colors duration-500`}>
                Discover the Magic of Ghibli
              </h1>
              
              <p className={`text-xl md:text-2xl mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                Step into worlds of wonder, imagination, and heart-warming stories that transcend time and culture.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/movie" className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-ghibli-teal text-white' : 'bg-ghibli-blue text-gray-900'} shadow-lg hover:shadow-xl`}>
                  Explore Films
                </Link>
                <Link to="/character" className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-transparent text-ghibli-teal border-2 border-ghibli-teal' : 'bg-transparent text-ghibli-blue border-2 border-ghibli-blue'} hover:shadow-lg`}>
                  Meet Characters
                </Link>
              </div>
            </div>
          </div>
  
        
        {/* Floating characters */}
        <div className="absolute top-1/4 left-10 md:left-24 animate-float opacity-75" style={{ animationDelay: '0.5s' }}>
          <TotoroIcon className={`w-24 h-24 ${darkMode ? 'text-gray-600' : 'text-gray-400'} transition-colors duration-500`} />
        </div>
        
        <div className="absolute bottom-1/4 right-10 md:right-32 animate-float opacity-75" style={{ animationDelay: '1.2s' }}>
          <NoFaceIcon className={`w-20 h-20 ${darkMode ? 'text-gray-600' : 'text-gray-400'} transition-colors duration-500`} />
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator">
          <svg className="w-10 h-10 text-ghibli-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="stories" className={`py-24 px-6 transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-blue-50'}`}>
        <div className="container mx-auto">
          <h2 className={`text-4xl font-ghibli font-bold text-center mb-16 ${darkMode ? 'text-ghibli-pink' : 'text-ghibli-purple'}`}>
            Magical Stories That Inspire
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature Card 1 */}
            <div className={`rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800 shadow-blue-900/20' : 'bg-white shadow-lg'}`}>
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-full ${darkMode ? 'bg-ghibli-purple bg-opacity-20' : 'bg-ghibli-purple bg-opacity-10'}`}>
                  <HakuDragonIcon className={`w-16 h-16 ${darkMode ? 'text-ghibli-purple' : 'text-ghibli-purple'}`} />
                </div>
              </div>
              
              <h3 className={`text-xl font-bold mb-4 text-center ${darkMode ? 'text-ghibli-purple' : 'text-ghibli-purple'}`}>
                Breathtaking Adventures
              </h3>
              
              <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Journey through enchanted worlds filled with wonder, danger, and beauty beyond imagination.
              </p>
            </div>
            
            {/* Feature Card 2 */}
            <div className={`rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800 shadow-green-900/20' : 'bg-white shadow-lg'}`}>
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-full ${darkMode ? 'bg-ghibli-green bg-opacity-20' : 'bg-ghibli-green bg-opacity-10'}`}>
                  <SootspriteIcon className={`w-16 h-16 ${darkMode ? 'text-ghibli-green' : 'text-ghibli-green'}`} />
                </div>
              </div>
              
              <h3 className={`text-xl font-bold mb-4 text-center ${darkMode ? 'text-ghibli-green' : 'text-ghibli-green'}`}>
                Unforgettable Characters
              </h3>
              
              <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Meet spirits, creatures, and heroes whose stories will touch your heart and stay with you forever.
              </p>
            </div>
            
            {/* Feature Card 3 */}
            <div className={`rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800 shadow-teal-900/20' : 'bg-white shadow-lg'}`}>
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-full ${darkMode ? 'bg-ghibli-teal bg-opacity-20' : 'bg-ghibli-teal bg-opacity-10'}`}>
                  <CatsIcon className={`w-16 h-16 ${darkMode ? 'text-ghibli-teal' : 'text-ghibli-teal'}`} />
                </div>
              </div>
              
              <h3 className={`text-xl font-bold mb-4 text-center ${darkMode ? 'text-ghibli-teal' : 'text-ghibli-teal'}`}>
                Timeless Themes
              </h3>
              
              <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Stories that explore environmentalism, pacifism, feminism, and the beauty of everyday life.
              </p>
            </div>
          </div>
        </div>
      </section>
      
{/* Featured Films Section */}
<section id="films" className={`py-24 px-6 transition-colors duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
  <div className="container mx-auto">
    <h2 className={`text-4xl font-ghibli font-bold text-center mb-16 ${darkMode ? 'text-ghibli-blue' : 'text-ghibli-blue'}`}>
      Iconic Films Collection
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {[
        { 
          title: "Spirited Away",
          year: 2001,
          director: "Hayao Miyazaki",
          description: "A young girl navigates a mysterious spirit world to rescue her parents.",
          image: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          rating: "98%"
        },
        { 
          title: "My Neighbor Totoro",
          year: 1988,
          director: "Hayao Miyazaki",
          description: "Two girls discover friendly forest spirits in postwar Japan.",
          image: "https://m.media-amazon.com/images/M/MV5BYWM3MDE3YjEtMzIzZC00ODE5LTgxNTItNmUyMTBkM2M2NmNiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          rating: "93%"
        },
        { 
          title: "Princess Mononoke",
          year: 1997,
          director: "Hayao Miyazaki",
          description: "A prince becomes involved in the struggle between forest gods and humans.",
          image: "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_.jpg",
          rating: "92%"
        },
        { 
          title: "Howl's Moving Castle",
          year: 2004,
          director: "Hayao Miyazaki",
          description: "A young woman cursed with an old body seeks help from a wizard.",
          image: "https://m.media-amazon.com/images/M/MV5BMTY1OTg0MjE3MV5BMl5BanBnXkFtZTcwNTUxMTkyMQ@@._V1_.jpg",
          rating: "87%"
        },
        { 
          title: "Kiki's Delivery Service",
          year: 1989,
          director: "Hayao Miyazaki",
          description: "A young witch starts a delivery service in a new city.",
          image: "https://m.media-amazon.com/images/I/81P1tU0RNkL._AC_UF1000,1000_QL80_.jpg",
          rating: "98%"
        },
        { 
          title: "Ponyo",
          year: 2008,
          director: "Hayao Miyazaki",
          description: "A goldfish princess longs to become human after befriending a boy.",
          image: "https://m.media-amazon.com/images/M/MV5BMTY1OTg0MjE3MV5BMl5BanBnXkFtZTcwNTUxMTkyMQ@@._V1_.jpg",
          rating: "91%"
        },
        { 
          title: "The Wind Rises",
          year: 2013,
          director: "Hayao Miyazaki",
          description: "A historical drama about aircraft designer Jiro Horikoshi.",
          image: "https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_.jpg",
          rating: "88%"
        },
        { 
          title: "Grave of the Fireflies",
          year: 1988,
          director: "Isao Takahata",
          description: "A heartbreaking story of siblings surviving wartime Japan.",
          image: "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
          rating: "100%"
        }
      ].map((film, index) => (
        <div 
          key={index}
          className={`rounded-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${darkMode ? 'bg-gray-700 shadow-lg' : 'bg-gray-50 shadow-md'}`}
        >
          <div className="h-64 overflow-hidden relative">
            <img 
              src={film.image} 
              alt={film.title} 
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60`}></div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <h3 className="text-xl font-bold text-white mb-1">{film.title}</h3>
              <p className="text-sm text-gray-300">{film.year} • {film.director}</p>
            </div>
            <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-ghibli-blue text-white' : 'bg-ghibli-blue text-white'}`}>
              ★ {film.rating}
            </div>
          </div>
          
          <div className="p-6">
            <p className={`mb-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {film.description}
            </p>
            
            <div className="flex justify-between items-center">
              
              <a href="#" className={`text-sm font-medium ${darkMode ? 'text-ghibli-yellow' : 'text-ghibli-orange'} hover:underline`}>
                More Info
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-16">
      <button className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-ghibli-teal text-white' : 'bg-ghibli-blue text-gray-900'} shadow-lg hover:shadow-xl`}>
        Explore All Films
      </button>
    </div>

    {/* Film Spotlight */}
    <div className={`mt-24 rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-blue-50'} shadow-xl`}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 relative">
          <img 
            src="https://i.redd.it/zbgthl07g3q91.jpg"
            alt="Studio Ghibli Collection"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${darkMode ? 'from-gray-900' : 'from-white'} via-transparent to-transparent`}></div>
        </div>
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h3 className={`text-3xl font-ghibli font-bold mb-6 ${darkMode ? 'text-ghibli-blue' : 'text-ghibli-blue'}`}>
            Studio Spotlight
          </h3>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Discover the complete collection of Studio Ghibli's visionary works, each film a masterpiece blending stunning animation with profound storytelling.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-ghibli-blue text-white' : 'bg-ghibli-blue text-white'}`}>
              24 Feature Films
            </span>
            <span className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-ghibli-green text-white' : 'bg-ghibli-green text-white'}`}>
              5 Academy Awards
            </span>
            <span className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-ghibli-red text-white' : 'bg-ghibli-red text-white'}`}>
              98% Average Rating
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


     {/* Characters Section */}
<section id="characters" className={`py-24 px-6 transition-colors duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
  <div className="container mx-auto">
    <h2 className={`text-4xl font-ghibli font-bold text-center mb-16 ${darkMode ? 'text-ghibli-yellow' : 'text-ghibli-orange'}`}>
      Beloved Characters
    </h2>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {/* Character cards with distinct images */}
      {[
        { 
          name: "Totoro", 
          film: "My Neighbor Totoro", 
          color: "blue",
          description: "The gentle forest spirit who befriends young sisters Satsuki and Mei.",
          image: "https://www.maison-ghibli.com/c/1427-category_default/my-neighbor-totoro.jpg" // Replace with actual Totoro image
        },
        { 
          name: "Chihiro / Sen", 
          film: "Spirited Away", 
          color: "purple",
          description: "A brave young girl who must save her parents in a mysterious spirit world.",
          image: "https://i.pinimg.com/736x/b3/bf/03/b3bf0366b59b8f6211064b9283487f43.jpg" // Replace with actual Chihiro image
        },
        { 
          name: "Howl", 
          film: "Howl's Moving Castle", 
          color: "teal",
          description: "A powerful yet vain wizard who lives in a magical moving castle.",
          image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/09/howl-s-moving-castle.jpg" // Replace with actual Howl image
        },
        { 
          name: "Kiki", 
          film: "Kiki's Delivery Service", 
          color: "red",
          description: "A young witch who moves to a new town to begin her mandatory year of independent life.",
          image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2025/02/10-details-only-true-studio-ghibli-fans-know-about-kiki-s-delivery-service.jpg" // Replace with actual Kiki image
        },
        { 
          name: "Princess Mononoke", 
          film: "Princess Mononoke", 
          color: "green",
          description: "A fierce warrior raised by wolves who fights to protect the forest from humans.",
          image: "https://i0.wp.com/theasiancut.com/wp-content/uploads/2023/12/thumb-1920-661879.png?fit=1920%2C1040&ssl=1" // Replace with actual Mononoke image
        },
        { 
          name: "No-Face", 
          film: "Spirited Away", 
          color: "purple",
          description: "A mysterious spirit who can absorb the traits of others and is drawn to Chihiro's kindness.",
          image: "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/30d62d9b-925c-40cb-816d-533e6bdea7f3/hayao-miyazaki-reveals-the-true-identity-of-no-face-in-spirited-away.jpg" // Replace with actual No-Face image
        },
        { 
          name: "Ponyo", 
          film: "Ponyo", 
          color: "orange",
          description: "A goldfish princess who wants to become human after falling in love with a boy named Sosuke.",
          image: "https://w0.peakpx.com/wallpaper/103/556/HD-wallpaper-ponyo-anime-studio-ghibli.jpg" // Replace with actual Ponyo image
        },
        { 
          name: "Jiji", 
          film: "Kiki's Delivery Service", 
          color: "blue",
          description: "Kiki's loyal black cat familiar who provides sarcastic commentary and support.",
          image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/Jiji-Finds-A-Cat-Mug-In-Kikis-Delivery-Service.jpg" // Replace with actual Jiji image
        }
      ].map((character, index) => (
        <div 
          key={index}
          className={`rounded-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${darkMode ? 'bg-gray-700 shadow-lg' : 'bg-gray-50 shadow-md'}`}
        >
          <div className="h-56 overflow-hidden relative">
            <img 
              src={character.image} 
              alt={character.name} 
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60`}></div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <h3 className="text-xl font-bold text-white mb-1">{character.name}</h3>
              <p className="text-sm text-gray-300">{character.film}</p>
            </div>
          </div>
          
          <div className="p-6">
            <p className={`mb-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {character.description}
            </p>
            
            <div className="flex justify-between items-center">
              <span className={`px-3 py-1 rounded-full text-xs ${darkMode ? `bg-${character.color}-900 text-${character.color}-300` : `bg-${character.color}-100 text-${character.color}-800`}`}>
                {character.film}
              </span>
              <a href="#" className={`inline-block text-sm font-medium underline ${darkMode ? `text-ghibli-${character.color}` : `text-ghibli-${character.color}`}`}>
                Learn more
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="text-center mt-16">
      <button className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-ghibli-yellow text-white' : 'bg-ghibli-orange text-gray-900'} shadow-lg hover:shadow-xl`}>
        View All Characters
      </button>
    </div>

    {/* Character Spotlight */}
    <div className={`mt-24 rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-blue-50'} shadow-xl`}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/614d76b77faa7f2bddeff4dc/1651395785865-JTRKRHGONPZ4QFFY3L2Z/Spirited+Away-+The+Process+of+Maturity+in+Visual+Design.png" 
            alt="Spirited Away Characters" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h3 className={`text-3xl font-ghibli font-bold mb-6 ${darkMode ? 'text-ghibli-purple' : 'text-ghibli-purple'}`}>
            Character Spotlight: Spirited Away
          </h3>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            From the mysterious No-Face to the wise Zeniba, the enchanted bathhouse in Spirited Away is home to some of Studio Ghibli's most memorable characters.
          </p>
          <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Each character represents different aspects of Japanese folklore and modern society, creating a rich tapestry of personalities that help Chihiro on her journey.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-800'}`}>
              Yubaba
            </span>
            <span className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
              Haku
            </span>
            <span className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`}>
              Lin
            </span>
            <span className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800'}`}>
              Kamaji
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Character Trivia */}
    <div className="mt-16 grid md:grid-cols-3 gap-6">
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
        <h4 className={`text-xl font-bold mb-4 ${darkMode ? 'text-ghibli-green' : 'text-ghibli-green'}`}>Did You Know?</h4>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Totoro makes cameo appearances in several other Ghibli films, including Kiki's Delivery Service as a stuffed toy.
        </p>
      </div>
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
        <h4 className={`text-xl font-bold mb-4 ${darkMode ? 'text-ghibli-teal' : 'text-ghibli-teal'}`}>Character Origins</h4>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          The character of No-Face was inspired by traditional Japanese theatrical masks and the concept of faceless spirits in folklore.
        </p>
      </div>
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
        <h4 className={`text-xl font-bold mb-4 ${darkMode ? 'text-ghibli-yellow' : 'text-ghibli-yellow'}`}>Fan Favorite</h4>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Calcifer the fire demon from Howl's Moving Castle consistently ranks in the top 5 most beloved Ghibli characters in global fan polls.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* Worlds Section - More Graphical */}
      <section id="worlds" className={`relative py-24 px-6 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-blue-100'}`}>
        <div className="container mx-auto relative z-10">
          <h2 className={`text-4xl font-ghibli font-bold text-center mb-16 ${darkMode ? 'text-ghibli-teal' : 'text-ghibli-blue'}`}>
            Enchanted Worlds
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* World Card 1 */}
            <div className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transform transition-transform hover:scale-[1.02]`}>
              <div className="h-64 relative overflow-hidden">
                <img src="https://wallpapers.com/images/hd/studio-ghibli-2048-x-1152-background-lp4tlhb7y6dp1gpi.jpg" alt="Forest World" className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60`}></div>
                <h3 className="absolute bottom-4 left-6 text-white text-2xl font-bold">Enchanted Forests</h3>
              </div>
              
              <div className="p-6">
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Lush, vibrant forests where spirits dwell and magic flows through ancient trees. These realms reconnect us with nature's power and mystery.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`}>
                    Totoro's Forest
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-teal-900 text-teal-300' : 'bg-teal-100 text-teal-800'}`}>
                    Princess Mononoke
                  </span>
                </div>
              </div>
            </div>
            
            {/* World Card 2 */}
            <div className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transform transition-transform hover:scale-[1.02]`}>
              <div className="h-64 relative overflow-hidden">
                <img src="https://www.nippon.com/en/ncommon/contents/japan-topics/893927/893927.jpg" alt="Spirit World" className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60`}></div>
                <h3 className="absolute bottom-4 left-6 text-white text-2xl font-bold">Spirit Realms</h3>
              </div>
              
              <div className="p-6">
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Mystical domains where spirits, gods, and supernatural entities reside, existing parallel to our human world yet following different rules.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-800'}`}>
                    Spirited Away
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                    Howl's Castle
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 w-full h-64 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,100 C150,180 350,0 500,100 C650,180 850,0 1000,100 C1150,180 1350,0 1500,100" stroke="currentColor" strokeWidth="2" fill="none" className={`${darkMode ? 'text-ghibli-teal' : 'text-ghibli-blue'}`} />
          </svg>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section
  id="gallery"
  className={`py-24 px-6 transition-colors duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
>
  <div className="container mx-auto">
    <h2
      className={`text-4xl font-ghibli font-bold text-center mb-16 ${darkMode ? 'text-ghibli-red' : 'text-ghibli-red'}`}
    >
      Visual Gallery
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[
        // 🎯 Paste your image links here
        'https://www.marinabaysands.com/content/dam/revamp/ASMrevamp/studio-ghibli/The-World-of-Studio-Ghibli-v2-1600x650.jpg',
        'https://i.pinimg.com/736x/6a/6c/95/6a6c953f3859122c1296893b972fe44a.jpg',
        'https://i0.wp.com/machronicle.com/wp-content/uploads/2023/12/BATHRimg3-jpg.webp?ssl=1',
        'https://jw-webmagazine.com/wp-content/uploads/2019/03/The-Secret-World-of-Arrietty.jpg',
        'https://cdn.bulbapp.io/frontend/images/a198daa2-91c3-407f-b9a3-34d9347dac5d/1',
        'https://mrwallpaper.com/images/hd/studio-ghibli-scenery-totoro-forest-uw59et9u329urs7c.jpg',
        'https://c4.wallpaperflare.com/wallpaper/892/692/922/howl-s-moving-castle-studio-ghibli-fantasy-art-clouds-daylight-hd-wallpaper-preview.jpg',
        'https://wallpapersok.com/images/high/studio-ghibli-scenery-farm-field-4blvk7p5amlgd2gf.jpg',
      ].map((src, index) => (
        <div
          key={`gallery-${index}`}
          className="overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
        >
          <img
            src={src}
            alt={`Ghibli scene ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <button
        className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-ghibli-yellow text-white' : 'bg-ghibli-orange text-gray-900'} shadow-lg hover:shadow-xl`}
      >
        View Full Gallery
      </button>
    </div>
  </div>
</section>

      
      {/* Testimonials/Reviews Section */}
      <section className={`py-24 px-6 transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-blue-50'}`}>
        <div className="container mx-auto">
          <h2 className={`text-4xl font-ghibli font-bold text-center mb-16 ${darkMode ? 'text-ghibli-purple' : 'text-ghibli-purple'}`}>
            What Fans Are Saying
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className={`rounded-2xl p-8 transition-all duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-04.jpg" alt="User" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <p className={`text-center italic mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                "Studio Ghibli films have been a source of comfort and inspiration throughout my life. The attention to detail and emotional depth is unmatched."
              </p>
              
              <h4 className={`text-center font-bold ${darkMode ? 'text-ghibli-purple' : 'text-ghibli-purple'}`}>
                Emily S.
              </h4>
              <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Lifelong Fan
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className={`rounded-2xl p-8 transition-all duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-06.jpg" alt="User" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <p className={`text-center italic mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                "The way Ghibli films blend fantasy with real human emotions creates stories that resonate deeply regardless of age or background."
              </p>
              
              <h4 className={`text-center font-bold ${darkMode ? 'text-ghibli-purple' : 'text-ghibli-purple'}`}>
                Michael T.
              </h4>
              <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Film Critic
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className={`rounded-2xl p-8 transition-all duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-01.jpg" alt="User" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <p className={`text-center italic mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                "I introduced my children to these films, and now they're sharing them with their children. Ghibli stories truly are timeless."
              </p>
              
              <h4 className={`text-center font-bold ${darkMode ? 'text-ghibli-purple' : 'text-ghibli-purple'}`}>
                Sophia L.
              </h4>
              <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Three Generations of Fans
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className={`relative py-24 px-6 overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto relative z-10">
          <div className={`max-w-3xl mx-auto rounded-3xl p-10 ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} shadow-lg`}>
            <h2 className={`text-3xl font-ghibli font-bold text-center mb-8 ${darkMode ? 'text-ghibli-teal' : 'text-ghibli-blue'}`}>
              Join Our Magical Newsletter
            </h2>
            
            <p className={`text-center mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Stay updated with new releases, behind-the-scenes content, and special events from the world of Studio Ghibli.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className={`flex-grow px-6 py-3 rounded-full focus:outline-none ${darkMode ? 'bg-gray-600 text-white border border-gray-500 focus:border-ghibli-teal' : 'bg-white text-gray-800 border border-gray-200 focus:border-ghibli-blue'}`}
              />
              <button className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-ghibli-teal text-white' : 'bg-ghibli-blue text-gray-900'} shadow-lg hover:shadow-xl`}>
                Subscribe
              </button>
            </form>
            
            <p className={`text-xs text-center mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-16 -right-16 opacity-10">
          <TotoroIcon className={`w-64 h-64 ${darkMode ? 'text-ghibli-teal' : 'text-ghibli-blue'}`} />
        </div>
        <div className="absolute -top-16 -left-16 opacity-10">
          <SootspriteIcon className={`w-64 h-64 ${darkMode ? 'text-ghibli-teal' : 'text-ghibli-blue'}`} />
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className={`py-24 px-6 transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-blue-50'}`}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-ghibli font-bold text-center mb-16 ${darkMode ? 'text-ghibli-pink' : 'text-ghibli-pink'}`}>
              About Studio Ghibli
            </h2>
            
            <div className={`rounded-2xl p-8 md:p-12 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="md:w-1/3">
                  <div className="rounded-full overflow-hidden">
                    <img src="https://i.pinimg.com/564x/b5/57/b2/b557b2c98ab400c3c95c138d2d9b93a2.jpg" alt="Studio Logo" className="w-full" />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Founded in 1985 by directors Hayao Miyazaki and Isao Takahata, Studio Ghibli has become world-renowned for its animated feature films characterized by rich storytelling, stunning visuals, and profound themes.
                  </p>
                  
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    The studio's works often explore the relationship between humanity and nature, the innocence of childhood, and the importance of compassion in a complex world.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className={`text-4xl font-bold mb-2 ${darkMode ? 'text-ghibli-pink' : 'text-ghibli-pink'}`}>20+</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Feature Films</p>
                </div>
                
                <div>
                  <h3 className={`text-4xl font-bold mb-2 ${darkMode ? 'text-ghibli-pink' : 'text-ghibli-pink'}`}>5</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Academy Award Nominations</p>
                </div>
                
                <div>
                  <h3 className={`text-4xl font-bold mb-2 ${darkMode ? 'text-ghibli-pink' : 'text-ghibli-pink'}`}>Millions</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Of Fans Worldwide</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className={`inline-block px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-ghibli-pink text-white' : 'bg-ghibli-pink text-gray-900'} shadow-lg hover:shadow-xl`}>
                Learn More About Our History
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className={`py-16 px-6 transition-colors duration-500 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-100'}`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <TotoroIcon className={`w-8 h-8 mr-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                <h3 className="font-ghibli text-xl font-bold text-ghibli-teal">Studio Ghibli World</h3>
              </div>
              
              <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                A fan-created tribute to the magical worlds and stories of Studio Ghibli.
              </p>
              
              <div className="flex space-x-4">
                {/* Social media icons */}
                {['facebook', 'twitter', 'instagram', 'youtube'].map(social => (
                  <a key={social} href="#" className={`w-10 h-10 flex items-center justify-center rounded-full ${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors duration-300`}>
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className={`text-lg font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Films</h4>
              <ul className={`space-y-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li><a href="#" className="hover:underline">Most Popular</a></li>
                <li><a href="#" className="hover:underline">Latest Releases</a></li>
                <li><a href="#" className="hover:underline">Classics</a></li>
                <li><a href="#" className="hover:underline">Awards</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className={`text-lg font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Explore</h4>
              <ul className={`space-y-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li><a href="#" className="hover:underline">Characters</a></li>
                <li><a href="#" className="hover:underline">Worlds</a></li>
                <li><a href="#" className="hover:underline">Art Gallery</a></li>
                <li><a href="#" className="hover:underline">Behind the Scenes</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className={`text-lg font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Support</h4>
              <ul className={`space-y-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className={`mt-16 pt-8 border-t ${darkMode ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-500'} text-sm text-center`}>
            <p>© {new Date().getFullYear()} Studio Ghibli Fan Site. This is a fan-created tribute website.</p>
            <p className="mt-2">All Studio Ghibli characters, films, and related content are trademarks of Studio Ghibli Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GhibliLanding;