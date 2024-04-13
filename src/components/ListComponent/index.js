import React from 'react'
import { MainContainer, ItemContainer, VerticalLine, AccessibilityIcon, NatureIcon, LocationIcon, HouseIcon, MainText, BodyText} from './ListComponentElements'



function ListComponent() {
  return (
    <MainContainer>
      <ItemContainer>
          <AccessibilityIcon />
          <MainText>Lorem ipsum</MainText>
          <BodyText href="#">Read More</BodyText>

      </ItemContainer>
      <VerticalLine />

      <ItemContainer>
          <NatureIcon />
          <MainText>Lorem ipsum</MainText>
          <BodyText>Read More</BodyText>
      </ItemContainer>
      <VerticalLine />
      <ItemContainer>
      
          < LocationIcon/>
          <MainText>Lorem ipsum</MainText>
          <BodyText>Learn More</BodyText>
          
      </ItemContainer>
      <VerticalLine />
      
      <ItemContainer>
          <HouseIcon />
          <MainText>Lorem ipsum</MainText>
          <BodyText>Learn more</BodyText>
      </ItemContainer>
    </MainContainer>
  )
}

export default ListComponent
