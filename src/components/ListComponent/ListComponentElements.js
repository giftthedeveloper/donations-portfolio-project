import { Accessibility, Nature, OtherHouses, ShareLocation } from '@mui/icons-material';
import styled from 'styled-components';


export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    height: 150px;
    width: 100%;  
    margin-top: 15px;

    @media (max-width: 650px) {
    height: 420px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;


export const ItemContainer = styled.div`
   display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: space-between;
  margin-top: 20px;
  padding-left: 50px;
  padding-right: 50px;

  @media (max-width: 650px) {
    flex-direction: column;
    width: 100%;
    padding: 10px;
    margin-top: 0;
    align-items: center;
    justify-content: center;
  }
`;


export const VerticalLine = styled.div`
  padding-bottom: 0px;
  border-left: 3px solid #FCC29A; 
  height: 70%;
  margin-top: 40px;
  @media (max-width: 650px) {
    border-left: none; 
    border-top: 3px solid #FCC29A; 
    width: 30%;
    height: 0;
    margin-top: 20px;
  }
`;

export const MainText = styled.h3`
    padding: 0px;
    margin: 0px;
    font-size: 18px;
    margin-top: 10px;
    color: #333
`;
export const BodyText = styled.p`
    padding: 0px;
    margin: 0px;
    margin-top: 8px;
    color: #333;
    font-size: 14px;
    cursor: pointer;
`;

export const AccessibilityIcon = styled(Accessibility)`
    font-size: 16px;
    margin-bottom: -10px;
    color: #13829B;
`;

export const HouseIcon = styled(OtherHouses)`
    font-size: 16px;
    margin-bottom: -10px;
    color: #13829B;
`;

export const LocationIcon = styled(ShareLocation)`
    font-size: 16px;
    margin-bottom: -10px;
    color: #13829B;
`;

export const NatureIcon = styled(Nature)`
    font-size: 46px;
    margin-bottom: -10px;
    color: #13829B;
`;