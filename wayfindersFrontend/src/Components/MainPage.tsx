import { Button, Typography } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Toolbar from "./Toolbar";
import mapHere from '../Assets/map_here.png';
import mapPath from '../Assets/map_path.png';

const { Text } = Typography;

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
  margin-bottom: 1em;
	width: 66%;
`;

const ImageContainer = styled.img`
  width: 600px;
  height: 600px;
  margin-bottom: 1em;
`;

const EmergencyButtonDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  position: absolute;
  bottom: 0;
	text-align: center;
	margin-bottom: 4em;
`;

type MainPageProps = {
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  language: string;
};

const MainPage = (props: MainPageProps) => {
	const [image, setImage] = useState<string>(mapHere)
  const changeLanguage = () => {
    props.setLanguage("");
  };

	const changePicture = () => {
		setImage(mapPath)
	}

	const emergencyDirections = () => {
		setImage(mapPath)
	}

  return (
    <MainContainer>
			<Toolbar startingPoint={props.location} language={props.language} changeLanguage={changeLanguage}/>
      <Title level={3}>Destination Point</Title>
      <SearchContainer>
        <SearchBar />
        <Button onClick={changePicture}>Search</Button>
      </SearchContainer>
      <ImageContainer src={image} />
			<EmergencyButtonDiv>
				<Button onClick={eemergencyDirections} danger shape="round" type="primary" size="large">Directions to Emergency Department</Button>
			</EmergencyButtonDiv>
    </MainContainer>
  );
};

export default MainPage;
