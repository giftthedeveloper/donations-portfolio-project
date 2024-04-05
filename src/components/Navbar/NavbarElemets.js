import styled from 'styled-components';


export const Nav = styled.nav`
  background-color: #fff;
  padding: 10px 20px;
  height: 45px;
  border-bottom: 1.5px solid black;
`;

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
`;

export const ButtonContainer = styled.div`
    margin-right: 50px;
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
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