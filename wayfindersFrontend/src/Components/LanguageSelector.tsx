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

const startingPoints = ["English", "French", "Spanish", "Arabic", "Hul'q'umi'num"];

type LanguageSelectorProps = {
  language: string | undefined;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

interface FilteredProps {
  value: string;
}

const LanguageSelector = (props: LanguageSelectorProps) => {
  const [filteredValues, setFilteredValues] = useState<Array<FilteredProps>>(
    []
  );

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
    return tempArray;
  };

  const onSelect = (data: string) => {
    console.log("onSelect", data);
    props.setLanguage(data);
  };
  return (
    <StartContainer>
      <Title level={3}>Choose Language</Title>
      <AutoComplete
        options={filteredValues}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={(text: string) => setFilteredValues(getPanelValue(text))}
        placeholder="Select Language"
      />
    </StartContainer>
  );
};

export default LanguageSelector;
 // "react": "^18.2.0",