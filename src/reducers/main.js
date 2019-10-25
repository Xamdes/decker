import produce from 'immer';
const initialDeckingDevice = require('../data/initialDeckingDevice.json');
const defaultMatrixActions = require('../data/matrixActions.json');
const initialSkills = require('../data/initialSkillsOld.json');

const initialState = {
  // count: 10,
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
  switch (action.type) {
    case 'INCREMENT': {
      return produce(state, (draft) => {
        draft.count++;
      });
    }
    case 'DECREMENT': {
      return produce(state, (draft) => {
        draft.count--;
      });
    }
    case 'SETPROGRAMDESCRIPTION': {
      return produce(state, (draft) => {
        draft.programDescription = action.text;
      });
    }
    case 'SETATTRIBUTE': {
      return produce(state, (draft) => {
        draft.attributes[action.text] = action.value;
      });
    }
    case 'SETSKILL': {
      return produce(state, (draft) => {
        draft.skills[action.text] = action.value;
      });
    }
    case 'SETDECKINGDEVICESTAT': {
      return produce(state, (draft) => {
        draft.deckingDevice.attributes[action.text] = action.value;
      });
    }
    default:
      return state;
  }
}
