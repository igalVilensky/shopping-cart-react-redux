import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "DSLR Camera Cannon 1300d",
      description: "Cannon 1300d new camera with 55-250lens",
      price: 359.99,
      image:
        "https://media.istockphoto.com/photos/professional-dslr-camera-picture-id910373876?b=1&k=6&m=910373876&s=612x612&w=0&h=rzJGDVV3gs1fYH8sIp3SgPXcs3kY6hQ9hyB54oeeM-A=",
    },
    {
      id: 2,
      title: "Cannon DSLR 8500D",
      description:
        "Get some interesting products with making some extra effort",
      price: 445.0,
      image:
        "https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043",
    },
    {
      id: 3,
      title: "Nikon D5600 DSLR Camera",
      description: "DSLR Camera,Battery,Kit Bag,Charger",
      price: 459.0,
      image:
        "https://5.imimg.com/data5/FB/TY/OR/SELLER-50793836/nikon-d5600-dslr-camera-on-rents-500x500.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
