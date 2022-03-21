import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
import ConnectButton from '../../components/ConnectBtn';
import InputField from '../../components/inputfield';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const user = {
    name: '',
    phone: '',
    email: '',

  }
  return <SignUpWrapper className='signUpWrapper'>

    <div>
      <div>
        <div> <h3>Create Account</h3></div>
        <div>
          <span>Full Name:</span>
          <InputField type={'text'} placeholder={'Enter name here'} />
        </div>
        <div>
          <span>Email</span>
          <InputField type="email" placeholder={'user@example.com'} />
        </div>
        <div>
          <span>Phone Number:</span>
          <InputField type={'number'} placeholder={'+234 090 7541 9360'} />
        </div>
        <div>
          <span>Password</span>
          <InputField type="password" placeholder={'8 Characters'} />
        </div>

        <div>
          <ConnectButton pathname={'/login'} text={'Create Account'} />
        </div>

        <div className="login"><h4>Already have an account? <span><Link to={'/login'}>Login</Link> </span></h4></div>

      </div>
    </div>
    <div style={{ backgroundImage: `Url('images/Group 113.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className='displayImg'>
        <img src='/images/intime.png' />
      </div>
    </div>

  </SignUpWrapper>;
};

export default SignUp;

const SignUpWrapper = styled.main`
display:flex;
  max-width:71%;  
height:100vh;
margin:auto;
background-color:${colors.general_bg};
  & > div:first-of-type{
    width:55%;
    display:flex;
    &> div{
       display:flex;
    flex-direction:column;
    gap:1rem;
    width:60%;
    gap:1rem;
    margin:auto;
      & > div{
      display:flex;
      flex-direction:column;
      gap:1rem;
    }
      & > div:first-of-type{
          & > h3{
          color:${colors.main_color};
          text-align:center;
          align-self:center;
          margin:0;
          margin:center;
          font-size:40px;
        }
      }
      & > div: nth-of-type(6){
         & > button{
           width:100%;
         }
      }
        & > div: last-of-type{
          & > h4{
          text-align: center;
          align-self:center;
          margin: center;
          color:${colors.main_color}
        }

        }
  
    }
  }
   & > div:last-of-type{
    width:45%;
    display:flex;
    justify-content:center;
    align-items:center;
    // border:1px solid red;
  }
`