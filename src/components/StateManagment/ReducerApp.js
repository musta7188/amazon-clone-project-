const initialState = {
  basket: [],
  user: null
};


const ReducerApp = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

      case "REMOVE_FROM_BASKET":
        ///find the first index equal to the one passed with the id
        const index = state.basket.findIndex((item) => item.id === action.payload)

        ///create new basket
        let newBasket = [...state.basket]

        if(index >=0){
          ///delete the item at the index in the new basket
            newBasket.splice(index, 1)
        } else{
          console.warn(`item with id ${action.payload} not in the basket`)
        }

        ///set  the basket equal to the new basket 
        return{
          ...state,
          basket: newBasket
        };

        case  "USER_STATUS":
          return{
            ...state,
            user: action.payload
          }
      
          case "REMOVE_FROM_BASKET":
            return{
              ...state,
              basket: []
            }

        


      default:
        return state;
};
}


///takes a number and return a number of start equal to the integer example: 5 = *****
export const ratingStartProduct = (rating) =>{
  let ratingStar = "";
  for (let i = 0; i < rating; i++) {
    ratingStar += "⭐️";
  }
  return ratingStar
}

export default ReducerApp;
