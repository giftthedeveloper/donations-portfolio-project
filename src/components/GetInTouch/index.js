import React from 'react'
import { BodyText, HeaderText, RightContainer, MainContainer, LeftContainer, RectangleDiv, ImgCard } from './GetInTouchElements'

function GetInTouch() {
  return (
    <MainContainer>
        <LeftContainer>
            
            <RectangleDiv />
            <ImgCard />

        </LeftContainer>
        <RightContainer>
            <HeaderText>Get in Touch</HeaderText>
            <BodyText>All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing.
                 You can copy and paste your own content in to see what it looks like with these font combinations. All
                  of this text is editable. Simply </BodyText>
        </RightContainer>
    </MainContainer>
  )
}

export default GetInTouch
