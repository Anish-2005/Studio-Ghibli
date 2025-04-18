import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaSpinner, FaMagic } from 'react-icons/fa';

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

const StoryCreatorPage = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem('ghibliDarkMode')) || false;
  });
  const [keywords, setKeywords] = useState('');
  const [genre, setGenre] = useState('fantasy');
  const [story, setStory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const parallaxRefs = {
    clouds: useRef([]),
    foreground: useRef(null)
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('ghibliDarkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      
      parallaxRefs.clouds.current.forEach((cloud, index) => {
        if (cloud) {
          const speed = 0.1 + (index * 0.05);
          cloud.style.transform = `translateY(${position * speed}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const generateStory = async () => {
    setIsLoading(true);
    setError('');
    try {
      const prompt = `Create a Studio Ghibli-style short movie in ${genre} genre using: ${keywords}.
        Include magical elements, nature themes, and emotional character development.
        Create a detailed Studio Ghibli-style movie outline following this exact structure:

## Movie Title 
"_[Whimsical Title Inspired by Nature and Magic]_"

## Main Characters
**_[Protagonist Name]_**: [Age] [Species/Type] - [Key personality trait] who [core conflict]
**_[Companion Name]_**: [Magical creature/Nature spirit] - [Unique ability] representing [theme]
**_[Antagonist Force]_**: [Nature imbalance/Social issue] manifesting as [magical phenomenon]

## Key Visual Theme
🌸 [Primary motif: Example: "Dancing fireflies in abandoned shrines"]
🌸 [Secondary motif: Example: "Ancient trees with glowing roots"]

## Story Structure

### Act 1: Discovery
**Scene 1:** [Location introduction with nature elements]
- [Protagonist's ordinary world]
- [First magical encounter]

**Scene 2:** [Call to adventure]
- [Mysterious natural phenomenon appears]
- [Companion character introduction]

### Act 2: Journey
**Scene 3:** [First magical location]
- [Environmental challenge]
- [Character growth moment]

**Scene 4:** [Midpoint revelation]
- [Ancient legend revealed through nature]
- [Magical transformation sequence]

### Act 3: Resolution
**Scene 5:** [Climactic nature-based conflict]
- [Protagonist's personal growth payoff]
- [Environmental balance restored]

## Ghibli Elements Checklist
✓ Whimsical transportation (flying machine/animal)
✓ Magical food sequence
✓ Silent nature spirit scene
✓ Weather-based emotional metaphor

Make the story 3000+ words with rich sensory details about natural environments. 
Separate sections with 🌸🌸🌸 and bold headers. Include 2-3 symbolic nature metaphors per act.`;
  
      // Updated API endpoint with valid model name
      const { data } = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          safetySettings: [{
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_NONE"
          }]
        },
        {
          headers: { 
            'Content-Type': 'application/json' 
          }
        }
      );
  
      const rawStory = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!rawStory) throw new Error('Empty response from API');
  
      const formattedStory = rawStory
      .replace(/## Movie Title _(.*?)_/g, '🌿✨ $1 ✨🌿<br/><br/>🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸<br/>')
      .replace(/## Main Characters/g, '🌈 MAIN CHARACTERS<br/>🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸<br/>')
      .replace(/## Key Visual Theme/g, '🎨 KEY VISUAL THEMES<br/>🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸<br/>')
      .replace(/## Story Structure/g, '📜 STORY STRUCTURE<br/>🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸<br/>')
      .replace(/### (Act \d+: .*?)/g, '<br/>=== $1 ===<br/>')
      .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
      .replace(/^\*(.*)$/gm, '💮 $1')
      .replace(/- (.*)$/gm, '🌸 $1')
      .replace(/\n/g, '<br/>')
      .replace(/Scene \d+:/g, '<br/>🎞️ $&')
      .replace(/Metaphor:/g, '🔮 <i>Metaphor:</i>')
      .replace(/Symbolism:/g, '🎴 <i>Symbolism:</i>')
      .replace(/Ghibli Elements Checklist/g, '🎋 GHIBLI ELEMENTS CHECKLIST<br/>🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸');
  
      setStory(formattedStory);
    } catch (err) {
      console.error('API Error Details:', err.response?.data || err.message);
      setError(`Story creation failed: ${err.response?.data?.error?.message || 'Try different keywords'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-ghibli-dark text-white' : 'bg-ghibli-light text-ghibli-dark'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className={`absolute inset-0 transition-colors duration-700 ${darkMode ? 'bg-gradient-to-b from-indigo-900 via-purple-900 to-ghibli-dark' : 'bg-gradient-to-b from-blue-200 via-blue-100 to-ghibli-light'}`}></div>
        
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
          <h1 className="font-ghibli text-2xl font-bold text-ghibli-teal">Ghibli Story Studio</h1>
        </div>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full transition-colors duration-500 ${darkMode ? 'bg-yellow-300 text-ghibli-dark' : 'bg-indigo-900 text-yellow-200'}`}
        >
          {darkMode ? <CatsIcon className="w-6 h-6" /> : <TotoroIcon className="w-6 h-6" />}
        </button>
      </nav>

      {/* Main Content */}
      <section className="relative min-h-screen flex items-center px-6 py-24 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className={`rounded-2xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h1 className={`font-ghibli text-5xl md:text-6xl mb-6 font-bold text-center ${darkMode ? 'text-ghibli-teal' : 'text-ghibli-blue'}`}>
                Craft Your Tale
              </h1>
              
              <div className="space-y-6">
                <div>
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Story Elements 🌟
                  </label>
                  <textarea
                    className={`w-full p-4 rounded-lg border ${
                      darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                    }`}
                    rows="3"
                    placeholder="Whispering forests, flying machines, curious spirits..."
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                  />
                </div>

                <div>
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Story Type 🎭
                  </label>
                  <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className={`w-full p-4 rounded-lg border ${
                      darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                    }`}
                  >
                    <option value="fantasy">Magical Fantasy</option>
                    <option value="adventure">Epic Adventure</option>
                    <option value="mystery">Whimsical Mystery</option>
                  </select>
                </div>

                <button
                  onClick={generateStory}
                  disabled={isLoading}
                  className={`w-full py-3 rounded-lg font-ghibli transition-all flex items-center justify-center gap-2 ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed'
                      : darkMode 
                      ? 'bg-ghibli-teal hover:bg-ghibli-dark-teal text-white'
                      : 'bg-ghibli-blue hover:bg-ghibli-dark-blue text-white'
                  }`}
                >
                  {isLoading ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    <FaMagic />
                  )}
                  {isLoading ? 'Weaving Magic...' : 'Create Story'}
                </button>

                {error && (
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900/50' : 'bg-red-100'} text-red-500`}>
                    ⚠️ {error}
                  </div>
                )}

                {story && (
                  <div className={`mt-8 p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <h3 className={`text-xl font-ghibli mb-4 ${darkMode ? 'text-ghibli-pink' : 'text-ghibli-purple'}`}>
                      Your Ghibli Tale 🌸
                    </h3>
                    <div 
                      className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                      dangerouslySetInnerHTML={{ __html: story }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoryCreatorPage;