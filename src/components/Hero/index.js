import React from 'react'
import { AuthorText, HeroContainer, HeroText, SubText, LeftHeroContainer, 
HighlightedText} from './HeroElements'

function Hero() {
  return (
    <HeroContainer>
        <LeftHeroContainer>
            <AuthorText>-- GEORGESKETCH</AuthorText>

            <HeroText>Lorem ipsum <HighlightedText>dolor</HighlightedText> sit amet, <HighlightedText>consectetur</HighlightedText> adipiscing</HeroText>
            <SubText>Donation is one of the best ways to create impact in society. We help connect people who are in need 
                with others who can help with the necessary supplies</SubText>
        </LeftHeroContainer>
    </HeroContainer>
  )
}

export default Hero
