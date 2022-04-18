import React, { useState } from "react";
import DropDown from "./DropDown";
import data from "./data";
import "./styles.css";

export default function App() {
  const [currentPage, setCurrentpage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleDropDownChange = (e) => {
    setRowsPerPage(e.target.value);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="App">
      <DropDown handleDropDownChange={handleDropDownChange} />
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>country</th>
          </tr>
        </thead>
        <tbody>
          {data.length >= 1 ? (
            currentData.map(({ id, name, height, country }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{height}</td>
                <td>{country}</td>
              </tr>
            ))
          ) : (
            <tr>No records found</tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
