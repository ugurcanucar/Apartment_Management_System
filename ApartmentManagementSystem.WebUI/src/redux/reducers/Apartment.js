import { SET_APARTMENT_REQUEST_MODEL } from "redux/constants/Apartment";

const initState = {
  apartmentModel: {
    isEmpty: false,
  },
};

const Apartment = (state = initState, action) => {
  switch (action.type) {
    case SET_APARTMENT_REQUEST_MODEL:
      return {
        ...state,
        apartmentModel: action.apartmentModel,
      };

    default:
      return state;
  }
};

export default Apartment;
