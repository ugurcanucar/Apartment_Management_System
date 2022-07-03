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
import BillsForm from "./components/form";
import PayForm from "./components/pay-form";
const BillManagement = ({ setTableRowData, tableRowData }) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [billList, setBillList] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isPayMode, setIsPayMode] = useState(false);

  useEffect(() => {
    getBillData();
  }, [date]);

  const getBillData = React.useCallback(async () => {
    const resp = await billService.getBillsMonthly(date);
    let mappedResp = resp.data.filter((x) => (x.date = x.date.slice(0, 7)));
    setBillList(mappedResp);
  }, [date]);

  const columns = [
    {
      id: 1,
      fieldName: "userId",
      title: "User",
    },
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
            <CustomTableButton onClick={() => setModalVisible(true)} />
            <CustomTableButton
              onClick={() => {
                setIsDeleteMode(true);
                setModalVisible(true);
              }}
              isEditButton={false}
            />
            <CustomTableButton
              label="Pay Bill"
              onClick={() => {
                setIsPayMode(true);
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
    isDeleteMode && setIsDeleteMode(false);
    isPayMode && setIsPayMode(false);
  };

  const deleteBill = async () => {
    const resp = await billService.removeBill(tableRowData.id);
    if (resp.statusCode === 200) {
      alert("Delete Success");
      getBillData();
      closeModal();
    }
  };
  return (
    <div>
      <ContentHeader
        icon="fa fa-money-bill"
        contentTitle={"Bill Management"}
        actionButton={
          <CustomButton
            onClick={() => setIsAddMode(!isAddMode)}
            label={isAddMode ? "Show List" : "+ New Bill"}
            className="w-max px-5 "
          />
        }
      />

      {isAddMode ? (
        <BillsForm getBillData={getBillData} setIsAddMode={setIsAddMode} />
      ) : (
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
      )}
      <CustomModal visible={modalVisible} closeModal={closeModal}>
        {isDeleteMode ? (
          <div className="text-center   ">
            <b>{tableRowData.id}</b> number user's <b>{tableRowData.value}</b>$
            bill will be deleted. Are you sure ?
            <CustomButton
              label="Delete"
              onClick={deleteBill}
              className="bg-red-500"
            />
          </div>
        ) : isPayMode ? (
          <PayForm
            getBillData={getBillData}
            setModalVisible={setModalVisible}
          />
        ) : (
          <div>
            <BillsForm
              getBillData={getBillData}
              setIsAddMode={setIsAddMode}
              setModalVisible={setModalVisible}
            />
          </div>
        )}
      </CustomModal>
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
export default connect(mapStateToProps, mapDispatchToProps)(BillManagement);
