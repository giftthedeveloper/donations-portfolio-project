import styled from 'styled-components';
import imgcardimg from './donation-img-card-a.jpg'

export const MainContainer = styled.div`
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

export const ImgDiv = styled.div`
    position: absolute;
    width: 50%;
    height: 70%;
    background-color: #FCC29A;
    padding-top: 0px;
    /* margin-left: 10%; */
    margin-top: 10%; 
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