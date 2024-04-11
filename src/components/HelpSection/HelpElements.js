
import styled from 'styled-components';
import imgoneimg from './holding-hands.jpg'
import imgtwoimg from './dancing-image.jpg'


export const MainComponent = styled.div`
    display: flex;
    align-items: center;
    padding-top: 8px;
    justify-content: space-between;
    background-color: white;
    height: 500px;
    width: 100%;
    
`;


export const LeftContainer = styled.div`
    height: 95%;
    width: 50%;
    background-color: white;
    text-align: left;
    padding-left: 50px;
    align-items: center;

`;

export const RightContainer = styled.div`
    height: 95%;
    width: 50%;
    background-color: white;
    position: relative;

`;


export const HeaderText = styled.h1`
    color: #333;
    margin-top: 20%;

`;

export const BodyText = styled.p`
    color: #333;
    width: 75%;
    font-size: 14px;
    line-height: 1.5;
`;


export const ButtonContainer = styled.div`
    margin-right: 50px;
    align-items: center;
    display: flex;
    /* justify-content: space-around; */
    

    @media (max-width: 450px) {
    
      display: none
  }
`;

export const ImgOneContainer = styled.div`
    width: 250px;
    height: 350px;
    border-bottom-right-radius: 40%; 
    border-bottom-left-radius: 40%; 
    background-color: blue;
    margin-left: 100px;
    margin-top: 0px;
    background-image: url(${imgoneimg});
    background-size: cover;

`;


export const ImgTwoContainer = styled.div`
    width: 350px;
    height: 250px;
    border-top-left-radius: 40%; 
    border-bottom-left-radius: 40%; 
    /* background-color: blue; */
    margin-right: 100px;
    margin-top: 0px;
    margin-left: auto; 
    background-image: url(${imgtwoimg});
    background-size: cover;
`;

