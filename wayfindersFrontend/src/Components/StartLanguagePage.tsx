import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import Title from "antd/es/typography/Title";

const { Text } = Typography;

type StartLanguageProps = {
  children: JSX.Element | JSX.Element[];
};

const StartContainer = styled.div`
  padding-top: 3em;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh-3em);
  align-items: center;
`;

const CustomImage = styled.img`
  width: 300px;
  height: 300px;
`;

const LandAcknowledgementDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 66%;
  position: absolute;
  bottom: 0;
  text-align: center;
  margin-bottom: 2em;
	@media(max-width: 800px) {
		position: relative;
		margin-top: 50px;
	}
`;

const StartLanguagePage = (props: StartLanguageProps) => {
  return (
    <StartContainer>
      <CustomImage src={require("../Assets/Underwood.png")} />
      {props.children}
      <LandAcknowledgementDiv>
        <img
          style={{ width: "200px", height: "120px", marginBottom: "0.5em" }}
          src={require("../Assets/vihalogo.png")}
        />
        <Text>
          We respectfully acknowledge the lək̓wəŋən (Lekwungen) speaking peoples
          of the Songhees and Esquimalt Nations, and other Coast Salish Nations
          on whose traditional lands we are thankful to work, live, and enjoy.
          We recognize the importance of the spiritual, emotional, physical, and
          mental connection First Nations people have to the land.
        </Text>
      </LandAcknowledgementDiv>
    </StartContainer>
  );
};

export default StartLanguagePage;
