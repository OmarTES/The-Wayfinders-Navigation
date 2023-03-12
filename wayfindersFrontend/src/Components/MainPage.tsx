import { Button, Typography } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const { Text } = Typography;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SettingsContainer = styled.div`
  display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-end;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.img`
  width: 600px;
  height: 600px;
`;

type MainPageProps = {
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  language: string;
};

const MainPage = (props: MainPageProps) => {
  const resetApp = () => {
    props.setLanguage("");
  };
  return (
    <MainContainer>
      <SettingsContainer>
        <Text type="success">Starting Point: {props.location}</Text>
        <Text type="success">Language: {props.language}</Text>
      </SettingsContainer>
      <Title level={3}>Destination Point</Title>
      <SearchContainer>
        <SearchBar />
        <Button>Search</Button>
      </SearchContainer>
      <ImageContainer src={require("../Assets/rjh_map.png")} />
      <Button onClick={resetApp}>Reset App to Language selection</Button>
    </MainContainer>
  );
};

export default MainPage;
