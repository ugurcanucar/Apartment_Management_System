import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import userService from "services/UserService";
import ContentHeader from "widget/content-header";
import CustomButton from "widget/custom-button";
import CustomModal from "widget/custom-modal";
import CustomTable from "widget/custom-table";
import CustomTableButton from "widget/custom-table-button";
import UserForm from "./components/form";
import { setTableRowData } from "redux/actions/Shared";

const UserManagement = ({ tableRowData, setTableRowData }) => {
  const [isAddMode, setIsAddMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [userList, setUserList] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = React.useCallback(async () => {
    const resp = await userService.getUsers();
    setUserList(resp.data);
  }, []);

  const columns = [
    {
      id: 1,
      fieldName: "name",
      title: "Name",
    },
    {
      id: 2,
      fieldName: "surname",
      title: "Surname",
    },
    {
      id: 3,
      fieldName: "email",
      title: "Email",
    },
    {
      id: 4,
      fieldName: "phone",
      title: "Phone",
    },
    {
      id: 6,
      fieldName: "vehiclePlate",
      title: "Plate",
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
          </div>
        );
      },
      className: "w-1",
      title: "Action",
    },
  ];

  const deleteUser = async () => {
    if (tableRowData.accountTypeId === 1) {
      alert("You cant delete Admin.");
      return closeModal();
    }
    const resp = await userService.removeUser(tableRowData.id);
    if (resp.statusCode === 200) {
      alert("Delete Success");
      getUserData();
      closeModal();
    }
  };

  const closeModal = async () => {
    setModalVisible(false);
    setTableRowData({});
    await new Promise((res) => setTimeout(res, 100));
    isDeleteMode && setIsDeleteMode(false);
  };

  return (
    <div>
      <ContentHeader
        actionButton={
          <CustomButton
            onClick={() => setIsAddMode(!isAddMode)}
            label={isAddMode ? "Show List" : "+ User"}
            className="w-max px-5 "
          />
        }
        contentTitle="User Management"
        icon={"fa fa-user"}
      />

      {isAddMode ? (
        <UserForm getUserData={getUserData} setIsAddMode={setIsAddMode} />
      ) : (
        <div>
          <CustomTable columns={columns} dataSet={userList} />
        </div>
      )}

      <CustomModal visible={modalVisible} closeModal={closeModal}>
        {isDeleteMode ? (
          <div className="text-center   ">
            <b>{tableRowData.name}</b> will be deleted. Are you sure ?
            <CustomButton
              label="Delete"
              onClick={deleteUser}
              className="bg-red-500"
            />
          </div>
        ) : (
          <div>
            <UserForm
              getUserData={getUserData}
              setModalVisible={setModalVisible}
              editObj={tableRowData}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);
