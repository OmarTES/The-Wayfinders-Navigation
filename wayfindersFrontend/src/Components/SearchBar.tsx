import { AutoComplete } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  margin-right: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

interface FilteredProps {
  value: string;
}

const SearchBar = () => {
  const listPlaces: string[] = [
    "Medical resonance imaging",
    "Emergency",
    "CT scan",
    "Royal Block",
    "Surgical Suture",
    "Emergency Department",
    "X-ray",
    "Atrial Fibrillation Clinic",
    "Ultrasound",
    "Echocardiography",
    "Nuclear Medicine",
    "Laboratory",
    "Endoscopy",
    "Hemodialysis",
    "MRI"
  ];
  const [filteredValues, setFilteredValues] = useState<Array<FilteredProps>>(
    []
  );

  const getPanelValue = (searchText: string) => {
    const tempArray: Array<FilteredProps> = [];
    const regEx = new RegExp(searchText.toLowerCase());
    for (let i = 0; i < listPlaces.length; i++) {
      if (listPlaces[i].toLowerCase().match(regEx)) {
        const tempObject: FilteredProps = {
          value: listPlaces[i],
        };
        tempArray.push(tempObject);
      }
    }
    return !searchText ? [] : tempArray;
  };

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  return (
    <>
      <SearchContainer>
        <AutoComplete
          options={filteredValues}
          style={{ width: "100%" }}
          onSelect={onSelect}
          onSearch={(text) => setFilteredValues(getPanelValue(text))}
          placeholder={"Enter name of place"}
        />
      </SearchContainer>
    </>
  );
};

export default SearchBar;
