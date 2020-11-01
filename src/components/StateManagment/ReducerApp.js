const initialState = {
  basket: [],
  itemsCount: 0
};


const ReducerApp = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
        itemsCount: state.basket.length + 1
      };

      default:
        return state;
};
}


export const ratingStartProduct = (rating) =>{
  let ratingStar = "";
  for (let i = 0; i < rating; i++) {
    ratingStar += "⭐️";
  }
  return ratingStar
}

export default ReducerApp;
