import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';


const InputField = ({ type, placeholder, height }) => {
  const [value, setValue] = useState('')

  const handleChange = ({ target }) => {
    const { value } = target
    setValue(value)

  }
  return <InputWrap>
    {type !== 'password' ? <input type={type ? type : 'text'} placeholder={placeholder} required onChange={handleChange} value={value} className='input' height={height} />
      : <Pwrapper>
        <input type='password' placeholder={placeholder} onChange={handleChange} required value={value} />
        <span className='pIcon'> <img src='/images/Vector.svg' /></span>
      </Pwrapper>}
  </InputWrap>;
};

export default InputField;


const InputWrap = styled.div`
 width:95%;
 height:fit-content;
 border-radius:10px;
 & > input{
   width:100%;
   height:${props => props.height ? props.height : '100%'
  };
   min-height: 3rem;
   color:${colors.grey_text};
   font-size:13px;
   background:hsla(0, 100%, 100%, 1);
   border-radius:inherit;
   outline:0;
   border:1px solid ${colors.main_color};
   cursor:pointer;
   padding-left:1rem;
 }
 & > div{
   display:flex;
   justify-content:space-between;
     width:100%;
   height:100%;
   min-height: 3rem;
   color:${colors.grey_text};
   font-size:13px;
   background:hsla(0, 100%, 100%, 1);
   border-radius:inherit;
   outline:0;
   border:1px solid ${colors.main_color};
   cursor:pointer;
   padding-left:1rem;
   align-items:center;
   &> span{
     margin:auto;
   }
   &> input{
     width:90%;
     border:none;
     outline:0;
     
   }

 }

`

const Pwrapper = styled.div`
`