import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import billService from "services/BillService";
import ContentHeader from "widget/content-header";
import CustomButton from "widget/custom-button";
import CustomDatePicker from "widget/custom-date-picker";
import CustomModal from "widget/custom-modal";
import CustomTable from "widget/custom-table";
import { setTableRowData } from "redux/actions/Shared";
import CustomTableButton from "widget/custom-table-button";
import PayForm from "./components/pay-form";
const BillManagement = ({
  setTableRowData,
  tableRowData,
  userInformations,
}) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [billList, setBillList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getBillData();
  }, [date]);

  const getBillData = React.useCallback(async () => {
    const resp = await billService.getUserBillsMonthly(
      date,
      userInformations.id
    );
    let mappedResp = resp.data.filter((x) => (x.date = x.date.slice(0, 7)));
    setBillList(mappedResp);
  }, [date]);

  const columns = [
    {
      id: 2,
      fieldName: "value",
      title: "Value",
    },
    {
      id: 3,
      fieldName: "paidValue",
      title: "Paid Value",
    },
    {
      id: 4,
      fieldName: "date",
      title: "Date",
    },
    {
      id: 5,
      action: () => {
        return (
          <div className="flex gap-4  w-max  ">
            <CustomTableButton
              label="Pay Bill"
              onClick={() => {
                setModalVisible(true);
              }}
            />
          </div>
        );
      },
      className: "w-1",
      title: "Action",
    },
  ];
  const closeModal = async () => {
    setModalVisible(false);
    setTableRowData({});
    await new Promise((res) => setTimeout(res, 100));
  };

  return (
    <div>
      <ContentHeader icon="fa fa-money-bill" contentTitle={"Bill Management"} />

      <div>
        <div className=" float-right mb-2">
          <CustomDatePicker
            onChange={setDate}
            label="Date"
            icon="fa fa-calendar"
          />
        </div>
        <CustomTable columns={columns} dataSet={billList} />
      </div>

      <CustomModal visible={modalVisible} closeModal={closeModal}>
        <PayForm getBillData={getBillData} setModalVisible={setModalVisible} />
      </CustomModal>
    </div>
  );
};
const mapStateToProps = ({ shared }) => {
  const { tableRowData, userInformations } = shared;
  return {
    tableRowData,
    userInformations,
  };
};

const mapDispatchToProps = {
  setTableRowData,
};
export default connect(mapStateToProps, mapDispatchToProps)(BillManagement);
