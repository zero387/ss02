const initialState = [];

export const litData = (state = initialState, action) => {
  switch (action.type) {
    case 'addTask':
      return [...state, action.payload];
    case 'updateTask':
      const newState = [...state];
      newState[action.payload.index] = action.payload.value;
      return newState;
    case 'deleteTask':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};
