import { AutoComplete } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import styled from "styled-components";

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const startingPoints = [
  "Bus Stop",
  "Bay street",
  "Fort street",
  "Diagnostic and Treatment Centre",
  "Emergency",
  "Royal block",
  "Patient Care Center",
  "West Block",
  "Memorial Pavilion",
  "Richmond Pavilion",
  "D&T",
  "BC Cancer Agency",
];

type StartSelectorProps = {
  startingPoint: string | undefined;
  setStartingPoint: React.Dispatch<React.SetStateAction<string | undefined>>;
};

interface FilteredProps {
  value: string;
}

const StartSelector = (props: StartSelectorProps) => {
  const [filteredValues, setFilteredValues] = useState<Array<FilteredProps>>(
    []
  );
  const [selectedStartingPoint, setSelectedStartingPoint] =
    useState<string>("");

  const getPanelValue = (searchText: string) => {
    const tempArray: Array<FilteredProps> = [];
    const regEx = new RegExp(searchText.toLowerCase());
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
    props.setStartingPoint(data);
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
      {selectedStartingPoint && (
        <img
          src={require(`../Assets/rjh_map.png`)}
          alt="Starting point map"
          style={{ maxWidth: "100%", marginTop: 20 }}
        />
      )}
    </StartContainer>
  );
};

export default StartSelector;
