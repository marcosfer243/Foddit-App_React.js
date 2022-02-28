export const mimenuReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_MIMENU":
      return {
        ...state,
        menuCart: [...state.menuCart, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_TO_MIMENU":
      return {
        ...state,
        menuCart: state.menuCart.filter((m) => m.id !== action.payload.id),
      };

    case "CHANGE_MIMENU_QTY":
      return {
        ...state,
        menuCart: state.menuCart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };

    default:
      return state;
  }
};
