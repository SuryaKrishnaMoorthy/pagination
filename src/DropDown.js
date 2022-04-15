import React, { useState } from "react";

const DropDown = ({ handleDropDownChange }) => {
  return (
    <select id="data-per-page" onChange={handleDropDownChange}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
      <option value="25">25</option>
    </select>
  );
};

export default DropDown;
