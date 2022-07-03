import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import billService from "services/BillService";
import CustomButton from "widget/custom-button";
import CustomInput from "widget/custom-input";

const PayForm = ({ tableRowData, setModalVisible, getBillData }) => {
  const [billModel, setBillModel] = useState({});

  useEffect(() => {
    if (tableRowData !== undefined) {
      setBillModel(tableRowData);
    }
  }, [tableRowData]);
  const paySubmitHandler = async () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    let dateobj = billModel.date;
    if (billModel.date.length !== 7) {
      dateobj = `${billModel.date}-${dd}`;
    }

    let obj = {
      ...billModel,
      paidValue: parseInt(billModel.value),
      paidDate: new Date().toISOString().slice(0, 10),
      date: `${billModel.date}-${dd}`,
    };
    const resp = await billService.updateBill(obj);
    if (resp.statusCode === 200) {
      getBillData();
      setModalVisible();
    }
    console.log(obj, resp);
  };
  return (
    <div>
      <span>
        Your bill is: <b>{tableRowData && tableRowData.value}$</b>{" "}
      </span>
      <div className="mt-5">
        <CustomInput
          icon="fa fa-money-bill"
          placeholder="Please enter value"
          label="Bill Value"
          disabled
          defaultValue={tableRowData && tableRowData["value"]}
          propertyName="paidValue"
          value={billModel}
          onChange={setBillModel}
        />
        <CustomButton label={"Pay"} onClick={paySubmitHandler} />
      </div>
    </div>
  );
};
const mapStateToProps = ({ shared }) => {
  const { tableRowData } = shared;
  return { tableRowData };
};

const mapDispatchToProps = {};
export default connect(mapStateToProps)(PayForm);
