import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
import Usercard from '../../containers/usercard';
import ConnectButton from '../ConnectBtn';
const SearchUsersPage = () => {
  return <SearchUsersPageWrap style={{ background: `Url('images/Find friens.svg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
    <div>
      <div>
        <h1>Add Friends</h1>

        <div> <ConnectButton text={'SKIP'} pathname={'/home'} /></div>
      </div>
      <div>
        <p>Lucky you! We have popular profiles , add them as friends to get more interactions.</p>
      </div>
    </div>
    <div>
      {
        ['A', 'B', 'C', 'D', 'F', 1, 2].map(el => {
          return <Usercard />
        })
      }
      <div> See More</div>

    </div>

  </SearchUsersPageWrap>;
};

export default SearchUsersPage;

const SearchUsersPageWrap = styled.main`
max-width:71%;
background:${colors.general_bg};
margin: auto;
padding-bottom:2rem;
@media screen and (max-width:768px){
  width:100%;
  margin:0;
}
& > div:first-of-type{
   width:65%;
   height:30vh;
   display:flex;
   flex-flow:column;
   margin:auto;
   gap:1rem;
   justify-content:center;
   & > div{
     display:flex;
     flex-flow:row;
     align-items:center;
     width:98%;
     justify-content:space-between;
      h1{
        font-family: Poppins;
        font-style: normal;
          font-weight: bold;
        font-size: 30px;
        color:#F4EEEE;
        margin:0;
        line-height: 36px;
        letter-spacing:.6px;
      }
      button{
        width:6rem !important;
        padding:.5rem 0rem; 
        font-weight:800;
        letter-spacing:1.6px;
        background: linear-gradient(92.06deg, rgba(0, 160, 160, 0.95) -2.49%, #9841B3 102.46%);
          &:hover{
            transition:all 0.2s ease-in-out;
            cursor:pointer;
            background: linear-gradient(92.06deg, #9841B3 -2.49%, rgba(0, 160, 160, 0.95) 102.46%);
          }
      }
   }
   & > div:last-of-type{
     &> p{
      Font-family: Poppins;
      Font-style: Medium;
      Font-size: 18px;
      Line-height: 36px;
      Line-height: 100%;
      letter-spacing:1px;
     color:#F4EEEE;

     }
   }
}
& > div:last-of-type{
 
  width:50%;
  background:${colors.general_bg};
  display:flex;
  flex-flow:column;
  margin:auto;
  text-align:start;
   border-radius:20px;
  & > div{
    &:first-of-type{
      border-top-right-radius:20px;
      border-top-left-radius:20px;

    }
     &:last-of-type{
      border-bottom-right-radius:20px;
      border-bottom-left-radius:20px;
      padding:1rem 0;
      text-align:center;

    }
  }
}
`