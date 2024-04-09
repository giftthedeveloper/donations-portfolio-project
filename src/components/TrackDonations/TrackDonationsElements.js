import styled from 'styled-components';
import imgcardimg from './track-donation-card-img.jpg';

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 8px;
    justify-content: space-between;
    background-color: white;
    height: 500px;
    width: 100%;
    
`;


export const RightContainer = styled.div`
    height: 95%;
    width: 50%;
    background-color: white;
    text-align: left;
    padding-left: 50px;
    align-items: center;

`;

export const LeftContainer = styled.div`
    height: 95%;
    width: 50%;
    background-color: white;
    position: relative;

`;

export const ImgDiv = styled.div`
    position: absolute;
    width: 50%;
    height: 70%;
    background-color: #29D2E4;
    padding-top: 0px;
    margin-left: 20%;
    margin-top: 10%; 
`;

export const RectangleDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 30%;
    background-color: #FDE9C9;
    padding-top: 0px;
`;


export const ImgCard = styled.div`
    position: absolute;
    padding-top: 20px;
    width: 50%;
    height: 70%;
    background-image: url(${imgcardimg});
    background-size: cover;
    /* background-color: green; */
    margin-left: 10%;
    margin-top: 18%;
    
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