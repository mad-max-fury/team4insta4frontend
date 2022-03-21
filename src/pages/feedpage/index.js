import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/nav';
import { colors } from '../../colors';
const FeedLanding = () => {
  return <FeedWrapper>
    <header>
      <NavBar></NavBar>
    </header>

    <main>
      <MomentWrapper>

      </MomentWrapper>
      <Aside>

      </Aside>
    </main>

  </FeedWrapper>;
};

export default FeedLanding;


const FeedWrapper = styled.main`
  max-width:71%;
  background:${colors.general_bg};
  margin:auto;
  min-height:100vh;
  padding-bottom:2rem;
  @media screen and (max-width:768px){
    width:100%;
    margin:0;
  }
  & > header{
    margin:0;
    padding:.25rem 0;
    width:100%;
    background-color:#fff;
    box-shadow: 0 0 4px pink;
  }
  & > main{
    border:1px solid red;
  }
`
const Aside = styled.div`
border:1px solid green;
`
const MomentWrapper = styled.div`

`