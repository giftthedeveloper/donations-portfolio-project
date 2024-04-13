import { MenuRounded } from '@mui/icons-material';
import styled from 'styled-components';


export const Nav = styled.nav`
  background-color: #fff;
  padding: 10px 20px;
  height: 45px;
  border-bottom: 1.5px solid black;
`;

export const MenuIcon = styled(MenuRounded)`
  display: none !important;


  @media (max-width: 650px) {
    display: block !important;
    color: black;
    margin-right: 30px;
    font-size: 18px;

    &:hover {
    color: #13829B;
    
  }
}`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  justify-content: space-between;
`;

export const LogoShape = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%; 
  background-color: #FCC29A; 
  margin-left: 50px;

  @media (max-width: 450px) {
    width: 25px; 
    height: 25px;
    margin-left: 30px;
  }
`;

export const ButtonContainer = styled.div`
    margin-right: 50px;

    @media (max-width: 450px) {
    
      display: none
  }
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;

  @media (max-width: 768px) {
    display: none; 
  }
`;

export const NavItem = styled.li`
  margin-right: 20px;
`;

export const NavLink = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    color: #13829B;
    text-decoration: underline;
  }
`;