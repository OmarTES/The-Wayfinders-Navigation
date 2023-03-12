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
`;

const StartLanguagePage = (props: StartLanguageProps) => {
  return (
    <StartContainer>
      <CustomImage src={require("../Assets/Underwood.png")} />
      {props.children}
      <LandAcknowledgementDiv>
				<img style={{ width: '200px', height: '120px', marginBottom: '0.5em'}} src={require('../Assets/vihalogo.png')}/>
        <Text>
          Acknowledged with gratitude the land on which I live work and play is
          on the unceded territories of the Lekwungen-speaking people now known
          as the Esqumalt and Songhees Nations{" "}
        </Text>
      </LandAcknowledgementDiv>
    </StartContainer>
  );
};

export default StartLanguagePage;
