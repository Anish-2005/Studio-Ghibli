import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const CloudIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 100 50" fill="currentColor">
      <path d="M10 30C10 22.5 15 20 20 20C22.5 10 32.5 5 40 10C45 5 55 5 60 10C67.5 7.5 75 12.5 75 20C85 20 90 27.5 90 35C90 42.5 82.5 45 80 45H20C17.5 45 10 42.5 10 35C10 35 10 32.5 10 30Z" />
    </svg>
  );
  const TotoroIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 15C30 15 20 35 20 50C20 65 30 85 50 85C70 85 80 65 80 50C80 35 70 15 50 15Z" />
      <circle cx="35" cy="45" r="5" fill="white" />
      <circle cx="65" cy="45" r="5" fill="white" />
      <circle cx="35" cy="45" r="2" fill="black" />
      <circle cx="65" cy="45" r="2" fill="black" />
      <path className="totoro-ears" d="M35 20L30 5L40 10L50 0L60 10L70 5L65 20" />
      <path d="M40 60Q50 70 60 60" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  );
  
  const CatsIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 150 100" fill="currentColor">
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
  
  const SpiritIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100">
      <path d="M50 20C35 20 20 35 20 60C20 85 35 90 50 90C65 90 80 85 80 60C80 35 65 20 50 20Z" fill="currentColor" />
      <circle cx="40" cy="50" r="5" fill="white" />
      <circle cx="60" cy="50" r="5" fill="white" />
      <circle cx="40" cy="50" r="2" fill="black" />
      <circle cx="60" cy="50" r="2" fill="black" />
      <path d="M45 65Q50 70 55 65" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  );
  
  const SootspriteIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
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
const CharactersPage = () => {
    const [darkMode, setDarkMode] = useState(() => {
      if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem('ghibliDarkMode')) || false;
      }
      return false;
    });
  
    const parallaxRefs = {
      clouds: useRef([]),
      spirits: useRef([]),
      foreground: useRef(null)
    };
  
    useEffect(() => {
      document.documentElement.classList.toggle('dark', darkMode);
      localStorage.setItem('ghibliDarkMode', JSON.stringify(darkMode));
    }, [darkMode]);
  
    // Parallax Effect
    useEffect(() => {
      const handleScroll = () => {
        const position = window.pageYOffset;
        
        parallaxRefs.clouds.current.forEach((cloud, index) => {
          if (cloud) {
            const speed = 0.1 + (index * 0.05);
            cloud.style.transform = `translateY(${position * speed}px)`;
          }
        });
  
        parallaxRefs.spirits.current.forEach((spirit, index) => {
          if (spirit) {
            const speed = 0.2 - (index * 0.03);
            spirit.style.transform = `translateY(${position * speed}px)`;
          }
        });
  
        if (parallaxRefs.foreground.current) {
          parallaxRefs.foreground.current.style.transform = `translateY(${position * 0.3}px)`;
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const toggleDarkMode = () => setDarkMode(prev => !prev);
  
    const characters = [
        {
          name: "Totoro",
          film: "My Neighbor Totoro",
          image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg/250px-My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg",
          species: "Forest Spirit",
          gender: "Male",
          firstAppearance: 1988,
          description: "A gentle, giant forest spirit who serves as the guardian of the forest. Known for his iconic grin and umbrella-less rides in the rain.",
          quotes: ["The wind is rising! We must try to live!", "Only children can see me clearly."],
          related: ["Mei Kusakabe", "Satsuki Kusakabe", "Catbus"],
          color: "green"
        },
        {
          name: "Chihiro Ogino",
          film: "Spirited Away",
          image: "https://i.pinimg.com/736x/f9/d2/7a/f9d27ad3363c502c4b6ef6eb7f5c32fa.jpg",
          species: "Human",
          gender: "Female",
          firstAppearance: 2001,
          description: "A brave young girl who navigates the spirit world to rescue her parents, learning courage and self-reliance along the way.",
          quotes: ["Once you've met someone you never really forget them.", "I think I can handle it."],
          related: ["Haku", "No-Face", "Yubaba"],
          color: "purple"
        },
        {
          name: "Howl Jenkins Pendragon",
          film: "Howl's Moving Castle",
          image: "https://www.ghibli.jp/gallery/howl015.jpg",
          species: "Wizard",
          gender: "Male",
          firstAppearance: 2004,
          description: "A powerful but vain wizard who lives in a magical moving castle, hiding a compassionate heart beneath his flamboyant exterior.",
          quotes: ["I feel terrible, like there's a weight on my chest.", "A heart's a heavy burden."],
          related: ["Sophie Hatter", "Calcifer", "Markl"],
          color: "blue"
        },
        {
          name: "Princess Mononoke",
          film: "Princess Mononoke",
          image: "https://www.ghibli.jp/gallery/mononoke013.jpg",
          species: "Human (Raised by wolves)",
          gender: "Female",
          firstAppearance: 1997,
          description: "A fierce warrior raised by wolves, fighting to protect the forest from human destruction.",
          quotes: ["I'm not afraid to die. I'd do anything to get you out of my forest!", "Look! Everyone! The Forest Spirit!"],
          related: ["Ashitaka", "Moro", "Okkoto"],
          color: "green"
        },
        {
          name: "Kiki",
          film: "Kiki's Delivery Service",
          image: "https://www.ghibli.jp/gallery/majo024.jpg",
          species: "Witch",
          gender: "Female",
          firstAppearance: 1989,
          description: "A young witch who starts her own delivery service in a new town, learning independence and self-confidence.",
          quotes: ["I was so excited to leave home, I forgot to bring the most important thing.", "Flying used to be fun until I started doing it for a living."],
          related: ["Jiji", "Osono", "Tombo"],
          color: "red"
        },
        {
          name: "Ponyo",
          film: "Ponyo",
          image: "https://www.ghibli.jp/gallery/ponyo024.jpg",
          species: "Goldfish/Human",
          gender: "Female",
          firstAppearance: 2008,
          description: "A magical goldfish princess who becomes human after forming a bond with a young boy named Sōsuke.",
          quotes: ["Ponyo loves Sosuke!", "I'm a little girl now!"],
          related: ["Sōsuke", "Fujimoto", "Gran Mamare"],
          color: "pink"
        },
        {
          name: "Ashitaka",
          film: "Princess Mononoke",
          image: "https://www.ghibli.jp/gallery/mononoke014.jpg",
          species: "Human",
          gender: "Male",
          firstAppearance: 1997,
          description: "A noble prince cursed by a demon boar, seeking to understand the balance between nature and civilization.",
          quotes: ["Life is suffering. It is hard. The world is cursed. But still, you find reasons to keep living."],
          related: ["San", "Lady Eboshi", "Moro"],
          color: "teal"
        },
        {
          name: "Sophie Hatter",
          film: "Howl's Moving Castle",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTj0P14vR4zXPTJ38TLWjulA-uWKbpt3P-w&s",
          species: "Human",
          gender: "Female",
          firstAppearance: 2004,
          description: "A young hat-maker transformed into an old woman, discovering inner strength and love in her cursed journey.",
          quotes: ["After all, I'm ninety years old. I haven't got time to be timid!", "A heart's a heavy burden."],
          related: ["Howl", "Calcifer", "Madame Suliman"],
          color: "purple"
        }
      ];

    return (
      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-ghibli-dark text-white' : 'bg-ghibli-light text-ghibli-dark'}`}>
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden -z-10">
          <div className={`absolute inset-0 transition-colors duration-700 ${darkMode ? 'bg-gradient-to-b from-indigo-900 via-purple-900 to-ghibli-dark' : 'bg-gradient-to-b from-blue-200 via-blue-100 to-ghibli-light'}`}></div>
          
          {/* Floating clouds */}
          {[...Array(5)].map((_, i) => (
            <div 
              key={`cloud-${i}`}
              ref={el => parallaxRefs.clouds.current[i] = el}
              className={`absolute opacity-70 ${darkMode ? 'text-gray-700' : 'text-white'}`}
              style={{
                left: `${i * 20}%`,
                top: `${i * 15 + 5}%`,
                transform: `scale(${1 + i * 0.5})`
              }}
            >
              <CloudIcon className="w-32 h-16 animate-float" />
            </div>
          ))}
  
          {/* Floating spirits */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${darkMode ? 'opacity-80' : 'opacity-0'}`}>
            {[...Array(3)].map((_, i) => (
              <div 
                key={`spirit-${i}`}
                ref={el => parallaxRefs.spirits.current[i] = el}
                className="absolute text-gray-500"
                style={{
                  right: `${i * 25 + 10}%`,
                  top: `${i * 20 + 15}%`,
                  transform: `scale(${0.5 + i * 0.3})`
                }}
              >
                <SpiritIcon className="w-16 h-16 animate-float" />
              </div>
            ))}
          </div>
        </div>
  
        {/* Navigation */}
        <nav className={`sticky top-0 z-50 backdrop-blur-md bg-opacity-80 ${darkMode ? 'bg-ghibli-dark' : 'bg-white'} py-4 px-8 flex justify-between items-center shadow-lg`}>
        <div className="flex items-center">
          <Link 
            to="/" 
            className={`mr-6 p-2 rounded-full hover:bg-opacity-20 transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
          >
            <svg 
              className={`w-6 h-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <TotoroIcon className={`w-10 h-10 mr-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
          <h1 className="font-ghibli text-2xl font-bold text-ghibli-teal">Ghibli Characters</h1>
          </div>
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors duration-500 ${darkMode ? 'bg-yellow-300 text-ghibli-dark' : 'bg-indigo-900 text-yellow-200'}`}
          >
            {darkMode ? <CatsIcon className="w-6 h-6" /> : <TotoroIcon className="w-6 h-6" />}
          </button>
        </nav>
  
        {/* Main Content */}
        <section className="relative min-h-screen flex items-center px-6 py-24 overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className={`font-ghibli text-5xl md:text-7xl mb-6 font-bold ${darkMode ? 'text-ghibli-teal' : 'text-ghibli-blue'}`}>
                Magical Characters
              </h1>
              <p className={`text-xl md:text-2xl mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Discover the beloved characters that bring Studio Ghibli's worlds to life
              </p>
            </div>
  
            {/* Character Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {characters.map((character, index) => (
                <div 
                  key={index}
                  className={`rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-2 ${
                    darkMode ? 'bg-gray-800 shadow-teal-900/20' : 'bg-white shadow-lg'
                  }`}
                >
                  <div className="relative h-64 mb-4 overflow-hidden rounded-xl">
                    <img 
                      src={character.image} 
                      alt={character.name}
                      className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-gray-900' : 'from-white'} via-transparent to-transparent`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-ghibli-teal' : 'text-ghibli-blue'}`}>
                    {character.name}
                  </h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {character.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      {character.species}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      {character.film}
                    </span>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Character Spotlight */}
            <div className={`mt-24 rounded-2xl p-8 ${darkMode ? 'bg-gray-900' : 'bg-blue-50'} shadow-xl`}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 relative overflow-hidden rounded-xl">
                  <img
                    src="https://www.ghibli.jp/gallery/chihiro042.jpg"
                    alt="Spirited Away"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className={`text-3xl font-ghibli font-bold mb-6 ${darkMode ? 'text-ghibli-pink' : 'text-ghibli-purple'}`}>
                    Featured Ensemble
                  </h3>
                  <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Journey through the iconic characters of Spirited Away, each representing unique aspects of Japanese folklore and personal growth.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {['Chihiro', 'Haku', 'No-Face', 'Yubaba'].map((name, i) => (
                      <div 
                        key={i}
                        className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors hover:bg-opacity-80`}
                      >
                        <p className="font-semibold">{name}</p>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {{
                            Chihiro: 'Courageous Protagonist',
                            Haku: 'Mysterious Spirit',
                            'No-Face': 'Lonely Wanderer',
                            Yubaba: 'Powerful Witch'
                          }[name]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <SootspriteIcon className={`w-8 h-8 ${darkMode ? 'text-ghibli-yellow' : 'text-ghibli-orange'}`} />
          </div>
        </div>
      </div>
    );
  };
  
  export default CharactersPage;