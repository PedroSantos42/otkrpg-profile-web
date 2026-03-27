export const createEmptyCharacter = () => ({
  id: null,
  name: '',
  village: '',
  physical: 0,
  weight: '',
  lineage: '',
  rank: '',
  social: '',
  age: '',
  player: '',
  nature: '',
  morality: '',
  height: '',
  
  // Atributos (0-8)
  attributes: {
    structural: { physical: 0, reflex: 0, consistency: 0 },
    mental: { logic: 0, instinct: 0, will: 0 },
    supernatural: { synergy: 0, destiny: 0, essence: 0 }
  },
  
  // Outros atributos
  bases: 0,
  strength: 0,
  emotion: 0,
  magic: 0,
  
  // Recursos
  health: { current: 0, max: 0 },
  stamina: { current: 0, max: 0 },
  chakra: { current: 0, max: 0 },
  experience: 0,
  money: 0,
  
  // Social traits (valores de 0 a 8)
  socialTraits: {
    extroversion: 0,
    intuition: 0,
    analyst: 0,
    planner: 0,
    assertive: 0
  },
  
  // Ninshu (0-8)
  ninshu: {
    ninjutsu: 0,
    fuuinjutsu: 0,
    genjutsu: 0,
    bukijutsu: 0,
    taijutsu: 0,
    senjutsu: 0,
    inn: 0,
    jujutsu: 0,
    kekkeiGenkai: 0,
    gijutsu: 0
  },
  
  // Listas
  qualitiesDefects: '',
  items: '',
  jutsus: '',
  specializations: '',
  bonds: '',
  notes: ''
});