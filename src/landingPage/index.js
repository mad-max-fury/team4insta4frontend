import React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';
import ConnectButton from '../components/ConnectBtn';
import InputField from '../components/inputfield';
import "./style.css"
// import background from '../../public/images/landingpage.svg'
const LandingPage = () => {
  return <landingWrapper>
  
    <div className = "cont1">
      <div className='displayImg' style={{
        backgroundImage: `url("/images/elementflower.svg")`, backgroundSize: 'cover', objectFit: 'fit',
      }}><img src='/images/intime.png' className='intimeImg' />
      </div>

      <div className="container">
        <div> <h3>Welcome Back!</h3></div>
        <div>
          
          <span>Email</span>
          <InputField type="email" placeholder={'user@example.com'} />
        </div>
        <div>
          <span>Password</span>
          <InputField type="password" placeholder={'8 Characters'} />
        </div>

        <div className = 'checkbox'>
          <div>
            
            <h4><input type="checkbox"/>Remember me</h4>
          </div>

          <div className='password'><h4>Forgot Password?</h4></div>
        </div>

        <div className="signIn">
          <ConnectButton text={'Sign In'} />
        </div>

        <div className="login"><h4>Already have an account? <span>Log in</span></h4></div>

      </div>
    </div>

  </landingWrapper>;
};

export default LandingPage;

const landingWrapper = styled.main`
width:30vw;
background:purple;
margin:  auto;
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
      & > h3{
      color:${colors.main_color};
      text-align:center;
      align-self:center;
      margin:center;
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