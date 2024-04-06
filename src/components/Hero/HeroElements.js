import styled from 'styled-components';


export const HeroContainer = styled.div`
    background-color: white;

`;

export const LeftHeroContainer = styled.div`
    background-color: white;
    height: 600px;
    width: 45%;
    text-align: left;
    justify-content: space-between;
    padding-left: 30px;

`;

export const AuthorText = styled.h3`
    /* font-size: 14px; */
    color: #13829B;
    padding-left: 0px
`;

export const HeroText = styled.h1`
    font-size: 60px;
    color: #333333;
    padding-bottom: 20px;
    margin: 0px;
    line-height: 1.2;
`;

export const SubText = styled.p`
    font-size: 14px;
    color: #13829B;
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