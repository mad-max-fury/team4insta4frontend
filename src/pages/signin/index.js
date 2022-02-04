import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
import ConnectButton from '../../components/ConnectBtn';
import InputField from '../../components/inputfield';
import { Link } from 'react-router-dom';
const SignIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState()
  return <SignInWrapper>
    <div>
      <div className='displayImg' style={{
        backgroundImage: `Url("/images/elementflower.svg")`, backgroundSize: 'cover', objectFit: 'fit',
      }}><img src='/images/intime.png' /></div>
    </div>
    <div>
      <div> <h3>Welcome Back!</h3></div>
      <div>
        <span>Email</span>
        <InputField type="email" placeholder={'user@example.com'} />
      </div>
      <div>
        <span>Password</span>
        <InputField type="password" placeholder={'8 Characters'} />
        <div className='wrc'><span>
          <input type={'checkbox'}></input>
          <span>Remember me</span>
        </span> <span>Forgotten password?</span></div>
      </div>
      <div>
        <ConnectButton text={'Sign In'} pathname={'/findfriend'} />
      </div>

      <div className="login"><h4>don't have an account? <span><Link to={'/signup'}>Create</Link></span></h4></div>

    </div>


  </SignInWrapper>;
};

export default SignIn;

const SignInWrapper = styled.main`
width:30vw;
background:purple;
margin: auto;
// border:1px solid red;
height:100vh;
@media screen and (max-width:768px){
  width:100%;
}
.displayImg{
  display:flex;
  align-items:center;
  justify-content:center;
  height:100%;

}
& > div:first-of-type{
  height:30vh;
}
& > div:last-of-type{
  padding:1rem;
  // border:1px solid red;
  background:${colors.general_bg};
  display:flex;
  border-top-left-radius:5rem;
  flex-flow:column;
  gap:1rem;
  text-align:start;
  & > div{
    display:flex;
    flex-direction:column;
    gap:1rem;
    color
  
  }
  & > div:first-of-type{
       padding-bottom:3rem;
      & > h3{
      color:${colors.main_color};
      text-align:center;
      align-self:center;
      margin:center;
    }
  }
  div.wrc{
    // border:1px solid red;
    display:flex;
    justify-content:space-between;
    & > span:last-of-type{
     color:${colors.secondary_color};
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
  .login{
    span{

      color: ${colors.secondary_color};
    }
  }
  .displayImg{
    margin-top: 20px;
    
  }
  
}

`