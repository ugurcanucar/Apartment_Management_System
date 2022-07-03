import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import apartmentTypeService from "services/ApartmentTypeService";
import messageService from "services/MessageService";
import ContentHeader from "widget/content-header";
import CustomButton from "widget/custom-button";
import CustomModal from "widget/custom-modal";
import CustomTable from "widget/custom-table";
import CustomTableButton from "widget/custom-table-button";
import ApartmentTypeForm from "./components/form";

const ApartmentTypeManagement = ({ tableRowData }) => {
  const [apartmentTypeList, setApartmentTypeList] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);

  useEffect(() => {
    getApartmentTypes();
  }, []);

  const getApartmentTypes = React.useCallback(async () => {
    const resp = await apartmentTypeService.getApartmentTypes();
    setApartmentTypeList(resp.data);
  }, []);

  const closeModal = async () => {
    setModalVisible(false);
    await new Promise((res) => setTimeout(res, 100));
    isDeleteMode && setIsDeleteMode(false);
  };

  const deleteApartmentType = async () => {
    const resp = await apartmentTypeService.deleteApartmentType(
      tableRowData.id
    );
    if (resp.statusCode === 200) {
      alert("Delete Success");
      getApartmentTypes();
      closeModal();
    }
  };

  const columns = [
    {
      id: 1,
      fieldName: "name",
      title: "Type Name",
    },

    {
      id: 5,
      action: () => {
        return (
          <div className="flex gap-4  w-max  ">
            <CustomTableButton
              onClick={() => {
                setModalVisible(true);
              }}
            />
            <CustomTableButton
              onClick={() => {
                setIsDeleteMode(true);
                setModalVisible(true);
              }}
              isEditButton={false}
            />
          </div>
        );
      },
      className: "w-1",
      title: "Action",
    },
  ];
  return (
    <div>
      <ContentHeader
        actionButton={
          <CustomButton
            onClick={() => setIsAddMode(!isAddMode)}
            label={isAddMode ? "Show List" : "+ Apartment Type"}
            className="w-max px-5 "
          />
        }
        icon={"fa fa-building-circle-arrow-right"}
        contentTitle="Apartment Type Management"
      />
      {isAddMode ? (
        <ApartmentTypeForm
          getApartmentTypes={getApartmentTypes}
          setIsAddMode={setIsAddMode}
        />
      ) : (
        <div>
          <CustomTable columns={columns} dataSet={apartmentTypeList} />
        </div>
      )}

      <CustomModal visible={modalVisible} closeModal={closeModal}>
        {isDeleteMode ? (
          <div className="text-center   ">
            <b>{tableRowData.name}</b> will be deleted. Are you sure ?
            <CustomButton
              label="Delete"
              onClick={deleteApartmentType}
              className="bg-red-500"
            />
          </div>
        ) : (
          <div>
            <ApartmentTypeForm
              getApartmentTypes={getApartmentTypes}
              setModalVisible={setModalVisible}
              setIsAddMode={setIsAddMode}
            />
          </div>
        )}
      </CustomModal>
    </div>
  );
};
const mapStateToProps = ({ shared }) => {
  const { tableRowData } = shared;
  return { tableRowData };
};

export default connect(mapStateToProps)(ApartmentTypeManagement);
