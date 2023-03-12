import { AutoComplete } from 'antd';
import React, { useState } from 'react'
import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 1em;
  margin: auto;
  margin-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`

type B = {
  text: string;
}

  const SearchBar = (props: B) => {
    
    const mockVal = (str: string, repeat = 1) => ({
      value: str.repeat(repeat),
    });

    const [value, setValue] = useState('');
    const [options, setOptions] = useState<{ value: string }[]>([]);
    const [anotherOptions, setAnotherOptions] = useState<{ value: string }[]>([]);

    const getPanelValue = (searchText: string) =>
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

    const onSelect = (data: string) => {
      console.log('onSelect', data);
    };

    const onChange = (data: string) => {
      setValue(data);
    };
    return (
      <>
        <SearchContainer>
          <AutoComplete
            options={options}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={(text) => setOptions(getPanelValue(text))}
            placeholder= {props.text}
          />
        </SearchContainer>
      </>
    )
  }


export default SearchBar