import React from "react";
import { connect } from "react-redux";
import { setTableRowData } from "redux/actions/Shared";
import "./styles.scss";
const CustomTable = ({
  columns = [],
  dataSet = [],
  setTableRowData,
  isMessageTable = false,
}) => {
  return (
    <table className="table-general">
      <thead className="table-header">
        <tr>
          {columns.map((x) => (
            <th key={x.id}>{x.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSet.map((x) => {
          return (
            <tr
              key={x.id}
              className={`${
                isMessageTable ? (x.isRead ? "bg-green-100" : "bg-red-100") : ""
              }`}
            >
              {columns.map((col, ind) => {
                if (col["action"] != undefined) {
                  return (
                    <td
                      key={ind}
                      onClick={() => setTableRowData(x)}
                      className={
                        col["className"] != undefined ? col["className"] : null
                      }
                    >
                      {" "}
                      <col.action />{" "}
                    </td>
                  );
                }
                if (col["fieldName"] === "isRead") {
                  const isReaded = x[col["fieldName"]];
                  return (
                    <td
                      className="text-center"
                      key={ind}
                      onClick={() => setTableRowData(x)}
                    >
                      <i
                        className={`fa-xl ${
                          isReaded
                            ? "fa fa-check text-green-500"
                            : "fa fa-times text-red-500"
                        }`}
                      />
                    </td>
                  );
                }

                return (
                  <td className="text-center" key={ind}>
                    {" "}
                    {x[col["fieldName"]]}{" "}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setTableRowData,
};
export default connect(null, mapDispatchToProps)(CustomTable);
