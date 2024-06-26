import React from 'react'
import { Nav, LogoShape, NavContainer, ButtonContainer, NavItem, NavLink,
    NavList, MenuIcon} from './NavbarElemets';
import { Button } from '../Button/ButtonElements';

function Navbar() {
  return (
    <Nav>
        <NavContainer>
            <LogoShape>
            </LogoShape>

            <MenuIcon></MenuIcon>

            <NavList>
                <NavItem>
                    <NavLink href='#'>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='#'>About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='#'>Blog</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='#'>Contact Us</NavLink>
                </NavItem>
            </NavList>

            <ButtonContainer>
                <Button>Call Us</Button>
            </ButtonContainer>
        </NavContainer>

        

    </Nav>
  )
}

export default Navbar;
