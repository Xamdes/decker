import produce from 'immer';
import { initialState } from '../data/initialState.js';

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
        draft.attributes[action.text].ranks = action.value;
      });
    }
    case 'SETSKILL': {
      return produce(state, (draft) => {
        draft.skills[action.text].ranks = action.value;
      });
    }
    case 'SETDECKINGDEVICESTAT': {
      return produce(state, (draft) => {
        draft.deckingDevice.attributes[action.text].ranks = action.value;
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
      return produce(state, (draft) => {
        draft.characterName = action.value;
      });
    }
    default:
      return state;
  }
}
