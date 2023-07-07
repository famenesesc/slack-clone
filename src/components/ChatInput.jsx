import React, { useState } from 'react'
import { Button } from '@mui/material'
import { styled } from 'styled-components'
import { auth, db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

export const ChatInput = ({ channelId, channelName }) => {

    const [inputChat, setInputChat] = useState('');
    const [ user ] = useAuthState(auth);
  
  const sendMessage = async e => {
    e.preventDefault();
    
    if ( !channelId ) {
        return false
    }

    await addDoc(collection(db, 'rooms', channelId, 'messages'), {
        message:    inputChat,
        timestamp:  serverTimestamp(),
        user:       user?.displayName ,
        userImage:  user?.photoURL
    })

    console.info(channelId, inputChat);

    setInputChat('');
  };
  
    return (
    <ChatInputContainer>
        
        <form>
            <input value = { inputChat } onChange={ (e) => setInputChat(e.target.value) } placeholder = { `Message #${channelName}` } />
            <Button hidden type='submit' onClick={ sendMessage } >
                Send
            </Button>
            
        </form>

    </ChatInputContainer>
  )
}

const ChatInputContainer = styled.div`
    border-radius: 20px;
    
    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        border: 1px solid gray;
        border-radius: 4px;
        bottom: 30px;
        width: 60%;
        padding: 15px;
        outline: none;
    }

    > form > button {
        position: fixed;
        bottom: 35px;
        right: 50px;
        display: none;
    }
`;