import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'

const ToolbarDiv = styled.div`
    width: 100%;
    background-color:  #006AA8;
    height: 50px;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
    color: #fff;
    display: flex;
    justify-content: space-between;
`

const StartingPointDiv = styled.div`
    margin-left: 15px;
`

const LanguageDiv = styled.div`
    margin-right: 15px;
    display: flex;
    align-items: center;
`


type ToolbarProps = {
    startingPoint: string;
    language: string;
    changeLanguage: () => void
}

const Toolbar = (props: ToolbarProps) => {
  return (
    <ToolbarDiv>
        <StartingPointDiv>
            <p>Location: {props.startingPoint}</p>
        </StartingPointDiv>
        <LanguageDiv>
            <p style={{marginRight: '5px'}}>Language: {props.language} -</p>
            <Button size='small' onClick={props.changeLanguage}>Change Language</Button>
        </LanguageDiv>
    </ToolbarDiv>
  )
}

export default Toolbar