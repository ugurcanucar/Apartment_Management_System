import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setTableRowData } from "redux/actions/Shared";
import messageService from "services/MessageService";
import userService from "services/UserService";
import CustomButton from "widget/custom-button";
import CustomInput from "widget/custom-input";
import CustomSelect from "widget/custom-select";
const MessageForm = (props) => {
  const { getMessages, setIsAddMode, setModalVisible, tableRowData } = props;

  const [messageModel, setMessageModel] = useState({});
  const handleSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("userInformation"));

    const obj = {
      ...messageModel,
      userId: user.id,
      receiverId: 1,
      isRead: false,
    };
    const resp = await messageService.sendMessage(obj);
    if (resp.statusCode === 200) {
      alert("Saved Successfully");
      getMessages();
      setIsAddMode(false);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 ">
        <CustomInput
          icon="fa fa-envelope"
          placeholder="Please enter a message"
          label="Message"
          defaultValue={tableRowData && tableRowData["messageContent"]}
          propertyName="messageContent"
          value={messageModel}
          onChange={setMessageModel}
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

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
