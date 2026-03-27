import './CharacterList.css';

function CharacterList({ characters, onNewCharacter, onDeleteCharacter, onEditCharacter }) {
  return (
    <div className="character-list">
      <div className="list-header">
        <h2>Meus Personagens</h2>
        <button className="primary" onClick={onNewCharacter}>
          + Novo Personagem
        </button>
      </div>

      {characters.length === 0 ? (
        <div className="empty-state">
          <p>Você ainda não tem personagens criados.</p>
          <button className="primary" onClick={onNewCharacter}>
            Criar Primeiro Personagem
          </button>
        </div>
      ) : (
        <div className="characters-grid">
          {characters.map(character => (
            <div key={character.id} className="character-card">
              <h3>{character.name}</h3>
              <p>Vila: {character.village || '—'}</p>
              <p>Rank: {character.rank || '—'}</p>
              <p>Chakra: {character.chakra.current}/{character.chakra.max}</p>
              <div className="card-actions">
                <button onClick={() => onEditCharacter(character)}>✏️ Editar</button>
                <button onClick={() => onDeleteCharacter(character.id)}>🗑️ Excluir</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CharacterList;