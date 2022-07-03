import React, { useEffect, useState } from "react";
import apartmentService from "services/ApartmentService";
import CustomButton from "widget/custom-button";
import CustomEditButton from "widget/custom-table-button";
import CustomTable from "widget/custom-table";
import ApartmentForm from "./components/form";
import CustomTableButton from "widget/custom-table-button";
import Modal from "widget/custom-modal";
import { connect } from "react-redux";
import ContentHeader from "widget/content-header";
const ApartmentManagement = ({ tableRowData }) => {
  const [isAddMode, setIsAddMode] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [apartmentList, setApartmentList] = useState([]);
  useEffect(() => {
    getApartmentData();
  }, []);

  const getApartmentData = React.useCallback(async () => {
    const resp = await apartmentService.getApartments();
    setApartmentList(resp.data);
  }, []);

  const columns = [
    {
      id: 1,
      fieldName: "name",
      title: "Name",
    },
    {
      id: 2,
      fieldName: "userId",
      title: "User ID",
    },
    {
      id: 3,
      fieldName: "apartmentTypeId",
      title: "Apartment Type",
    },
    {
      id: 4,
      fieldName: "floor",
      title: "Floor",
    },
    {
      id: 5,
      action: () => {
        return (
          <div className="flex gap-4  w-max  ">
            <CustomTableButton onClick={() => setModalVisible(true)} />
            <CustomTableButton
              isEditButton={false}
              onClick={() => {
                setIsDeleteMode(true);
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
    await new Promise((res) => setTimeout(res, 100));
    isDeleteMode && setIsDeleteMode(false);
  };

  const deleteApartment = async () => {
    const resp = await apartmentService.removeApartment(tableRowData.id);
    if (resp.statusCode === 200) {
      alert("Delete Success");
      getApartmentData();
      closeModal();
    }
  };

  return (
    <div className="  w-full h-full">
      <ContentHeader
        actionButton={
          apartmentList.length > 0 ? (
            <CustomButton
              onClick={() => setIsAddMode(!isAddMode)}
              label={isAddMode ? "Show List" : "+ Apartment"}
              className="w-max px-5 "
            />
          ) : null
        }
        contentTitle="Apartment Management"
        icon={"fa fa-building"}
      />

      {isAddMode ? (
        <ApartmentForm
          getApartmentData={getApartmentData}
          setIsAddMode={setIsAddMode}
        />
      ) : (
        <>
          {apartmentList.length > 0 ? (
            <div>
              <CustomTable columns={columns} dataSet={apartmentList} />
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <p className="text-center">Please add atleast one apartment.</p>
              <CustomButton
                onClick={() => setIsAddMode(!isAddMode)}
                label={isAddMode ? "Show List" : "Add first apartment"}
                className="w-max px-5 "
              />
            </div>
          )}
        </>
      )}

      <Modal visible={modalVisible} closeModal={() => setModalVisible(false)}>
        {isDeleteMode ? (
          <div className="text-center   ">
            <b>{tableRowData.name}</b> will be deleted. Are you sure ?
            <CustomButton
              label="Delete"
              onClick={deleteApartment}
              className="bg-red-500"
            />
          </div>
        ) : (
          <div>
            <ApartmentForm
              getApartmentData={getApartmentData}
              setModalVisible={setModalVisible}
              setIsAddMode={setIsAddMode}
            />
          </div>
        )}
      </Modal>
    </div>
  );
};
const mapStateToProps = ({ shared }) => {
  const { tableRowData } = shared;
  return {
    tableRowData,
  };
};

export default connect(mapStateToProps)(ApartmentManagement);
