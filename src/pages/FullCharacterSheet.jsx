import { useState } from 'react';
import PointBar from '../components/PointBar/PointBar';
import { createEmptyCharacter } from '../utils/characterTemplate';
import './FullCharacterSheet.css';

function FullCharacterSheet({ initialData = null, onSave, onCancel }) {
  const [character, setCharacter] = useState(initialData || createEmptyCharacter());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter(prev => ({ ...prev, [name]: value }));
  };

  const handleResourceChange = (resource, field, value) => {
    setCharacter(prev => ({
      ...prev,
      [resource]: { ...prev[resource], [field]: value }
    }));
  };

  const handleAttributeChange = (group, attr, value) => {
    setCharacter(prev => ({
      ...prev,
      attributes: {
        ...prev.attributes,
        [group]: { ...prev.attributes[group], [attr]: value }
      }
    }));
  };

  const handleSocialTraitChange = (trait, value) => {
    setCharacter(prev => ({
      ...prev,
      socialTraits: { ...prev.socialTraits, [trait]: value }
    }));
  };

  const handleNinshuChange = (skill, value) => {
    setCharacter(prev => ({
      ...prev,
      ninshu: { ...prev.ninshu, [skill]: value }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(character);
  };

  return (
    <form onSubmit={handleSubmit} className="character-sheet">
      <h2>Ficha de Personagem - Naruto RPG</h2>

      {/* Informações Básicas */}
      <fieldset>
        <legend>Informações Básicas</legend>
        <div className="form-row">
          <div className="form-group">
            <label>Nome</label>
            <input name="name" value={character.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Vila</label>
            <input name="village" value={character.village} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Físico</label>
            <input name="physical" value={character.physical} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Peso</label>
            <input name="weight" value={character.weight} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Linhagem</label>
            <input name="lineage" value={character.lineage} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Rank</label>
            <input name="rank" value={character.rank} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Social</label>
            <input name="social" value={character.social} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Idade</label>
            <input name="age" value={character.age} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Jogador</label>
            <input name="player" value={character.player} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Natureza</label>
            <input name="nature" value={character.nature} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Moralidade</label>
            <input name="morality" value={character.morality} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Altura</label>
            <input name="height" value={character.height} onChange={handleChange} />
          </div>
        </div>
      </fieldset>

      {/* Atributos Estrutural, Mental, Sobrenatural */}
      <fieldset>
        <legend>Atributos</legend>
        <div className="attributes-section">
          <div>
            <h3>Estrutural</h3>
            <PointBar label="Físico" value={character.attributes.structural.physical} onChange={(v) => handleAttributeChange('structural', 'physical', v)} />
            <PointBar label="Reflexo" value={character.attributes.structural.reflex} onChange={(v) => handleAttributeChange('structural', 'reflex', v)} />
            <PointBar label="Consistência" value={character.attributes.structural.consistency} onChange={(v) => handleAttributeChange('structural', 'consistency', v)} />
          </div>
          <div>
            <h3>Mental</h3>
            <PointBar label="Lógica" value={character.attributes.mental.logic} onChange={(v) => handleAttributeChange('mental', 'logic', v)} />
            <PointBar label="Instinto" value={character.attributes.mental.instinct} onChange={(v) => handleAttributeChange('mental', 'instinct', v)} />
            <PointBar label="Vontade" value={character.attributes.mental.will} onChange={(v) => handleAttributeChange('mental', 'will', v)} />
          </div>
          <div>
            <h3>Sobrenatural</h3>
            <PointBar label="Sinergia" value={character.attributes.supernatural.synergy} onChange={(v) => handleAttributeChange('supernatural', 'synergy', v)} />
            <PointBar label="Destino" value={character.attributes.supernatural.destiny} onChange={(v) => handleAttributeChange('supernatural', 'destiny', v)} />
            <PointBar label="Essência" value={character.attributes.supernatural.essence} onChange={(v) => handleAttributeChange('supernatural', 'essence', v)} />
          </div>
        </div>
      </fieldset>

      {/* Outros Atributos */}
      <fieldset>
        <legend>Outros Atributos</legend>
        <div className="form-row">
          <PointBar label="Bases" value={character.bases} onChange={(v) => setCharacter({...character, bases: v})} />
          <PointBar label="Força" value={character.strength} onChange={(v) => setCharacter({...character, strength: v})} />
          <PointBar label="Emoção" value={character.emotion} onChange={(v) => setCharacter({...character, emotion: v})} />
          <PointBar label="Mágica" value={character.magic} onChange={(v) => setCharacter({...character, magic: v})} />
        </div>
      </fieldset>

      {/* Recursos */}
      <fieldset>
        <legend>Recursos</legend>
        <div className="form-row">
          <div className="form-group">
            <label>Saúde Atual</label>
            <input type="number" value={character.health.current} onChange={(e) => handleResourceChange('health', 'current', parseInt(e.target.value) || 0)} />
          </div>
          <div className="form-group">
            <label>Saúde Máx</label>
            <input type="number" value={character.health.max} onChange={(e) => handleResourceChange('health', 'max', parseInt(e.target.value) || 0)} />
          </div>
          <div className="form-group">
            <label>Estamina Atual</label>
            <input type="number" value={character.stamina.current} onChange={(e) => handleResourceChange('stamina', 'current', parseInt(e.target.value) || 0)} />
          </div>
          <div className="form-group">
            <label>Estamina Máx</label>
            <input type="number" value={character.stamina.max} onChange={(e) => handleResourceChange('stamina', 'max', parseInt(e.target.value) || 0)} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Chakra Atual</label>
            <input type="number" value={character.chakra.current} onChange={(e) => handleResourceChange('chakra', 'current', parseInt(e.target.value) || 0)} />
          </div>
          <div className="form-group">
            <label>Chakra Máx</label>
            <input type="number" value={character.chakra.max} onChange={(e) => handleResourceChange('chakra', 'max', parseInt(e.target.value) || 0)} />
          </div>
          <div className="form-group">
            <label>Experiência</label>
            <input type="number" value={character.experience} onChange={(e) => setCharacter({...character, experience: parseInt(e.target.value) || 0})} />
          </div>
          <div className="form-group">
            <label>Dinheiro</label>
            <input type="number" value={character.money} onChange={(e) => setCharacter({...character, money: parseInt(e.target.value) || 0})} />
          </div>
        </div>
      </fieldset>

      {/* Social Traits */}
      <fieldset>
        <legend>Social</legend>
        <div className="traits-row">
          <PointBar label="Extroversão" value={character.socialTraits.extroversion} onChange={(v) => handleSocialTraitChange('extroversion', v)} />
          <PointBar label="Intuição" value={character.socialTraits.intuition} onChange={(v) => handleSocialTraitChange('intuition', v)} />
          <PointBar label="Analista" value={character.socialTraits.analyst} onChange={(v) => handleSocialTraitChange('analyst', v)} />
          <PointBar label="Planejador" value={character.socialTraits.planner} onChange={(v) => handleSocialTraitChange('planner', v)} />
          <PointBar label="Assertivo" value={character.socialTraits.assertive} onChange={(v) => handleSocialTraitChange('assertive', v)} />
        </div>
      </fieldset>

      {/* Ninshu */}
      <fieldset>
        <legend>Ninshu</legend>
        <div className="ninshu-grid">
          <PointBar label="Ninjutsu" value={character.ninshu.ninjutsu} onChange={(v) => handleNinshuChange('ninjutsu', v)} />
          <PointBar label="Fuuinjutsu" value={character.ninshu.fuuinjutsu} onChange={(v) => handleNinshuChange('fuuinjutsu', v)} />
          <PointBar label="Genjutsu" value={character.ninshu.genjutsu} onChange={(v) => handleNinshuChange('genjutsu', v)} />
          <PointBar label="Bukijutsu" value={character.ninshu.bukijutsu} onChange={(v) => handleNinshuChange('bukijutsu', v)} />
          <PointBar label="Taijutsu" value={character.ninshu.taijutsu} onChange={(v) => handleNinshuChange('taijutsu', v)} />
          <PointBar label="Senjutsu" value={character.ninshu.senjutsu} onChange={(v) => handleNinshuChange('senjutsu', v)} />
          <PointBar label="In" value={character.ninshu.inn} onChange={(v) => handleNinshuChange('inn', v)} />
          <PointBar label="Jujutsu" value={character.ninshu.jujutsu} onChange={(v) => handleNinshuChange('jujutsu', v)} />
          <PointBar label="Kekkei Genkai" value={character.ninshu.kekkeiGenkai} onChange={(v) => handleNinshuChange('kekkeiGenkai', v)} />
          <PointBar label="Gijutsu" value={character.ninshu.gijutsu} onChange={(v) => handleNinshuChange('gijutsu', v)} />
        </div>
      </fieldset>

      {/* Listas de texto */}
      <fieldset>
        <legend>Qualidades / Defeitos</legend>
        <textarea name="qualitiesDefects" rows="3" value={character.qualitiesDefects} onChange={handleChange} />
      </fieldset>
      <fieldset>
        <legend>Itens</legend>
        <textarea name="items" rows="3" value={character.items} onChange={handleChange} />
      </fieldset>
      <fieldset>
        <legend>Jutsus</legend>
        <textarea name="jutsus" rows="4" value={character.jutsus} onChange={handleChange} />
      </fieldset>
      <fieldset>
        <legend>Especializações</legend>
        <textarea name="specializations" rows="3" value={character.specializations} onChange={handleChange} />
      </fieldset>
      <fieldset>
        <legend>Laços</legend>
        <textarea name="bonds" rows="3" value={character.bonds} onChange={handleChange} />
      </fieldset>
      <fieldset>
        <legend>Anotações</legend>
        <textarea name="notes" rows="4" value={character.notes} onChange={handleChange} />
      </fieldset>

      <div className="form-actions">
        <button type="button" onClick={onCancel}>Cancelar</button>
        <button type="submit" className="primary">Salvar Ficha</button>
      </div>
    </form>
  );
}

export default FullCharacterSheet;