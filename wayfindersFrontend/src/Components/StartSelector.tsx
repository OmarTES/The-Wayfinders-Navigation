import { AutoComplete } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import styled from "styled-components";

const StartContainer = styled.div`
  display: flex;
	flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const startingPoints = [
  "Bus Stop",
  "Bay street",
  "Fort street",
  "DT Main entrance",
  "Emergency",
  "Royal block - royal west",
  "Patient Care Center",
];

interface FilteredProps {
  value: string;
}

const StartSelector = () => {
  const [filteredValues, setFilteredValues] = useState<Array<FilteredProps>>(
    []
  );

  const getPanelValue = (searchText: string) => {
    const tempArray: Array<FilteredProps> = [];
    const regEx = new RegExp(searchText);
    for (let i = 0; i < startingPoints.length; i++) {
      if (startingPoints[i].toLowerCase().match(regEx)) {
        const tempObject: FilteredProps = {
          value: startingPoints[i],
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
    <StartContainer>
			<Title level={3}>Starting Point</Title>
      <AutoComplete
        options={filteredValues}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={(text: string) => setFilteredValues(getPanelValue(text))}
        placeholder="Select Starting Point"
      />
    </StartContainer>
  );
};

export default StartSelector;
