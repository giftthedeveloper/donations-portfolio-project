import styled from 'styled-components';
import img from './telephone-img.jpg'

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 50px;
    justify-content: space-between;
    background-color: white;
    height: 500px;
    width: 100%; 
    
    @media (max-width: 650px) {
        flex-direction: column-reverse; 
        height: 600px;
        padding-top: 0px;
        margin-top: -10px;
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
        margin-top: -80px;
        /* margin-top: 10px; */
    }

`;

export const LeftContainer = styled.div`
    margin-top: 100px;
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

export const RectangleDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 50%;
    background-color: #FCC29A;
    padding-top: 0px;

    @media (max-width: 650px) {
        height: 60%;
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

export const ImgCard = styled.div`
    position: absolute;
    padding-top: 20px;
    width: 50%;
    height: 70%;
    background-image: url(${img});
    background-size: cover;
    /* background-color: green; */
    margin-left: 15%;
    margin-top: 10%;  
    border-top-left-radius: 40%; 
    border-top-right-radius: 40%; 
    
    @media (max-width: 650px) {
        width: 40%;
        height: 60%;
        margin: 10%;
        margin-top: 15%;
    }
`;

