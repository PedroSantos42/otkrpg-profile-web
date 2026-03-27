import { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import CharacterList from './pages/CharacterList';
import FullCharacterSheet from './pages/FullCharacterSheet';
import { loadCharacters, saveCharacters } from './utils/storage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const saved = loadCharacters();
    if (saved) setCharacters(saved);
  }, []);

  useEffect(() => {
    if (characters.length > 0) saveCharacters(characters);
  }, [characters]);

  const addCharacter = (newCharacter) => {
    const charWithId = {
      ...newCharacter,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setCharacters(prev => [...prev, charWithId]);
    setCurrentPage('characters');
  };

  const deleteCharacter = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este personagem?')) {
      setCharacters(prev => prev.filter(char => char.id !== id));
    }
  };

  const editCharacter = (character) => {
    // Implementar edição (você pode passar para FullCharacterSheet com initialData)
    console.log('Editar:', character);
  };

  return (
    <div className="app">
      <Header />
      <main>
        {currentPage === 'home' && (
          <Home onNewCharacter={() => setCurrentPage('new')} />
        )}
        {currentPage === 'characters' && (
          <CharacterList
            characters={characters}
            onNewCharacter={() => setCurrentPage('new')}
            onDeleteCharacter={deleteCharacter}
            onEditCharacter={editCharacter}
          />
        )}
        {currentPage === 'new' && (
          <FullCharacterSheet
            onSave={addCharacter}
            onCancel={() => setCurrentPage('characters')}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;