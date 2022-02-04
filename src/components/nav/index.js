import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
const NavBar = () => {
  return <NavWrapper>
    <button><img src='./images/Artwork.svg' /></button>
    <button><img src='./images/art1.svg' /></button>
    <button><img src='./images/Icon Artwork.svg' /></button>

  </NavWrapper>;
};

export default NavBar;

const NavWrapper = styled.div`
  background:#f5f5f5;
  width:25vw;
  position:fixed:
  bottom:0;
  
  border-top:1px solid ${colors.secondary_color}
  @media screen and (max-width:768px){
    width:100vw;
  }
`