const initialState = {
  basket: [],
};

const ReducerApp = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

      default:
        return state;
};
}

export default ReducerApp;
