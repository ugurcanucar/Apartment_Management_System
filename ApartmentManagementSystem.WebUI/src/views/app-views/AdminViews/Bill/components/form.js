import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import userService from "services/UserService";
import CustomButton from "widget/custom-button";
import CustomCheckbox from "widget/custom-checkbox";
import CustomInput from "widget/custom-input";
import CustomSelect from "widget/custom-select";
import { setTableRowData } from "redux/actions/Shared";
import CustomDatePicker from "widget/custom-date-picker";
import billService from "services/BillService";
const BillsForm = (props) => {
  const {
    // editObj,
    getBillData,
    setIsAddMode,
    setModalVisible,
    setTableRowData,
    tableRowData,
  } = props;

  const [billModel, setBillModel] = useState({});
  const [date, setDate] = useState(new Date().toISOString().slice(0, 7));
  const [users, setUsers] = useState([]);
  const [billTypes, setBillTypes] = useState([]);

  useEffect(() => {
    if (tableRowData != undefined) {
      setBillModel(tableRowData);
    }
  }, [tableRowData]);

  const handleSubmit = async () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    let dateobj = date;

    if (tableRowData === undefined) {
      dateobj = `${date}-${dd}`;
    } else {
      if (billModel.date.length !== 7) {
        dateobj = `${date}-${dd}`;
      }
    }
    const obj = {
      ...billModel,
      date: dateobj,
      value: parseInt(billModel.value),
    };
    console.log(obj, billModel);
    if (tableRowData != undefined) {
      console.log(obj);
      const resp = await billService.updateBill(obj);
      if (resp.statusCode === 200) {
        alert("Updated Successfully");
        getBillData();
        setModalVisible(false);
      }
    } else {
      const resp = await billService.addBill(obj);

      if (resp.statusCode === 200) {
        alert("Saved Successfully");
        getBillData();
        setIsAddMode(false);
      }
    }
  };

  useEffect(() => {
    getDatas();
  }, []);
  const getDatas = React.useCallback(async () => {
    const resp = await userService.getUsers();
    if (resp.statusCode === 200) setUsers(resp.data);
    const billResp = await billService.getBillTypes();
    if (resp.statusCode === 200) setBillTypes(billResp.data);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 ">
        <CustomSelect
          icon="fa fa-user"
          placeholder="Please choose an user"
          label="User"
          defaultValue={tableRowData && tableRowData["userId"]}
          dataSet={users}
          propertyName="userId"
          value={billModel}
          onChange={setBillModel}
        />
        <CustomInput
          icon="fa fa-cc-visa"
          placeholder="Please enter card name"
          label="Card Name"
          defaultValue={tableRowData && tableRowData["card"]}
          propertyName="card"
          value={billModel}
          onChange={setBillModel}
        />

        <CustomSelect
          icon="fa fa-money-bills"
          placeholder="Please choose a bill types"
          label="Bill Types"
          defaultValue={tableRowData && tableRowData["billTypeId"]}
          dataSet={billTypes}
          propertyName="billTypeId"
          value={billModel}
          onChange={setBillModel}
        />
        <CustomInput
          icon="fa fa-money-bill"
          placeholder="Please enter value"
          label="Bill Value"
          defaultValue={tableRowData && tableRowData["value"]}
          propertyName="value"
          value={billModel}
          onChange={setBillModel}
        />
        <div className="col-start-2  ">
          <CustomDatePicker
            fullWidth
            onChange={setDate}
            label="Date"
            icon="fa fa-calendar"
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

export default connect(mapStateToProps, mapDispatchToProps)(BillsForm);
