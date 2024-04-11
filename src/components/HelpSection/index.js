import React from 'react'
import {  ImgOneContainer, ImgTwoContainer, MainComponent, RightContainer } from './HelpElements'
import { BodyText, LeftContainer,ButtonContainer, HeaderText } from './HelpElements'
import { Button } from '../Button/ButtonElements'

function HelpSection() {
  return (
    <MainComponent>
        <LeftContainer>
            <HeaderText>Want to help? Here’s how</HeaderText>
            <BodyText>All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. You can copy and paste your own content in to see what it looks like with these font combinations. All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. You can copy and paste your own content in to see what it looks like with these font combinations. All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. You can copy and paste your own content in to see what it looks like with these font combinations.</BodyText>
            <ButtonContainer>
                <Button>Learn More</Button>
            </ButtonContainer>
        </LeftContainer>
        <RightContainer>
            <ImgOneContainer />
            <ImgTwoContainer />
        </RightContainer>
    </MainComponent>
  )
}

export default HelpSection
