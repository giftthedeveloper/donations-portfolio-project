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

    @media (max-width: 650px) {
        flex-direction: column-reverse; 
        height: 600px;
        padding-top: 0px;
    }
    
`;


export const RightContainer = styled.div`
    height: 95%;
    width: 50%;
    background-color: white;
    text-align: left;
    padding-left: 50px;
    align-items: center;

    @media (max-width: 650px) {
        width: 100%; 
        padding: 0px; 
        margin-left: 60px;
        /* margin-top: 10px; */
    }

`;

export const LeftContainer = styled.div`
    height: 95%;
    width: 50%;
    background-color: white;
    position: relative;

    @media (max-width: 650px) {
        width: 100%; 
        height: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
        order: 2;
        margin-bottom: 10px;
    }

`;

export const ImgDiv = styled.div`
    position: absolute;
    width: 50%;
    height: 70%;
    background-color: #29D2E4;
    padding-top: 0px;
    margin-left: 20%;
    margin-top: 10%;

    @media (max-width: 650px) {
        width: 50%; 
        height: 80%;
        margin-right: 20%;
        margin-top: 10%;
    }
`;

export const RectangleDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 30%;
    background-color: #FDE9C9;
    padding-top: 0px;

    @media (max-width: 650px) {
        
        display: None;
    }
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

    @media (max-width: 650px) {
        width: 50%; 
        height: 80%;
        margin-right: 30%;
        margin-top: 32%;
    }
    
`;

export const HeaderText = styled.h1`
    color: #333;
    margin-top: 20%;

    @media (max-width: 650px) {
        /* padding-top: 20px; */
        font-size: 20px;
    }

`;

export const BodyText = styled.p`
    color: #333;
    width: 75%;
    font-size: 14px;
    line-height: 1.5;
    @media (max-width: 650px) {
        font-size: 12px;
    }
`;