import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
import InputField from '../inputfield';
const NavBar = () => {
  return <NavWrapper>
    <Logo>
      <img src='/images/inTime.svg' alt='logo-intime' />
    </Logo>
    <SearchWrapper>
      <input type={'search'} placeholder="Search" />
    </SearchWrapper>
    <NavIcons>
      <Icon>
        <img src='/images/home.svg' />
      </Icon>
      <Icon>
        <img src='/images/Group 117.svg' />
      </Icon>
      <Icon>
        <img src='/images/Group 114.svg' />
      </Icon>
      <Icon>
        <img src='/images/Group 115.svg' />
      </Icon>
      <Icon>
        <img src='/images/Group 116.svg' />
      </Icon>
      <Icon>
        <img src='/images/avater.png' />
      </Icon>

    </NavIcons>
  </NavWrapper>;
};

export default NavBar;

const NavWrapper = styled.div`
  padding:0 2rem;
  width:calc(100%- 4rem);
  display:flex;
  justify-content:space-between;
  @media screen and (max-width:768px){
    width:100vw;
  }
`
const Logo = styled.div`
width:8rem;
height:3rem;
  & > img{
    height:100%;
    width:100%;
  }
`
const SearchWrapper = styled.div`
height:fit-content;
margin: auto 0;
width: 15rem;
&:hover{
  transition: all 0.8s ease-in-out;
  width:20rem;
}
color:${colors.grey_text};
& > input{
  height:2.3rem;
  padding:.5rem;
  width:calc(100% - 1rem);
  color:${colors.grey_text};
   font-size:13px;
   background:#f5f5f5;
   border-radius:10px;
   outline:0;

   cursor:pointer;
   padding-left:1rem;
   border:0;
   &:hover{
     transition: all 0.8s ease-in;
      box-shadow: 0 0 4px pink;
   }

}

`
const NavIcons = styled.div`
display:flex;
flex-flow:row;
gap:.6rem;
align-items:center;
list-style:none;
width:fit-content !important;


`
const Icon = styled.span`
height:2rem;
width:2rem;
    & > img{
    width:90%;
    height:90%;
    }
    &:last-of-type{
      height:3rem;
      width:3rem;
      border-radius:1rem;
      & > img{
      width:100%;
      height:100%;
      border-radius:1rem;
      }
    }

`