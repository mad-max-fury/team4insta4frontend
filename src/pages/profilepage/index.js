import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../../components/nav';
import { colors } from '../../colors';
import Usercard from '../../containers/usercard';
const ProfilePage = () => {
  const handleClick = () => {

  }
  const [images, setImage] = useState(false)
  return <Profile>

    <div>
      <h1>Profile</h1>

    </div>
    <div>
      <div className='userDetails'>
        <div className='avater'>
          <img src='./images/avater.png' alt='djsd' />
        </div>
        <div className='username'>
          <h5>Hacker Mann</h5>
          <p> Lagos, Nigeria</p>
        </div>
      </div>
      <div className='activity-summary'>
        <div >
          <span>0</span>
          <h3>Posts</h3>
        </div>
        <div>
          <span>0</span>
          <h3>Follows</h3>
        </div>
        <div>
          <span>0</span>
          <h3>Following</h3>
        </div>
        <div>

        </div>


      </div>
      <div className='gallery'>
        {
          images ? true : <h1> No Post Yet</h1>
        }
      </div>
      <button className='connectBtnCreate' onClick={handleClick}><h1>+</h1></button>

      <div className='nav-wrapper'>
        <NavBar />
      </div>
    </div>
  </Profile>;
};

export default ProfilePage;


const Profile = styled.main`
background:${colors.general_bg};
  width:25vw;
  @media screen and (max-width:768px){
    width:100vw;
  }

  .activity-summary{
    // border:1px solid red;
    display:flex;
    width:80%;
    background:${colors.secondary_color};
    border-radius:10px;
    color:#FFf;
    font-size:18px;
    font-weight:500;
    box-shadow:0 0 4px #c4c4c4;
    margin:.6rem auto;
    display:flex;
    justify-content:space-around;
    padding: .5rem 0;
    & > div{
      display:flex;
      flex-flow:column;
      gap:.5rem;
      align-items:center;
      & > h3{
        // color:#000;
        margin:0;
        
      }
    }
  }

  & > div:first-of-type{
    height:4rem;
    display:flex;
    // background:${colors.white};
    border-bottom:1px solid grey;
    align-items:center;
    justify-content:space-between;
    width:90%;
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
      background:${colors.white};

      & > div{
        height:100%;
        display:flex;
        background:#fff;
        justify-content:space-around;
        align-self:flex-end;
        background:${colors.white};
        & > button{
          border:none;
          background:#fff;
        background:${colors.white};
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

  .userDetails{
      display:flex;
      // border:1px solid red;
       gap:1rem;
       width:80%;
       margin:0 auto;
      .avater{
      height:100px;
      width:100px;
      border-radius:50px;
      & > img{
       width:100%;
       height:100%;
       border-radius:inherit;
      }
     }
     .username{
       text-align:start;
       h5{
        margin:0;
        font-size:20px;
        color:${colors.main_color};
       }
       p{
         margin:0;
         font-size:16px;
         color:${colors.grey};
        }
      } 
    
    }
    .gallery{
      height:45vh;
      border:3px dotted ${colors.grey_text_secondary};
      width:80%;
      margin:auto;
      align-items:center;
      text-align:center;
    }

    .connectBtnCreate{
   margin-left:70%;
   border:0;
    height:4rem;
    width:4rem;
    border-radius:2rem;
  //  border:1px solid red;
   color:${colors.grey_text};
   font-size:13px;
   background: linear-gradient(92.06deg, #9841B3 -2.49%, rgba(0, 160, 160, 0.95) 102.46%);
   color:${colors.white}; 
    }

`