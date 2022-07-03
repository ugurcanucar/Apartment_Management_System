import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setTableRowData } from "redux/actions/Shared";
import blockService from "services/BlockService";
import CustomButton from "widget/custom-button";
import CustomInput from "widget/custom-input";
const BlockForm = (props) => {
  const { getBlocks, setIsAddMode, setModalVisible, tableRowData } = props;

  const [blockModel, setBlockModel] = useState({});

  const handleSubmit = async () => {
    if (tableRowData === undefined) {
      const resp = await blockService.addBlock(blockModel);
      if (resp.statusCode === 200) {
        alert("Saved Successfully");
        getBlocks();
        setIsAddMode(false);
      }
    } else {
      const resp = await blockService.updateBlock(blockModel);
      if (resp.statusCode === 200) {
        alert("Updated Successfully");
        getBlocks();
        setModalVisible(false);
      }
    }
  };

  useEffect(() => {
    if (tableRowData !== undefined) {
      setBlockModel(tableRowData);
    }
  }, [tableRowData]);
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 ">
        <CustomInput
          icon="fa fa-house-flag"
          placeholder="Please enter an block name"
          label="Block Name"
          defaultValue={tableRowData && tableRowData["name"]}
          propertyName="name"
          value={blockModel}
          onChange={setBlockModel}
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

export default connect(mapStateToProps, mapDispatchToProps)(BlockForm);
