export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
// Incrementing all of the prices inside of the basket, starting in 0
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      // Logic for Removing item from basket...
      // whatever the current is -> ...state.basket

      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // if item exists in the basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id} as its not provided`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
}

export default reducer;
