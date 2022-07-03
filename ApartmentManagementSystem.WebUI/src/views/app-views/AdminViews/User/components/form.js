import { useEffect, useState } from "react";
import { connect } from "react-redux";
import userService from "services/UserService";
import CustomButton from "widget/custom-button";
import CustomCheckbox from "widget/custom-checkbox";
import CustomInput from "widget/custom-input";
import CustomSelect from "widget/custom-select";
import { setTableRowData } from "redux/actions/Shared";
const UserForm = (props) => {
  const {
    // editObj,
    getUserData,
    setIsAddMode,
    setModalVisible,
    setTableRowData,
    tableRowData,
  } = props;

  const [userModel, setUserModel] = useState({});

  useEffect(() => {
    if (tableRowData != undefined) {
      setUserModel(tableRowData);
    }
  }, [tableRowData]);

  const randomPassoword = () => {
    var pass = "";
    var str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

    for (let i = 1; i <= 8; i++) {
      var char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    return pass;
  };

  const handleSubmit = async () => {
    if (tableRowData != undefined) {
      const resp = await userService.updateUser(userModel);

      if (resp.statusCode === 200) {
        alert("Updated Successfully");
        getUserData();
        setModalVisible(false);
      }
    } else {
      const obj = {
        ...userModel,
        accountTypeId: 2,

        password: randomPassoword(),
      };

      const resp = await userService.addUser(obj);

      if (resp.statusCode === 200) {
        alert("Saved Successfully");
        getUserData();
        setIsAddMode(false);
      }
    }
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 ">
        <CustomInput
          icon="fa fa-user"
          placeholder="Please enter user's name"
          label="Name"
          defaultValue={tableRowData && tableRowData["name"]}
          propertyName="name"
          value={userModel}
          onChange={setUserModel}
        />
        <CustomInput
          icon="fa fa-user"
          placeholder="Please enter user's surname"
          label="Surname"
          defaultValue={tableRowData && tableRowData["surname"]}
          propertyName="surname"
          value={userModel}
          onChange={setUserModel}
        />
        <CustomInput
          icon="fa fa-id-card"
          placeholder="Please enter user's surname"
          label="Id Number"
          defaultValue={tableRowData && tableRowData["idNumber"]}
          propertyName="idNumber"
          value={userModel}
          onChange={setUserModel}
        />
        <CustomInput
          icon="fa fa-envelope"
          placeholder="Please enter user's email"
          label="Email"
          defaultValue={tableRowData && tableRowData["email"]}
          propertyName="email"
          value={userModel}
          onChange={setUserModel}
        />
        <CustomInput
          icon="fa fa-mobile-phone"
          placeholder="Please enter user's phone number"
          label="Phone"
          defaultValue={tableRowData && tableRowData["phone"]}
          propertyName="phone"
          value={userModel}
          onChange={setUserModel}
        />
        <CustomInput
          icon="fa fa-car"
          placeholder="Please enter user's vehicle plate"
          label="Vehicle Plate"
          defaultValue={tableRowData && tableRowData["vehiclePlate"]}
          propertyName="vehiclePlate"
          value={userModel}
          onChange={setUserModel}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
