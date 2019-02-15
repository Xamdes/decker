const initialDeckingDevice = require('./initialDeckingDevice.json');
const defaultMatrixActions = require('./matrixActions.json');
const initialSkills = require('./initialSkills.json');
export const initialState = {
  programDescription: '',
  deckingDevice: initialDeckingDevice,
  matrixActions: defaultMatrixActions,
  characterName: '',
  playerName: '',
  metaType: '',
  attributes: initializeAttributes(),
  skills: initialSkills,
};

function initializeAttribute(initialValue = 0) {
  return { ranks: initialValue, genRanks: initialValue };
}

function initializeAttributes() {
  const attributes = {};
  const initialAttribs = [
    'body',
    'agility',
    'reaction',
    'strength',
    'willpower',
    'logic',
    'intuition',
    'charisma',
    'edge',
    'essence',
    'initiative',
    'magic',
    'resonance',
  ];
  initialAttribs.forEach((attribute) => {
    switch (attribute) {
      case 'essence':
        attributes[attribute] = initializeAttribute(6);
        break;
      case 'magic':
        attributes[attribute] = initializeAttribute(0);
        break;
      case 'resonance':
        attributes[attribute] = initializeAttribute(0);
        break;
      default:
        attributes[attribute] = initializeAttribute(1);
    }
  });
  return attributes;
}
