import React from "react";
import "./styles.scss";
const CustomTable = ({ columns = [], dataSet = [] }) => {
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
        {dataSet.map((x) => (
          <tr key={x.id}>
            {columns.map((col, ind) => {
              if (col["action"] != undefined) {
                return (
                  <td
                    key={ind}
                    className={
                      col["className"] != undefined ? col["className"] : null
                    }
                  >
                    {" "}
                    <col.action />{" "}
                  </td>
                );
              }
              return <td key={ind}> {x[col["fieldName"]]} </td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
