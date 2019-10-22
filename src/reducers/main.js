const initialState = {
  count: 999,
  programDescription: 'test',
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
    default:
      return state;
  }
}
