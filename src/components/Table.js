/** @format */

import React, { useEffect, useState } from "react";
import "../styles/Table.css";
import Transliterator from "libindic-transliteration";
import { PassThrouthLoading } from "react-loadingg";
function Table() {
  const [tableData, setTableData] = useState({});
  const TableURI =
    "https://run.mocky.io/v3/da7fa2e9-dc24-4b98-9449-76f571cb4d19";
  useEffect(() => {
    fetch(TableURI)
      .then((res) => res.json())
      .then((data) => setTableData(data));
  }, []);

  var t = new Transliterator();

  function filterTable() {
    // Declare variables
    var input, filter, table, tr, td, td1, i, txtValue, txtValue1;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByClassName("tableRow");
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByClassName("tableRowData")[2];
      td1 = tr[i].getElementsByClassName("tableRowData")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        txtValue1 = td1.textContent || td1.innerText;
        if (
          txtValue.toUpperCase().indexOf(filter) > -1 ||
          txtValue1.indexOf(filter) > -1
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  if (Object.keys(tableData).length > 0) {
    return (
      <div className="tablePage">
        <center>
          {" "}
          <input
            type="text"
            id="myInput"
            onChange={filterTable}
            placeholder="... Search a word"
          />
        </center>
        <center>
          {" "}
          <div
            className="makeTable"
            style={{
              "overflow-x": "auto",
              height: "87vh",

              width: "90vw",
              "overflow-y": "auto",
            }}>
            <table id="myTable">
              <tr className="headingTable">
                <th>S No.</th>
                <th>Word</th>
                <th>Trans-Literation</th>
                <th className="tableRowDataMessage">Meaning</th>
              </tr>
              {Object.entries(tableData).map((data) => {
                return (
                  <tr className="tableRow">
                    <td className="tableRowData">
                      {Object.keys(tableData).indexOf(data[0]) + 1}
                    </td>
                    <td className="tableRowData">{data[0]}</td>
                    <td className="tableRowData">
                      {t.transliterate_hi_en(data[0]).toLowerCase()}
                    </td>
                    <td className="tableRowDataMessage">{data[1]}</td>
                  </tr>
                );
              })}
            </table>
          </div>{" "}
        </center>
      </div>
    );
  } else {
    return <PassThrouthLoading />;
  }
}

export default Table;
