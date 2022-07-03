import {
  SET_TABLE_ROW_DATA,
  SET_USER_INFORMATIONS,
} from "redux/constants/Shared";

const initialState = {
  userInformations: {},
};

const Shared = (state = initialState, action) => {
  switch (action.type) {
    case SET_TABLE_ROW_DATA:
      return { ...state, tableRowData: action.tableRowData };
    case SET_USER_INFORMATIONS:
      return { ...state, userInformations: action.userInformations };

    default:
      return state;
  }
};
export default Shared;
