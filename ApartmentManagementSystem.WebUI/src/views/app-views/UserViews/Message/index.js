import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import messageService from "services/MessageService";
import ContentHeader from "widget/content-header";
import CustomButton from "widget/custom-button";
import CustomModal from "widget/custom-modal";
import CustomTable from "widget/custom-table";
import CustomTableButton from "widget/custom-table-button";
import MessageForm from "./components/form";
const MessageManagement = ({ tableRowData, userInformations }) => {
  const [messageList, setMessageList] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isReadMode, setIsReadMode] = useState(false);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = React.useCallback(async () => {
    const resp = await messageService.getMessagesByUser(userInformations.id);
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
  const readMessage = async () => {
    console.log(tableRowData);
    const obj = { ...tableRowData, isRead: true };
    await messageService.updateMessage(obj);
    closeModal();
    getMessages();
  };

  const columns = [
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
            <CustomTableButton
              onClick={() => {
                setIsReadMode(true);
                setModalVisible(true);
              }}
              label="Read"
              icon={"fa-envelope"}
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
        {isDeleteMode ? (
          <div className="text-center   ">
            This message will be deleted. Are you sure ?
            <CustomButton
              label="Delete"
              onClick={deleteMessage}
              className="bg-red-500"
            />
          </div>
        ) : (
          <>
            <div className="text-center   ">
              {tableRowData && tableRowData.messageContent}
              <CustomButton label="Set As Readed" onClick={readMessage} />
            </div>
          </>
        )}
      </CustomModal>
    </div>
  );
};
const mapStateToProps = ({ shared }) => {
  const { tableRowData, userInformations } = shared;
  return { tableRowData, userInformations };
};

export default connect(mapStateToProps)(MessageManagement);
