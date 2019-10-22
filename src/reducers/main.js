const defaultCyberdeckData = require('../test_data/cyberdecks.json');
const defaultMatrixActions = require('../data/matrixActions.json');

const initialState = {
  count: 10,
  programDescription: '',
  cyberdeckDataMaster: defaultCyberdeckData,
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
  skills: {},
};

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    case 'RESET':
      return {
        count: 0,
      };
    case 'SETPROGRAMDESCRIPTION':
      return {
        programDescription: action.text,
      };
    case 'SETATTRIBUTE': {
      const newState = { ...state };
      newState.attributes[action.text] = action.value;
      return {
        newState,
      };
    }
    case 'SETSKILL': {
      const newState = { ...state };
      newState.skills[action.text] = action.value;
      return {
        newState,
      };
    }
    default:
      return state;
  }
}

export function findStat(name, value) {}
