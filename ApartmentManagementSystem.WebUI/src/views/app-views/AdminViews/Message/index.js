import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import messageService from "services/MessageService";
import ContentHeader from "widget/content-header";
import CustomButton from "widget/custom-button";
import CustomModal from "widget/custom-modal";
import CustomTable from "widget/custom-table";
import CustomTableButton from "widget/custom-table-button";
import MessageForm from "./components/form";
const MessageManagement = ({ tableRowData }) => {
  const [messageList, setMessageList] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = React.useCallback(async () => {
    const resp = await messageService.getMessages();
    setMessageList(resp.data);
  }, []);

  const closeModal = async () => {
    setModalVisible(false);
    await new Promise((res) => setTimeout(res, 100));
    isDeleteMode && setIsDeleteMode(false);
  };

  const deleteMessage = async () => {
    const resp = await messageService.deleteMessage(tableRowData.id);
    if (resp.statusCode === 200) {
      alert("Delete Success");
      getMessages();
      closeModal();
    }
  };

  const columns = [
    {
      id: 1,
      fieldName: "userId",
      title: "Sender",
    },
    {
      id: 2,
      fieldName: "receiverId",
      title: "Receiver",
    },
    {
      id: 3,
      fieldName: "messageContent",
      title: "Message",
    },
    {
      id: 4,
      fieldName: "isRead",
      title: "Is Readed",
    },
    {
      id: 5,
      action: () => {
        return (
          <div className="flex gap-4  w-max  ">
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
            label={isAddMode ? "Show List" : "+ Message"}
            className="w-max px-5 "
          />
        }
        icon={"fa fa-envelope"}
        contentTitle="Message Management"
      />
      {isAddMode ? (
        <MessageForm getMessages={getMessages} setIsAddMode={setIsAddMode} />
      ) : (
        <div>
          <CustomTable isMessageTable columns={columns} dataSet={messageList} />
        </div>
      )}

      <CustomModal visible={modalVisible} closeModal={closeModal}>
        <div className="text-center   ">
          This message will be deleted. Are you sure ?
          <CustomButton
            label="Delete"
            onClick={deleteMessage}
            className="bg-red-500"
          />
        </div>
      </CustomModal>
    </div>
  );
};
const mapStateToProps = ({ shared }) => {
  const { tableRowData } = shared;
  return { tableRowData };
};

export default connect(mapStateToProps)(MessageManagement);
