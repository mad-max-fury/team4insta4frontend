import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
import ConnectButton from '../../components/ConnectBtn';

const OnboardPage = () => {
  return <OnboardingWrapper style={{ background: `url('./images/ob1.png')`, objectFit: 'fit', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
    <div className='innerCon'>
      <div>
        <img src='./images/intime.png' />
      </div>
      <div>
        <ConnectButton text={'Create Account'} pathname={'/signup'} />
        <ConnectButton text={'Login'} pathname={'/login'} />

        <div> <div className='logConnect'><span>Login</span></div></div>
      </div>
    </div>
  </OnboardingWrapper>;
};

export default OnboardPage;

const OnboardingWrapper = styled.div`
max-width:80%;
background:purple;
height:100vh;
margin:auto;
display:flex;
flex-direction:row;
letter-spacing:1.6px !important;

    @media screen and (min-width:'769px'){
      border:5px solid green;
    }
    @media screen and (max-width:768px){
      width:100vw;
    }
    .innerCon{
      align-self:flex-end;
      justify-self:center;
      margin:0 auto;
      margin-bottom:5%;
      width:40vw;
      height:40%;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:3rem;
      @media screen and (max-width:768px){
        width:100vw;
        height:50%;
          margin:auto;
          margin-top:90%;
      }

      & > div:last-of-type{
        justify-self:flex-end;
        display:flex;
        width:80%;
        @media screen and (max-width:768px){
          width:100%;
          border:1px solid red;
        }
        gap:1rem;
        flex-flow:column;

        button{
          height:3rem;
          width:80% !important;
          font-weight:800;
          cursor:pointer;
         letter-spacing:1.6px !important;

          &:hover{
                transition:all 0.2s ease-in-out;
              padding: 0 .2rem;
              color:${colors.white};
              border:2px solid ${colors.secondary_color} !important;
              cursor:pointer;
          }
        }
        & > button:last-of-type{
           background: linear-gradient(92.06deg, rgba(0, 160, 160, 0.95) -2.49%, #9841B3 102.46%);
              border-radius: 10px;
              color:${colors.white};  
            &:hover{
              transition:all 0.2s ease-in-out;
              padding: 0 .2rem;
              color:${colors.white};
              border:2px solid ${colors.secondary_color};
              cursor:pointer;
            }
        }
      }
    }
`