import React, { useState } from "react";
import DropDown from "./DropDown";
import data from "./data";
import "./styles.css";

export default function App() {
  const [dataPerPage, setDataPerPage] = useState(5);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);

  const handleDropDownChange = (e) => {
    setDataPerPage(e.target.value);
  };

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
            data
              .slice(startIndex, startIndex + dataPerPage)
              .map(({ id, name, height, country }) => (
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
