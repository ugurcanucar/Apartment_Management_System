import React, { useEffect, useState } from "react";
import apartmentService from "services/ApartmentService";
import CustomButton from "widget/custom-button";
import CustomEditButton from "widget/custom-table-button";
import CustomTable from "widget/custom-table";
import ApartmentForm from "./components/form";
import CustomTableButton from "widget/custom-table-button";
const ApartmentManagement = () => {
  const [isAddMode, setIsAddMode] = useState(false);
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
            <CustomTableButton />
            <CustomTableButton isEditButton={false} />
          </div>
        );
      },
      className: "w-1",
      title: "Action",
    },
  ];

  return (
    <div className="  w-full h-full">
      <div className="h-1/6 w-full grid grid-cols-3 mt-5 items-center mb-20">
        <div className="col-start-2 flex flex-col items-center justify-center gap-5">
          <i className="fa fa-building text-6xl text-gray-600" />
          <span className="font-semibold text-xl text-gray-600">
            Apartment Management
          </span>
        </div>
        <div className="flex justify-end">
          <CustomButton
            onClick={() => setIsAddMode(!isAddMode)}
            label={isAddMode ? "Show List" : "+ Apartment"}
            className="w-max px-5 "
          />
        </div>
      </div>
      {isAddMode ? (
        <ApartmentForm
          getApartmentData={getApartmentData}
          setIsAddMode={setIsAddMode}
        />
      ) : (
        <div>
          <CustomTable columns={columns} dataSet={apartmentList} />
        </div>
      )}
    </div>
  );
};

export default ApartmentManagement;
