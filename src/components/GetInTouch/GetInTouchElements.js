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
    margin-top: 100px;
    height: 95%;
    width: 50%;
    background-color: white;
    position: relative;

`;

export const RectangleDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 50%;
    background-color: #FCC29A;
    padding-top: 0px;
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
`;

