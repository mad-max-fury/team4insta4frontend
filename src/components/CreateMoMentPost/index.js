import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import InputField from '../inputfield';
import { colors } from '../../colors';
import ConnectButton from '../ConnectBtn';
const CreateMoMentPost = () => {
  const [image, setImage] = useState(null)
  const fileInputRef = useRef()
  const [preview, setPreview] = useState(null)


  const handleImage = (e) => {
    setImage(e.target.files[0])
    console.log(fileInputRef.current.files)
  }
  useEffect(() => {
    if (image) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result.toString())
      }
      reader.readAsDataURL(image)
    } else {
      setPreview(null)
    }

  }, [image])

  return <CreateMomentWrap>
    <div>
      <h1>New Post</h1>
    </div>
    <div>
      <input type={'file'} ref={fileInputRef} accept={'image/*'} style={{ display: 'none' }} onChange={handleImage} />
      {
        preview === null ? <button className='selectBtn' onClick={(e => {
          e.preventDefault()
          fileInputRef.current.click()
        })}> Select a photo here </button> : <img className='selectImg' src={preview} />
      }
      <textarea type={'textarea'} rows='10' cols={'20'} placeholder={'Add Caption here...'} height={'10rem'} ></textarea>
      <div>
        <ConnectButton text={'Upload'} />
      </div>

    </div>

  </CreateMomentWrap>;
};

export default CreateMoMentPost;


const CreateMomentWrap = styled.div`
  background:${colors.main_color};
  width:25vw;
  @media screen and (max-width:768px){
    width:100vw;
  }

  & > div:first-of-type{
    height:6rem;
    display:flex;
    
    h1{
      margin:0;
      color:#fff;
      margin-left:1rem;
      margin-top:2rem;
    }
  }
  & > div:last-of-type{
    height:calc(100vh - 5rem);
    width:calc(100% -2rem);
    padding:1rem;
    display:flex;
    background:${colors.general_bg};
    display:flex;
    flex-flow:column;
    gap:1rem;
 & > textarea{
   border:none;
   font-size:13px;
   background:#fff;
   width:calc(100% - 2rem) !important;
   padding:1rem;
   border-radius:10px;
   height:5rem !important;
   outline:0;
   border:none;
 }
    .selectBtn{
      height:40vh;
      border:4px dotted ${colors.secondary_color};
      background-color:#fff;
      font-size:18px;
      text-transform:uppercase;
      color:${colors.main_color};
      font-weight:800;
      cursor:pointer;

    }
    .selectImg{
       height:40vh;
       box-shadow:0px 0px 8px grey;
       object-fit:fit;
       border-radius:10px;
    }
    & > div:last-of-type{
      height: 3rem;
      display:flex;
      & > button{
        font-weight:800;
        letter-spacing:1.25px;
      }
    }
  }

`