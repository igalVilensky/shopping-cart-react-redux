import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Large coffe cup",
      description:
        "Get some interesting products with making some extra effort",
      price: 20.0,
      image:
        "https://media.istockphoto.com/photos/professional-dslr-camera-picture-id910373876?b=1&k=6&m=910373876&s=612x612&w=0&h=rzJGDVV3gs1fYH8sIp3SgPXcs3kY6hQ9hyB54oeeM-A=",
    },
    {
      id: 2,
      title: "Large coffe cup",
      description:
        "Get some interesting products with making some extra effort",
      price: 15.0,
      image:
        "https://media.istockphoto.com/photos/professional-dslr-camera-picture-id910373876?b=1&k=6&m=910373876&s=612x612&w=0&h=rzJGDVV3gs1fYH8sIp3SgPXcs3kY6hQ9hyB54oeeM-A=",
    },
    {
      id: 3,
      title: "Large coffe cup",
      description:
        "Get some interesting products with making some extra effort",
      price: 40.0,
      image:
        "https://media.istockphoto.com/photos/professional-dslr-camera-picture-id910373876?b=1&k=6&m=910373876&s=612x612&w=0&h=rzJGDVV3gs1fYH8sIp3SgPXcs3kY6hQ9hyB54oeeM-A=",
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
