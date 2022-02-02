import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
const ConnectButton = ({ text }) => {
  const handleClickSubmit = (e) => {
    alert(e.target.textContent)
  }
  return <Button onClick={handleClickSubmit}>{text}</Button>;
};

export default ConnectButton;

const Button = styled.button`
   width:80%;
   margin:auto;
   border:0;
   height:100%;
   min-height: 3rem;
   color:${colors.grey_text};
   font-size:13px;
   background: linear-gradient(92.06deg, #9841B3 -2.49%, rgba(0, 160, 160, 0.95) 102.46%);
   border-radius: 10px;
   color:${colors.white};   
`