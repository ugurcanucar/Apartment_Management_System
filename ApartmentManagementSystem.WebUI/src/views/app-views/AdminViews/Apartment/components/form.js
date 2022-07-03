import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import { setApartmentModel } from "redux/actions/Apartment";
import apartmentService from "services/ApartmentService";
import blockService from "services/BlockService";
import userService from "services/UserService";
import CustomButton from "widget/custom-button";
import CustomCheckbox from "widget/custom-checkbox";
import CustomInput from "widget/custom-input";
import CustomSelect from "widget/custom-select";
import { setTableRowData } from "redux/actions/Shared";
const ApartmentForm = (props) => {
  const { tableRowData, getApartmentData, setIsAddMode, setModalVisible } =
    props;

  const [users, setUsers] = useState([]);
  const [apartmentModel, setApartmentModel] = useState({ isEmpty: false });
  const [blocks, setBlocks] = useState([]);
  const [apartmentTypes, setApartmentTypes] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    let obj = { ...tableRowData };
    if (tableRowData != undefined) {
      if (tableRowData.userId === undefined) {
        obj.userId = null;
      }
      setApartmentModel(obj);
    }
  }, [tableRowData]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = React.useCallback(async () => {
    const resp = await userService.getUsers();
    if (resp.statusCode === 200) setUsers(resp.data);
    const blockResp = await blockService.getBlocks();
    if (blockResp.statusCode === 200) setBlocks(blockResp.data);
    const apartmentResp = await apartmentService.getApartmentTypes();
    if (apartmentResp.statusCode === 200) setApartmentTypes(apartmentResp.data);
  }, []);

  const handleSubmit = async () => {
    let obj = { ...apartmentModel };
    if (apartmentModel.isEmpty) {
      obj.userId = null;
    }
    if (tableRowData === undefined) {
      const resp = await apartmentService.addApartment(obj);
      if (resp.statusCode === 200) {
        alert("Added Successfully");
        getApartmentData();
        setIsAddMode(false);
      }
    } else {
      const resp = await apartmentService.updateApartment(obj);
      if (resp.statusCode === 200) {
        alert("Updated Successfully");
        getApartmentData();
        setModalVisible(false);
      }
    }
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 ">
        <CustomInput
          icon="fa fa-building"
          placeholder="Please enter apartment name"
          label="Apartment Name"
          defaultValue={tableRowData && tableRowData["name"]}
          propertyName="name"
          value={apartmentModel}
          onChange={setApartmentModel}
        />
        <CustomSelect
          icon="fa fa-user"
          disabled={apartmentModel.isEmpty}
          placeholder="Please choose an user"
          label="User"
          defaultValue={
            tableRowData &&
            tableRowData.userId != undefined &&
            tableRowData["userId"]
          }
          dataSet={users}
          propertyName="userId"
          value={apartmentModel}
          onChange={setApartmentModel}
        />
        <CustomInput
          icon="fa fa-building-user"
          placeholder="Please enter floor"
          label="Floor"
          propertyName="floor"
          defaultValue={tableRowData && tableRowData["floor"]}
          value={apartmentModel}
          onChange={setApartmentModel}
        />
        <CustomInput
          icon="fa fa-5"
          placeholder="Please enter apartment name"
          label="Home number"
          propertyName="homeNumber"
          defaultValue={tableRowData && tableRowData["homeNumber"]}
          value={apartmentModel}
          onChange={setApartmentModel}
        />
        <CustomSelect
          icon="fa fa-house"
          placeholder="Please choose an apartment type"
          label="Apartment Type"
          dataSet={apartmentTypes}
          defaultValue={tableRowData && tableRowData["apartmentTypeId"]}
          propertyName="apartmentTypeId"
          value={apartmentModel}
          onChange={setApartmentModel}
        />
        <CustomSelect
          icon="fa fa-house-lock"
          placeholder="Please choose a block"
          label="Block"
          dataSet={blocks}
          propertyName="blockId"
          value={apartmentModel}
          defaultValue={tableRowData && tableRowData["blockId"]}
          onChange={setApartmentModel}
        />

        <div className="col-start-2">
          <CustomCheckbox
            label="Is Empty ?"
            value={apartmentModel}
            defaultValue={tableRowData && tableRowData["isEmpty"]}
            onChange={setApartmentModel}
            propertyName="isEmpty"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <CustomButton label="Save" className="w-1/2" onClick={handleSubmit} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ shared }) => {
  const { tableRowData } = shared;
  return {
    tableRowData,
  };
};
const mapDispatchToProps = {
  setTableRowData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentForm);
