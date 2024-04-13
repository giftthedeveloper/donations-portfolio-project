import React from 'react'
import { BodyText, HeaderText, ImgCard, ImgDiv, LeftContainer, MainContainer, RightContainer } from './ScheduleDonationsElements'

function ScheduleDonationsComponent() {
  return (
    <MainContainer>
        <LeftContainer>
            <HeaderText>Schedule donations</HeaderText>
            <BodyText>All of this text is editable. Simply click anywhere in the paragraph or heading text and 
                start typing. You can copy and paste your own content in to see what it looks like with these font
                 combinations. All of this text is editable. Simply click anywhere in the paragraph or heading text 
                 and start typing. You can copy and paste your own content in to see what it looks like with these 
                 font combinations. All of this text is editable. Simply click anywhere in the paragraph or heading 
                 text and start typing. You can copy and paste your own content in to see what it looks like with these 
                 font combinations.</BodyText>
        </LeftContainer>
        <RightContainer>
            <ImgDiv></ImgDiv>
            <ImgCard />
        </RightContainer>
    </MainContainer>
  )
}

export default ScheduleDonationsComponent
