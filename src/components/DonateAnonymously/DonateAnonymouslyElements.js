import styled from 'styled-components';
import imgcardimg from './donation-img-card-a.jpg'

export const Maincontainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 8px;
    justify-content: space-between;
    background-color: white;
    height: 500px;
    width: 100%;

    @media (max-width: 650px) {
        flex-direction: column-reverse; 
        height: 650px;
        padding-top: 0px;
    }
    
`;


export const LeftContainer = styled.div`
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

    }

`;

export const RightContainer = styled.div`
    height: 95%;
    width: 50%;
    background-color: white;
    position: relative;

    @media (max-width: 650px) {
        width: 100%; 
        margin-top: 20px; 
        margin-left: 0px;
        justify-content: center;
        align-items: center;
        display: flex;
    }
`;

export const ImgDiv = styled.div`
    position: absolute;
    width: 50%;
    height: 70%;
    background-color: #FCC29A;
    padding-top: 0px;
    /* margin-left: 10%; */
    margin-top: 10%; 

    @media (max-width: 650px) {
        width: 60%; 
        height: 80%;
        margin-right: 20%;
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
        width: 60%;
        height: 75%;
        margin-right: 10%;
        margin-top: 30%;

    }
    
`;


export const HeaderText = styled.h1`
    color: #333;
    margin-top: 20%;
    @media (max-width: 650px) {
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

