import React from 'react'
import { Maincontainer, LeftContainer, ButtonContainer,HeaderText, BodyText, RightContainer, ImgCard, ImgDiv } from './DonateAnonymouslyElements';
import { Button } from '../Button/ButtonElements';


function DonateAnonymously() {
  return (
    <Maincontainer>
        <LeftContainer>
            <HeaderText>Donate anonymously at</HeaderText>
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
    </Maincontainer>

  )
}

export default DonateAnonymously;
