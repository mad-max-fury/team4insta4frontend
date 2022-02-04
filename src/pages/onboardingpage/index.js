import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
import ConnectButton from '../../components/ConnectBtn';

const OnboardPage = () => {
  return <OnboardingWrapper style={{ background: `url('./images/ob2.png')`, objectFit: 'fit', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
    <div className='innerCon'>
      <div>
        <img src='./images/intime.png' />
      </div>
      <div>
        <ConnectButton text={'Create Account'} pathname={'/signup'} />
        <div><span>Already have an account?</span> <div className='logConnect'>Login</div></div>
      </div>
    </div>
  </OnboardingWrapper>;
};

export default OnboardPage;

const OnboardingWrapper = styled.div`
width:25vw;
background:purple;
height:100vh;
margin:auto;
display:flex;
flex-direction:column;


@media screen and (max-width:768px){
  width:100vw;
  // border:1px solid red;
}
.innerCon{
  // align-self:flex-end;
  // border:1px solid red;
  width:80%;
  height:70%;
  margin-top:50%;
  margin-left:auto;
  margin-right:auto;

  display:flex;
  flex-direction:column;
  align-item:center;
  justify-content:space-around;
  & > div:first-of-type{
    margin:5rem 0;
  }
  & > div:last-of-type{
    justify-self:flex-end;
    display:flex;
    gap:1rem;
    flex-flow:column;
    button{
      height:3rem;
      width:80% !important;
      font-weight:800;
    }
    & > div{
      // border:1px solid red;
       color:#fff;
       display:flex;
       justify-content:space-around;
       align-items:center;
       & > div{
         padding:.5rem 1rem;
         border:2px solid ${colors.white};
         border-radius:10px;
         color:#34BFEA;
         &:hover{
           transition:all 0.2s ease-in-out;
           padding: .5rem 1.2rem;
           color:${colors.white};
           border:2px solid ${colors.secondary_color};
           cursor:pointer;
         }

       }
    }
  }
}
`