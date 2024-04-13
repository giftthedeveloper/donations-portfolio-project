import styled from 'styled-components';
import imgOne from './blogimgone.jpg'


export const MainComponent = styled.div`
    
    background-color: #FDE9C9;
    height: 350px;
    width: 100%;  
    margin-top: 15px;

    @media (max-width: 650px) {
    height: 420px;
  }
`;
export const MainItemComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80%;
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
  padding-left: 10%;
  padding-right: 10%;

  @media (max-width: 650px) {
    flex-direction: column;
    width: 100%;
    padding: 10px;
    margin-top: 0;
    align-items: center;
    justify-content: center;
  }
`;

export const BlogImgOne = styled.div`
    background-image: url(${imgOne});
    background-size: cover;
    border-radius: 60px;
    width: 200px;
    height: 150px;
`;

export const BlogImgTwo = styled.div`
    background-image: url(${imgOne});
    background-size: cover;
    border-radius: 60px;
    width: 200px;
    height: 150px;
`;

export const BlogImgThree = styled.div`
    background-image: url(${imgOne});
    background-size: cover;
    border-radius: 60px;
    width: 200px;
    height: 150px;
`;


export const MainText = styled.h3`
    padding: 0px;
    margin: 0px;
    font-size: 18px;
    margin-top: 10px;
    color: #13829B
`;
export const BodyText = styled.p`
    padding: 0px;
    margin: 0px;
    margin-top: 8px;
    color: #333;
    font-size: 14px;
    cursor: pointer;
`;

export const Button = styled.button`
    border-radius: 3px;
    border-color: #13829B;
    margin-top: auto;
    background-color: white;
    cursor: pointer;

    &:hover {
    background-color: #13829B;
    border-color: white;
`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;

    /* margin-bottom: 10px; */
`;

export const ButtonText = styled.p`
  color: #13829B;
  &:hover {
    color: white;
`;