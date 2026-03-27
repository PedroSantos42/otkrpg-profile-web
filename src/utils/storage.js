const STORAGE_KEY = 'otaku_rpg_characters';

export const saveCharacters = (characters) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
    return true;
  } catch (error) {
    console.error('Erro ao salvar personagens:', error);
    return false;
  }
};

export const loadCharacters = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Erro ao carregar personagens:', error);
    return [];
  }
};