import React from 'react'
import { BodyText, HeaderText, ImgCard, ImgDiv, LeftContainer, MainContainer, RectangleDiv, RightContainer } from './TrackDonationsElements'


function TrackDonations() {
  return (
    <MainContainer>
        <LeftContainer>
            <RectangleDiv />
            <ImgDiv />
            <ImgCard />
            
            
        </LeftContainer>
        <RightContainer>
            <HeaderText>Track Your Donations</HeaderText>
            <BodyText>All of this text is editable. Simply click anywhere in the paragraph or 
                heading text and start typing. You can copy and paste your own content in to 
                see what it looks like with these font combinations. All of this text is editable. 
                Simply click anywhere in the paragraph or heading text and start typing. You can copy and 
                paste your own content in to see what it looks like with these font combinations. All of this text is editable. 
                Simply click anywhere in the paragraph or heading text and start typing. You can copy and paste your own content in 
                to see what it looks like with these font combinations.</BodyText>
        </RightContainer>

    </MainContainer>
  )
}

export default TrackDonations
