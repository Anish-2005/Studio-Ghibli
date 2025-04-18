import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Character from './pages/CharactersPage';
import MoviesPage from './pages/MoviesPage';
import StoryCreatorPage from './pages/StoryCreatorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/character" element={<Character />} />
        <Route path="/movie" element={<MoviesPage />} />
        <Route path="/create" element={<StoryCreatorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
