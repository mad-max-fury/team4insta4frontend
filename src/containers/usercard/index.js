import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';

const Usercard = () => {
  const [follow, setFollow] = useState(false)
  return <User>
    <div>
      <div className='userDetails'>
        <div className='avater'>
          <img src='./images/avater.png' alt='djsd' />
        </div>
        <div className='username'>
          <h5>Hacker Mann</h5>
          <p>Techie ... Loves skating and diving 🔥 </p>
        </div>
      </div>
    </div>
    <div className='followBtn'>
      {
        !follow ? <div onClick={() => setFollow(true)}>Follow</div> : <div onClick={() => setFollow(false)}>Following</div>
      }
    </div>
  </User>;
};

export default Usercard;

const User = styled.div`
width:clac(100% - 2rem);
 display:flex;
 flex-flow:row;
//  border-top:1px solid ${colors.secondary_color};
 border-bottom:1px solid ${colors.secondary_color};
 padding:1rem;

 justify-content:space-between;
 align-items:center;
 .followBtn{
   color:${colors.secondary_color};
   cursor:pointer;
 }
 .userDetails{
      display:flex;
       gap:1rem;
      .avater{
      height:50px;
      width:50px;
      border-radius:25px;
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
        color:${colors.main_color};
       }
       p{
         margin:0;
         font-size:13px;
         color:${colors.grey};
        }
      } 
    
    }
`