import { Button, Typography } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Toolbar from "./Toolbar";
import mapHere from "../Assets/map_here.png";
import mapPath from "../Assets/map_path.png";
import mapPathEm from "../Assets/map_path_em.png";
import buttonPressed from "../Assets/button_pressed.png";
import buttonUnpressed from "../Assets/button_unpressed.png";
//@ts-ignore
import Speech from "react-speech";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

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

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  width: calc(100%-30px);
  margin: 0 15px;
`;

const DirectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

const ImageContainer = styled.img`
  width: 66%;
  /* height: 600px; */
  margin-bottom: 1em;
`;

const ButtonImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 1em;
`;

const EmergencyButtonDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: end;
  position: absolute;
  bottom: 0;
  text-align: center;
  margin-bottom: 1em;
`;

type MainPageProps = {
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  language: string;
};

type Directions = {
  text: string;
  icon: JSX.Element;
};

const MRIDirections: Array<Directions> = [
  {
    text: "Take your first right",
    icon: <ArrowCircleRightIcon />,
  },
  {
    text: "Go to the end of the hallway and take a left",
    icon: <ArrowCircleLeftIcon />,
  },
  {
    text: "Go to end of hallway and take a right at the intersection",
    icon: <ArrowCircleUpIcon />,
  },
  {
    text: "Take your fourth left",
    icon: <ArrowCircleLeftIcon />,
  },
  {
    text: "Take your second right",
    icon: <ArrowCircleRightIcon />,
  },
  {
    text: "Follow to end of hallway and take a right",
    icon: <ArrowCircleRightIcon />,
  },
  {
    text: "First door on your left is your destination",
    icon: <ArrowCircleLeftIcon />,
  },
];

const MainPage = (props: MainPageProps) => {
  const [image, setImage] = useState<string>(mapHere);
  const [buttonImage, setButtonImage] = useState<string>(buttonUnpressed);
  const [directions, setDirections] = useState<Directions[]>([]);
  const [count, setCount] = useState<number>(0);

  const changeLanguage = () => {
    props.setLanguage("");
  };

  const changePicture = () => {
    setImage(mapPath);
    setDirections(MRIDirections);
    setButtonImage(buttonUnpressed);
  };

  const emergencyDirections = () => {
    setImage(mapPathEm);
    setButtonImage(buttonPressed);
  };

  const changeCount = () => {
    const tempCount = count + 1;
    setCount(tempCount);
  };

  const style = {
    text: {
			hover: {
				backgroundColor: 'red'
			},
      button: {
        width: "28",
        height: "28",
        cursor: "pointer",
        pointerEvents: "none",
        outline: "none",
        backgroundColor: "red",
        border: "solid 1px rgba(255,255,255,1)",
        borderRadius: 6,
      },
    },
  };

  return (
    <MainContainer>
      <Toolbar
        startingPoint={props.location}
        language={props.language}
        changeLanguage={changeLanguage}
      />
      <Title level={3}>Destination Point</Title>
      <SearchContainer>
        <SearchBar />
        <Button onClick={changePicture}>Search</Button>
      </SearchContainer>
      <InfoContainer>
        <ImageContainer src={image} />
        {directions.length > 0 && (
          <DirectionContainer>
            <div onClick={changeCount}>
              <Speech
                style={style}
                voice="Google UK English Female"
                volume={1}
                lang="EN-GB"
                displayText="Play next direction"
                text={
                  directions.length > 0 &&
                  count < directions.length &&
                  directions[count].text
                }
                textAsButton={true}
              />
            </div>
            {directions.map((direction, i) => (
              <div key={i}>
                {direction.icon} {direction.text}
              </div>
            ))}
          </DirectionContainer>
        )}
      </InfoContainer>

      <EmergencyButtonDiv>
        <ButtonImage src={buttonImage} onClick={emergencyDirections} />
      </EmergencyButtonDiv>
    </MainContainer>
  );
};

export default MainPage;
