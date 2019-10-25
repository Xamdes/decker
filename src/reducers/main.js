import produce from 'immer';
const initialDeckingDevice = require('../data/initialDeckingDevice.json');
const defaultMatrixActions = require('../data/matrixActions.json');
const initialSkills = require('../data/initialSkills.json');

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
  console.log('taking action');
  console.log(action.type);
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
      const index = state.skills.findIndex((skill) => {
        return skill.name === action.text;
      });
      return produce(state, (draft) => {
        draft.skills[index].ranks = action.value;
      });
    }
    case 'SETDECKINGDEVICESTAT': {
      return produce(state, (draft) => {
        draft.deckingDevice.attributes[action.text] = action.value;
      });
    }
    case 'LOAD': {
      const newState = action.value;
      return produce(state, (draft) => {
        draft.deckingDevice = newState.deckingDevice;
        draft.matrixActions = newState.matrixActions;
        draft.characterName = newState.characterName;
        draft.playerName = newState.playerName;
        draft.metaType = newState.metaType;
        draft.attributes = newState.attributes;
        draft.skills = newState.skills;
        draft.programDescription = newState.programDescription;
      });
    }
    case 'SETCHARACTERNAME': {
      console.log('work');
      return produce(state, (draft) => {
        draft.characterName = action.value;
      });
    }
    default:
      return state;
  }
}
