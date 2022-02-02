import React from 'react';
import styled from 'styled-components';
import InputField from '../../components/inputfield';
import ConnectButton from '../../components/ConnectBtn';
import { colors } from '../../colors';
import Usercard from '../../containers/usercard';
const SuggestedFriends = () => {
  return <SuggestedFriendsWrapper>
    <div>
      <div className='displayImg' style={{
        backgroundImage: `Url("/images/elementflower.svg")`, backgroundSize: 'cover', objectFit: 'fit',
      }}>
        <div>
          <span>Skip</span>
        </div>
        <div>
          <h1>Add Friends</h1>
          <p>Lucky you! We have popular profiles , add them as friends to get more interactions.</p>
        </div>
      </div>
    </div>
    <div>
      <div> <h5>Suggested Profiles</h5></div>
      <main>
        {
          ['A', 'B', 'C', 'D', 'F', 1, 2].map(el => {
            return <Usercard />
          })
        }

      </main>
      <div className='seeMoreBtn'>
        <span>See More</span>
      </div>

    </div>
  </SuggestedFriendsWrapper>;
};

export default SuggestedFriends;

const SuggestedFriendsWrapper = styled.main`
width:30vw;
background:${colors.main_color};
margin: 1rem auto;
@media screen and (max-width:768px){
  width:100%;
}

.displayImg{
  display:flex;
  align-items:center;
  justify-content:center;
  height:100%;
  color:#fff;
  flex-direction:column;
  & > div{
    width:80%;
    margin:auto;
    text-align:start;
    &:first-of-type{
  
      text-align:end;
      font-size:20px;
      font-weight:800;
    }
  }

}
& > div:first-of-type{
  height:40vh;
}
& > div:last-of-type{
  // padding:1rem;
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
    padding:1.5rem;

  }
  & > div:first-of-type{
    
      & > h5{
      color:${colors.main_color};
      text-align:center;
      align-self:center;
      margin:center;
      font-size:16px;
      margin:0;
    }
  }
  
  
}
.seeMoreBtn{
  
  padding:1rem !important;
  display:flex;
  align-items:center;
  justify:content:center;
  font-size:18px;
  font-weight:800;
  color:${colors.secondary_color};
}
`
