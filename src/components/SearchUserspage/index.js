import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
import Usercard from '../../containers/usercard';
const SearchUsersPage = () => {
  return <SearchUsersPageWrap>
    <div>
      <h1>Looking for a  friend?</h1>
      <div>
        <input type={'text'} placeholder='search user' />
        <span className='fas fa-search fa-2x'></span>
      </div>
    </div>
    <div>
      {
        ['A', 'B', 'C', 'D', 'F', 1, 2].map(el => {
          return <Usercard />
        })
      }
    </div>

  </SearchUsersPageWrap>;
};

export default SearchUsersPage;

const SearchUsersPageWrap = styled.main`
width:30vw;
background:${colors.general_bg};
margin: 1rem auto;
@media screen and (max-width:768px){
  width:100%;
  margin:0;
}
& > div:first-of-type{
   height:30vh;
   padding:1rem;
   display:flex;
   flex-flow:column;
   gap:1rem;
   justify-content:center;
   & > h1{
     font-family: Poppins;
     font-style: normal;
      font-weight: bold;
     font-size: 24px;
    line-height: 36px;
   }
   & > div{
     width:100%;
     display:flex;
     justify-content:space-between;
     align-items:center;
     border-bottom:2px solid ${colors.main_color};
     input{
       width:80%;
       border:0;
       outline:0;
       background-color:${colors.general_bg};
     }
   }
}
& > div:last-of-type{
 
  width:100%;
  background:${colors.general_bg};
  display:flex;
  flex-flow:column;
  text-align:start;
  &> div{
    border-top:none;
  }
}
`