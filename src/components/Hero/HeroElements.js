import { PlayCircle, PlayCircleFilled, PlayCircleFilledWhite } from '@mui/icons-material';
import styled from 'styled-components';
import donationimg from './donation-project-main-imge.jpg'
import circleImg from './image-donation-project.jpg'


export const HeroContainer = styled.div`
    background-color: white;
    display: flex;
    height: 800px;
    /* position: fixed; */

    @media (max-width: 650px) {
        height: 600px;
        margin: 0px;
        display: flex;
        flex-direction: column;
   
  }

`;

export const LeftHeroContainer = styled.div`
    background-color: white;
    height: 100%;
    width: 45%;
    text-align: left;
    justify-content: space-between;
    padding-left: 30px;
    padding-top: 60px;


    @media (max-width: 650px) {
        width: 100%
  }

  @media (max-width: 400px) {
        width: 90%;
      
  }

`;

export const AuthorText = styled.h3`
    /* font-size: 14px; */
    color: #13829B;
    padding-left: 0px;

    @media (max-width: 650px) {
        font-size: 14px;
  }

  @media (max-width: 400px) {
        font-size: 12px;
      
   
  }
`;

export const HeroText = styled.h1`
    font-size: 60px;
    color: #333333;
    padding-bottom: 20px;
    margin: 0px;
    line-height: 1.2;

    @media (max-width: 650px) {
        font-size: 34px
  }


  @media (max-width: 400px) {
        font-size: 30px;      
   
  }
`;

export const SubText = styled.p`
    font-size: 16px;
    color: #333333;
    width: 80%;
    padding-bottom: 20px;

    @media (max-width: 400px) {
        font-size: 12px;
        padding-bottom: 0px;
      
   
  }
`;

export const HighlightedText = styled.span`
color: #13829B;
position: relative;
&::after {
        content: "";
        position: absolute;
        bottom: -5px; 
        left: 0;
        width: 100%; 
        height: 5px; 
        background-color: #FDE9C9; 
        border-radius: 1px; 
    }


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

export const PlayButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40px;
`;

export const PlayButtonIcon = styled(PlayCircleFilledWhite)`
  color: #333;
  font-size: 80px;
`;

export const PlayButtonText = styled.span`
  color: #333;
  padding-left: 5px;
  font-size: 16px;
`;



export const RightHeroContainer = styled.div`
    background-color: white;
    position: relative;
    height: 100%;
    width: 55%;
    padding-top: 60px;
    display: flex;
    justify-content: flex-end; 
    align-items: flex-start; 
    text-align: left;
    padding-right: 0px;

    @media (max-width: 650px) {
        width: 100%;
        height: 100%;
        margin-top: 0px;
        align-items: flex-end;
        margin-right: 0px;
        padding-right: 0px;
        /* display: flex; */
        flex-direction: column;
        height: 70%;
        margin-top: 0px;
        margin-bottom: 10%;
        justify-content: flex-start; 

    }
    
`;

export const MainImage = styled.div`
    position: absolute; 
    top: 0; 
    right: 30; 
    /* background-color: #333; */
    height: 80%; 
    width: 45%; 
    z-index: 1; 
    margin: 0px;
    margin-top: 30px;
    background-image: url(${donationimg});
    background-size: cover;
    padding-right: 20px;

    @media (max-width: 650px) {
        top: 0;
        position: absolute;
        margin-top: 0px;
        width: 30%;
        height: 100%;
        padding-right: 40px;  
  }
    `;
    
export const OrangeRectangle = styled.div`
  background-color: #FCC29A;
  width: 90%;
  height: 30%;
  align-self: flex-end;
  margin: 0px;
  padding-right: 10px;
  position: relative;
  z-index: 0;
  margin-bottom: 50px;

  @media (max-width: 650px) {
        width: 80%;
        height: 65%;
        padding-right: 0px;
  
  }

`;

export const BlueRectangle = styled.div`
    background-color: #29D2E4;
    width: 120px;
    height: 120px;
    opacity: 0.3;
    z-index: 2;
    opacity: 0.1;
    position: absolute;
    left: 75%; 
    top: 60%; 
    transform: translate(-50%, -50%);

    @media (max-width: 650px) {
        left: 80%; 
        top: 60%; 
        width: 60px;
        height: 60px;
        opacity: 0.3;
   
  }
`;

export const CircleImageClip = styled.div`
    background-image: url(${circleImg});
    background-size: cover;
    /* background-color: #000; */
    outline: 7px solid white;
    width: 150px;
    height: 150px;
    z-index: 2;
    position: absolute;
    left: 68%; 
    top: 42%; 
    transform: translate(-50%, -50%);
    border-radius: 50%;

    @media (max-width: 650px) {
        left: 15%; 
        top: 60%; 
        width: 75px;
        height: 75px;

    }



`;