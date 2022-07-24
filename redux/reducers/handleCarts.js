import { ADD_ITEM, SET_ITEM_ID, DEL_ITEM } from "../action";
const carts = { cart: [], itemID: 1 };

const handleCart = (state = carts, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, cart: action.payload };
        case SET_ITEM_ID:
            return { ...state, itemID: action.payload };
        case DEL_ITEM:
            return state.filter((x) => {
                return x.id !== action.payload.id;
            });

        case "ADD":
            const exist = state.find((x) => x.id === action.payload.id);
            if (exist) {
                return state.map((x) =>
                    x.id === action.payload.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                return [
                    ...state,
                    {
                        ...action.payload,
                        qty: 1,
                    },
                ];
            }

        case "MINUS":
            const exist1 = state.find((x) => x.id === action.payload.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                    x.id === action.payload.id ? { ...x, qty: x - 1 } : x
                );
            }

        default:
            return state;
    }
};

export default handleCart;
