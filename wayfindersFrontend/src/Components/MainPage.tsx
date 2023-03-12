import { Button } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
};

const MainPage = (props: MainPageProps) => {
  const resetApp = () => {
    props.setLanguage("");
  };
  return (
    <MainContainer>
			<Title level={3}>Destination Point</Title>
      <SearchContainer>
        <SearchBar />
				<Button>WayFind</Button>
      </SearchContainer>
			<Title level={5}>Starting Point: {props.location}</Title>
      <ImageContainer src={require("../Assets/rjh_map.png")} />
      <Button onClick={resetApp}>Reset App to Language selection</Button>
    </MainContainer>
  );
};

export default MainPage;
