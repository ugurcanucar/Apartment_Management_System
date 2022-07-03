import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import apartmentTypeService from "services/ApartmentTypeService";
import blockService from "services/BlockService";
import messageService from "services/MessageService";
import ContentHeader from "widget/content-header";
import CustomButton from "widget/custom-button";
import CustomModal from "widget/custom-modal";
import CustomTable from "widget/custom-table";
import CustomTableButton from "widget/custom-table-button";
import BlockForm from "./components/form";

const BlockManagement = ({ tableRowData }) => {
  const [BlockList, setBlockList] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);

  useEffect(() => {
    getBlocks();
  }, []);

  const getBlocks = React.useCallback(async () => {
    const resp = await blockService.getBlocks();
    setBlockList(resp.data);
  }, []);

  const closeModal = async () => {
    setModalVisible(false);
    await new Promise((res) => setTimeout(res, 100));
    isDeleteMode && setIsDeleteMode(false);
  };

  const deleteBlock = async () => {
    const resp = await blockService.deleteBlock(tableRowData.id);
    if (resp.statusCode === 200) {
      alert("Delete Success");
      getBlocks();
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
            label={isAddMode ? "Show List" : "+ Block"}
            className="w-max px-5 "
          />
        }
        icon={"fa fa-house-flag"}
        contentTitle="Block Management"
      />
      {isAddMode ? (
        <BlockForm getBlocks={getBlocks} setIsAddMode={setIsAddMode} />
      ) : (
        <div>
          <CustomTable columns={columns} dataSet={BlockList} />
        </div>
      )}

      <CustomModal visible={modalVisible} closeModal={closeModal}>
        {isDeleteMode ? (
          <div className="text-center   ">
            <b>{tableRowData.name}</b> will be deleted. Are you sure ?
            <CustomButton
              label="Delete"
              onClick={deleteBlock}
              className="bg-red-500"
            />
          </div>
        ) : (
          <div>
            <BlockForm
              getBlocks={getBlocks}
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

export default connect(mapStateToProps)(BlockManagement);
