import { AutoComplete } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin: auto;
  margin-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  text: string;
};

const SearchBar = (props: Props) => {
  const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
  });

  const listPlaces: string[] = ['Main Entrance', 'Emergency'];

  const correct = (str: string) => listPlaces.filter((option) =>
    option.toLowerCase().startsWith(str.toLowerCase())
  );

  const [value, setValue] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [anotherOptions, setAnotherOptions] = useState<{ value: string }[]>([]);

  const getPanelValue = (searchText: string) => {
    if (!searchText) {
      return [];
    }
  
    const matches = correct(searchText);
    return matches.map((match) => ({ value: match }));
  };

  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };

  return (
    <>
      <SearchContainer>
        <AutoComplete
          options={options.map((value) => ({ value }))}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={(text) => setOptions(getPanelValue(text))}
          placeholder={props.text}
        />
      </SearchContainer>
    </>
  );
};

export default SearchBar;