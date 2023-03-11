import React from 'react'
import styled from 'styled-components';

type StartLanguageProps = {
    children: JSX.Element | JSX.Element[];
}

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const StartLanguagePage = (props: StartLanguageProps) => {
  return (
    <StartContainer>
        {props.children}
    </StartContainer>
  )
}

export default StartLanguagePage