import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setTableRowData } from "redux/actions/Shared";
import apartmentTypeService from "services/ApartmentTypeService";
import billService from "services/BillService";
import CustomButton from "widget/custom-button";
import CustomInput from "widget/custom-input";
const BillTypeForm = (props) => {
  const { getBillTypes, setIsAddMode, setModalVisible, tableRowData } = props;

  const [billTypeModel, setBillTypeModel] = useState({});

  const handleSubmit = async () => {
    if (tableRowData === undefined) {
      const resp = await billService.addBillType(billTypeModel);
      if (resp.statusCode === 200) {
        alert("Saved Successfully");
        getBillTypes();
        setIsAddMode(false);
      }
    } else {
      const resp = await billService.updateBillTypes(billTypeModel);
      if (resp.statusCode === 200) {
        alert("Updated Successfully");
        getBillTypes();
        setModalVisible(false);
      }
    }
  };

  useEffect(() => {
    if (tableRowData !== undefined) {
      setBillTypeModel(tableRowData);
    }
  }, [tableRowData]);
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 ">
        <CustomInput
          icon="fa fa-money-bill"
          placeholder="Please enter an bill type name"
          label="Bill Type Name"
          defaultValue={tableRowData && tableRowData["name"]}
          propertyName="name"
          value={billTypeModel}
          onChange={setBillTypeModel}
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

export default connect(mapStateToProps, mapDispatchToProps)(BillTypeForm);
