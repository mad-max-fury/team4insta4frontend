import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/nav';
import { colors } from '../../colors';
const FeedLanding = () => {
  return <FeedWrapper>
    <div>
      <h2>Home</h2>
      <span>icon</span>
    </div>
    <div>

      <div className='nav-wrapper'>
        <NavBar />
      </div>
    </div>
  </FeedWrapper>;
};

export default FeedLanding;


const FeedWrapper = styled.main`
  background:${colors.white};
  width:25vw;
  @media screen and (max-width:768px){
    width:100vw;
  }

  & > div:first-of-type{
    height:4rem;
    display:flex;
    background:${colors.white};
    border-bottom:1px solid grey;
    align-items:center;
    justify-content:space-between;
    width:80%;
    margin:auto;
    
    h2{
      margin:0;
      color:#000;

      // margin-left:1rem;
      // margin-top:2rem;
    }
  }
  & > div:last-of-type{
    // border:2px solid #c4c4c4;
    height:calc(100vh - 6rem);
    width:calc(100% -2rem);
    padding-top:1rem;
    padding-bottom:0;
    display:flex;
    background:${colors.white};
    display:flex;
    flex-flow:column;
    .nav-wrapper{
      width:100%;
      height:3rem;

      & > div{
        height:100%;
        display:flex;
        background:#fff;
        justify-content:space-around;
        align-self:flex-end;
        & > button{
          border:none;
          background:#fff;
             background:none;
        border:0;
        outline:0;
        cursor:pointer;
        &:hover{
          transition:all 0.2s ease-in-out;
          padding-top:1rem ;
        }
        }
      }

    }
  }
`