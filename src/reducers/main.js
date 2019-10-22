const initialDeckingDevice = require('../data/initialDeckingDevice.json');
const defaultMatrixActions = require('../data/matrixActions.json');
const initialSkills = require('../data/initialSkills.json');

const initialState = {
  count: 10,
  programDescription: '',
  deckingDevice: initialDeckingDevice,
  matrixActions: defaultMatrixActions,
  characterName: '',
  playerName: '',
  metaType: '',
  attributes: {
    body: 1,
    agility: 1,
    reaction: 1,
    strength: 1,
    willpower: 1,
    logic: 1,
    intuition: 1,
    charisma: 1,
    edge: 1,
    essence: 1,
    initiative: 1,
  },
  skills: initialSkills,
};

export function mainReducer(state = initialState, action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'INCREMENT': {
      const newState = { ...state };
      newState.count++;
      return newState;
    }

    case 'DECREMENT': {
      const newState = { ...state };
      newState.count--;
      return newState;
    }

    case 'RESET': {
      const newState = { ...state };
      newState.count = 0;
      return newState;
    }
    case 'SETPROGRAMDESCRIPTION': {
      const newState = { ...state };
      newState.programDescription = action.text;
      return newState;
    }
    case 'SETATTRIBUTE': {
      const newState = { ...state, attributes: { ...state.attributes } };
      newState.attributes[action.text] = action.value;
      return newState;
    }
    case 'SETSKILL': {
      const newState = { ...state, skills: { ...state.skills } };
      newState.skills[action.text] = action.value;
      return newState;
    }
    case 'SETDECKINGDEVICESTAT': {
      const newState = {
        ...state,
        deckingDevice: {
          ...state.deckingDevice,
          attributes: { ...state.deckingDevice.attributes },
        },
      };
      newState.deckingDevice.attributes[action.text] = action.value;
      return newState;
    }
    default:
      return state;
  }
}
