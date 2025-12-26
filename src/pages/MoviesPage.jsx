import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Reuse the same icons from CharactersPage
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

const MoviesPage = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem('ghibliDarkMode')) || false;
  });

  const parallaxRefs = {
    clouds: useRef([]),
    stars: useRef([]),
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

      if (parallaxRefs.foreground.current) {
        parallaxRefs.foreground.current.style.transform = `translateY(${position * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const ghibliMovies = [
    {
      title: "The Castle of Cagliostro",
      year: 1979,
      director: "Hayao Miyazaki",
      image: "https://m.media-amazon.com/images/S/pv-target-images/b8db310c788a257c137c92894416fe4ea039736cf6bb929c9cbcc2f6ed04c93e.jpg",
      description: "Lupin III's greatest heist in a European principality.",
      awards: [],
      rating: 86,
      color: "blue"
    },
    {
      title: "Nausicaä of the Valley of the Wind",
      year: 1984,
      director: "Hayao Miyazaki",
      image: "https://www.ghibli.jp/images/nausicaa.jpg",
      description: "Princess warrior protects her ecosystem in a post-apocalyptic world.",
      awards: [],
      rating: 90,
      color: "green"
    },
    {
      title: "Castle in the Sky",
      year: 1986,
      director: "Hayao Miyazaki",
      image: "https://www.ghibli.jp/images/laputa.jpg",
      description: "Young orphans search for a legendary floating city.",
      awards: [],
      rating: 92,
      color: "teal"
    },
    {
      title: "Grave of the Fireflies",
      year: 1988,
      director: "Isao Takahata",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZq31JCL1zndLfRIZ7OGzQSP7GloPGOn-Hw&s",
      description: "Devastating story of siblings surviving WWII Japan.",
      awards: [],
      rating: 97,
      color: "red"
    },
    {
      title: "My Neighbor Totoro",
      year: 1988,
      director: "Hayao Miyazaki",
      image: "https://www.ghibli.jp/images/totoro.jpg",
      description: "Magical forest spirits and childhood wonder.",
      awards: [],
      rating: 94,
      color: "green"
    },
    {
      title: "Kiki's Delivery Service",
      year: 1989,
      director: "Hayao Miyazaki",
      image: "https://www.ghibli.jp/images/majo.jpg",
      description: "Young witch starts a delivery business in a coastal town.",
      awards: [],
      rating: 93,
      color: "purple"
    },
    {
      title: "Only Yesterday",
      year: 1991,
      director: "Isao Takahata",
      image: "https://www.ghibli.jp/images/omoide.jpg",
      description: "City woman reflects on childhood in rural Japan.",
      awards: [],
      rating: 89,
      color: "yellow"
    },
    {
      title: "Porco Rosso",
      year: 1992,
      director: "Hayao Miyazaki",
      image: "https://www.ghibli.jp/images/porco.jpg",
      description: "Anthropomorphic pig fighter pilot in Adriatic Sea.",
      awards: [],
      rating: 91,
      color: "red"
    },
    {
      title: "Ocean Waves",
      year: 1993,
      director: "Tomomi Mochizuki",
      image: "https://www.ghibli.jp/images/umi.jpg",
      description: "Teenage love triangle in Kochi, Japan.",
      awards: [],
      rating: 76,
      color: "blue"
    },
    {
      title: "Pom Poko",
      year: 1994,
      director: "Isao Takahata",
      image: "https://www.ghibli.jp/images/tanuki.jpg",
      description: "Raccoon dogs fight urban development using transformation magic.",
      awards: [],
      rating: 83,
      color: "orange"
    },
    {
      title: "Whisper of the Heart",
      year: 1995,
      director: "Yoshifumi Kondō",
      image: "https://www.ghibli.jp/images/mimi.jpg",
      description: "Young writer finds inspiration through mysterious cat statue.",
      awards: [],
      rating: 91,
      color: "pink"
    },
    {
      title: "Princess Mononoke",
      year: 1997,
      director: "Hayao Miyazaki",
      image: "https://www.ghibli.jp/images/mononoke.jpg",
      description: "Epic clash between industrialism and forest gods.",
      awards: ["Japan Academy Prize for Best Film"],
      rating: 93,
      color: "green"
    },
    {
      title: "My Neighbors the Yamadas",
      year: 1999,
      director: "Isao Takahata",
      image: "https://www.ghibli.jp/images/yamada.jpg",
      description: "Watercolor vignettes of family life.",
      awards: [],
      rating: 77,
      color: "yellow"
    },
    {
      title: "Spirited Away",
      year: 2001,
      director: "Hayao Miyazaki",
      image: "https://www.ghibli.jp/images/chihiro.jpg",
      description: "Girl navigates spirit world to rescue parents.",
      awards: ["Academy Award for Best Animated Feature"],
      rating: 96,
      color: "purple"
    },
    {
      title: "The Cat Returns",
      year: 2002,
      director: "Hiroyuki Morita",
      image: "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1571349221675-KPROG5BRC7L7WJBIPJ05/image-asset.jpeg",
      description: "Girl enters magical cat kingdom.",
      awards: [],
      rating: 83,
      color: "indigo"
    },
    {
      title: "Howl's Moving Castle",
      year: 2004,
      director: "Hayao Miyazaki",
      image: "https://www.ghibli.jp/images/howl.jpg",
      description: "Young woman cursed with old body meets wizard.",
      awards: ["Oscar Nomination"],
      rating: 87,
      color: "blue"
    },
    {
      title: "Tales from Earthsea",
      year: 2006,
      director: "Gorō Miyazaki",
      image: "https://www.ghibli.jp/images/ged.jpg",
      description: "Epic fantasy based on Ursula K. Le Guin's novels.",
      awards: [],
      rating: 53,
      color: "teal"
    },
    {
      title: "Ponyo",
      year: 2008,
      director: "Hayao Miyazaki",
      image: "https://www.ghibli.jp/images/ponyo.jpg",
      description: "Fish-girl becomes human in coastal adventure.",
      awards: [],
      rating: 90,
      color: "pink"
    },
    {
      title: "Arrietty",
      year: 2010,
      director: "Hiromasa Yonebayashi",
      image: "https://www.ghibli.jp/images/karigurashi.jpg",
      description: "Tiny Borrowers living under human house.",
      awards: [],
      rating: 94,
      color: "green"
    },
    {
      title: "From Up on Poppy Hill",
      year: 2011,
      director: "Gorō Miyazaki",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjjkcU2iGcNCKPt7e5dy8GYQV6rnpOjbiWA&s",
      description: "1960s Yokohama students fight to save clubhouse.",
      awards: [],
      rating: 85,
      color: "red"
    },
    {
      title: "The Wind Rises",
      year: 2013,
      director: "Hayao Miyazaki",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqzhswr-xHy-eLiYGwNXpif01l7aVUD6Z8Q&s",
      description: "Biographical drama of aircraft designer Jiro Horikoshi.",
      awards: ["Oscar Nomination"],
      rating: 88,
      color: "indigo"
    },
    {
      title: "The Tale of the Princess Kaguya",
      year: 2013,
      director: "Isao Takahata",
      image: "https://www.ghibli.jp/images/kaguyahime.jpg",
      description: "Mysterious moon princess in watercolor masterpiece.",
      awards: ["Oscar Nomination"],
      rating: 97,
      color: "yellow"
    },
    {
      title: "When Marnie Was There",
      year: 2014,
      director: "Hiromasa Yonebayashi",
      image: "https://www.ghibli.jp/images/marnie.jpg",
      description: "Girl discovers mysterious connection to abandoned mansion.",
      awards: ["Oscar Nomination"],
      rating: 92,
      color: "blue"
    },
    {
      title: "The Red Turtle",
      year: 2016,
      director: "Michaël Dudok de Wit",
      image: "https://variety.com/wp-content/uploads/2016/05/the-red-turtle-cannes.jpg",
      description: "Wordless fable of castaway and magical turtle.",
      awards: [],
      rating: 93,
      color: "red"
    },
    {
      title: "Earwig and the Witch",
      year: 2020,
      director: "Gorō Miyazaki",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAChDfmcl-cDF8f3wGQfKLfqUxWiPJTKVzhg&s",
      description: "Orphan girl discovers magical powers (CGI film).",
      awards: [],
      rating: 48,
      color: "purple"
    },
    {
      title: "How Do You Live?",
      year: 2023,
      director: "Hayao Miyazaki",
      image: "https://www.ghibli.jp/images/kimitachi.jpg",
      description: "Miyazaki's final film about wartime Japan.",
      awards: ["Academy Award for Best Animated Feature"],
      rating: 95,
      color: "indigo"
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
          <h1 className="font-ghibli text-2xl font-bold text-ghibli-teal">Ghibli Films</h1>
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
              Studio Ghibli Films
            </h1>
            <p className={`text-xl md:text-2xl mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Explore the magical world of Studio Ghibli's iconic animated films
            </p>
          </div>

          {/* Movie Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {ghibliMovies.map((movie, index) => (
            <div 
            key={index}
            className={`rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-2 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg relative ${
                movie.awards.includes("Academy Award") ? 'glowing-border' : ''
            }`}
            >
            {movie.awards.includes("Academy Award") && (
                <div className="absolute top-2 right-2">
                <span className="text-yellow-400 text-2xl">🏆</span>
                </div>
            )}
                <div className="relative h-64 mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={movie.image} 
                    alt={movie.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-gray-900' : 'from-white'} via-transparent to-transparent`} />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-ghibli-teal' : 'text-ghibli-blue'}`}>
                  {movie.title}
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {movie.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    {movie.year}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    {movie.director}
                  </span>
                  {movie.awards.map((award, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800"
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Academy Awards Section */}
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
                  Academy Award Winners
                </h3>
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Studio Ghibli's masterpiece "Spirited Away" made history as the first non-English film to win the Academy Award for Best Animated Feature in 2003.
                </p>
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🏆</span>
                      <div>
                        <h4 className="font-semibold">Spirited Away</h4>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          2003 Winner - Best Animated Feature
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add CSS for glowing effect
const styles = `
  .glowing-border {
    position: relative;
    box-shadow: 0 0 20px rgba(79, 192, 181, 0.3);
    animation: glow 2s infinite alternate;
  }

  @keyframes glow {
    from {
      box-shadow: 0 0 10px rgba(79, 192, 181, 0.3);
    }
    to {
      box-shadow: 0 0 20px rgba(79, 192, 181, 0.6);
    }
  }
`;

// Inject styles
document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);

export default MoviesPage;