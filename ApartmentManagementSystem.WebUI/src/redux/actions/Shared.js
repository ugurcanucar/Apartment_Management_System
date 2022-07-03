import {
  SET_TABLE_ROW_DATA,
  SET_USER_INFORMATIONS,
} from "redux/constants/Shared";

export const setTableRowData = (tableRowData) => ({
  type: SET_TABLE_ROW_DATA,
  tableRowData,
});

export const setUserInformations = (userInformations) => ({
  type: SET_USER_INFORMATIONS,
  userInformations,
});
