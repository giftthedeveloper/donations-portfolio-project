import React from 'react'
import { ItemContainer, MainItemComponent,ButtonText, Button, MainText,BlogImgThree, BlogImgTwo, BodyText, BlogImgOne, MainComponent, ButtonContainer } from './BlogElements'

function Blog() {
  return (
    <MainComponent >
      <MainItemComponent>
      <ItemContainer>
          <BlogImgOne />
          <MainText>Blog Title 1</MainText>
          <BodyText href="#">Read More</BodyText>

      </ItemContainer>

      <ItemContainer>
          <BlogImgTwo />
          <MainText>Blog Title 2</MainText>
          <BodyText href="#">Read More</BodyText>

      </ItemContainer>
      <ItemContainer>
          <BlogImgThree />
          <MainText>Blog Title 3</MainText>
          <BodyText href="#">Read More</BodyText>

      </ItemContainer>
      </MainItemComponent>
      <ButtonContainer><Button><ButtonText>Read the blog</ButtonText></Button></ButtonContainer>
    </MainComponent>
  )
}

export default Blog
