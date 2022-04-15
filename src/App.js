import React, { useState } from "react";
import data from "./data";
import "./styles.css";

export default function App() {
  const [mountains, setMountains] = useState(data);
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>country</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, height, country }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{height}</td>
              <td>{country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
