import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Large coffe cup",
      description:
        "Get some interesting products with making some extra effort",
      price: 2000.0,
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
      title: "Large coffe cup",
      description:
        "Get some interesting products with making some extra effort",
      price: 459.0,
      image:
        "https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {};
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.ADJUST_QTY:
      return {};
    case actionTypes.LOAD_CURRENT_ITEM:
      return {};
    default:
      return state;
  }
};

export default shopReducer;
