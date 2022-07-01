import { SET_APARTMENT_REQUEST_MODEL } from "redux/constants/Apartment";

export const setApartmentModel = (apartmentModel) => {
  return {
    type: SET_APARTMENT_REQUEST_MODEL,
    apartmentModel,
  };
};
