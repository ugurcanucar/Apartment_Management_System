import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setApartmentModel } from "redux/actions/Apartment";
import apartmentService from "services/ApartmentService";
import blockService from "services/BlockService";
import userService from "services/UserService";
import CustomButton from "widget/custom-button";
import CustomCheckbox from "widget/custom-checkbox";
import CustomInput from "widget/custom-input";
import CustomSelect from "widget/custom-select";

const ApartmentForm = (props) => {
  const { apartmentModel, setApartmentModel, getApartmentData, setIsAddMode } =
    props;

  const [users, setUsers] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [apartmentTypes, setApartmentTypes] = useState([]);

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
    const resp = await apartmentService.addApartment(apartmentModel);

    if (resp.statusCode === 200) {
      alert("Kayıt Başarılı");
      getApartmentData();
      setIsAddMode(false);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 ">
        <CustomInput
          icon="fa fa-building"
          placeholder="Please enter apartment name"
          label="Apartment Name"
          propertyName="name"
          value={apartmentModel}
          onChange={setApartmentModel}
        />
        <CustomSelect
          icon="fa fa-building"
          placeholder="Please choose an user"
          label="User"
          dataSet={users}
          propertyName="userId"
          value={apartmentModel}
          onChange={setApartmentModel}
        />
        <CustomInput
          icon="fa fa-building"
          placeholder="Please enter floor"
          label="Floor"
          propertyName="floor"
          value={apartmentModel}
          onChange={setApartmentModel}
        />
        <CustomInput
          icon="fa fa-building"
          placeholder="Please enter apartment name"
          label="Home number"
          propertyName="homeNumber"
          value={apartmentModel}
          onChange={setApartmentModel}
        />
        <CustomSelect
          icon="fa fa-building"
          placeholder="Please choose an apartment type"
          label="Apartment Type"
          dataSet={apartmentTypes}
          propertyName="apartmentTypeId"
          value={apartmentModel}
          onChange={setApartmentModel}
        />
        <CustomSelect
          icon="fa fa-building"
          placeholder="Please choose a block"
          label="Block"
          dataSet={blocks}
          propertyName="blockId"
          value={apartmentModel}
          onChange={setApartmentModel}
        />

        <div className="col-start-2">
          <CustomCheckbox
            label="Is Empty ?"
            value={apartmentModel}
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
const mapStateToProps = ({ apartment }) => {
  const { apartmentModel } = apartment;
  return { apartmentModel };
};

const mapDispatchToProps = {
  setApartmentModel,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentForm);
