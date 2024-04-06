import React from 'react'
import { AuthorText, HeroContainer, HeroText, SubText, LeftHeroContainer, 
HighlightedText,
ButtonContainer,
PlayButtonIcon,
PlayButtonText,
PlayButtonContainer,
RightHeroContainer,
MainImage,
OrangeRectangle,
BlueRectangle,
CircleImageClip} from './HeroElements'
import { Button } from '../Button/ButtonElements'

function Hero() {
  return (
    <HeroContainer>
        <BlueRectangle />
        <CircleImageClip />

        <LeftHeroContainer>
            <AuthorText>-- GEORGESKETCH</AuthorText>

            <HeroText>Lorem ipsum <HighlightedText>dolor</HighlightedText> sit amet, <HighlightedText>consectetur</HighlightedText> adipiscing</HeroText>
            <SubText>Donation is one of the best ways to create impact in society. We help connect people who are in need 
                with others who can help with the necessary supplies</SubText>
              
            <ButtonContainer>
                <Button> Donate </Button>
              
                <PlayButtonContainer>
                  <PlayButtonIcon></PlayButtonIcon>
                  <PlayButtonText>Learn More</PlayButtonText>
                </PlayButtonContainer>
            </ButtonContainer>
        </LeftHeroContainer>
        <RightHeroContainer>

            <OrangeRectangle />
            <MainImage />
            
        </RightHeroContainer>
    </HeroContainer>
  )
}

export default Hero
