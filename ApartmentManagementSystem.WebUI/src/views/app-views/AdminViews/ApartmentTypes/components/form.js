import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setTableRowData } from "redux/actions/Shared";
import apartmentTypeService from "services/ApartmentTypeService";
import CustomButton from "widget/custom-button";
import CustomInput from "widget/custom-input";
const ApartmentTypeForm = (props) => {
  const { getApartmentTypes, setIsAddMode, setModalVisible, tableRowData } =
    props;

  const [apartmentTypeModel, setApartmentTypeModel] = useState({});

  const handleSubmit = async () => {
    if (tableRowData === undefined) {
      const resp = await apartmentTypeService.addApartmentType(
        apartmentTypeModel
      );
      if (resp.statusCode === 200) {
        alert("Saved Successfully");
        getApartmentTypes();
        setIsAddMode(false);
      }
    } else {
      const resp = await apartmentTypeService.updateApartmentType(
        apartmentTypeModel
      );
      if (resp.statusCode === 200) {
        alert("Updated Successfully");
        getApartmentTypes();
        setModalVisible(false);
      }
    }
  };

  useEffect(() => {
    if (tableRowData !== undefined) {
      setApartmentTypeModel(tableRowData);
    }
  }, [tableRowData]);
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 ">
        <CustomInput
          icon="fa fa-building-circle-arrow-right"
          placeholder="Please enter an apartment type name"
          label="Apartment Type Name"
          defaultValue={tableRowData && tableRowData["name"]}
          propertyName="name"
          value={apartmentTypeModel}
          onChange={setApartmentTypeModel}
        />
      </div>
      <div className="flex justify-center">
        <CustomButton label="Send" className="w-1/2" onClick={handleSubmit} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentTypeForm);
