import { Button } from '@mui/material';
import React from 'react'
import { styled } from 'styled-components';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {

    const signIn = e => {
        e.preventDefault();
        signInWithPopup(auth, provider).catch((err) => alert(err.message));
    }

  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src="https://ih1.redbubble.net/image.1199981559.2836/pp,840x830-pad,1000x1000,f8f8f8.jpg" alt="" />
            <h1>Sign in to Slack Clone</h1>
            <p>slack.clone.com</p>
            <Button onClick={ signIn } >
                Sign in with Google
            </Button>
        </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login;

const LoginContainer = styled.div`
    background-color:  #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInnerContainer = styled.div`
    padding: 70px;
    text-align: center;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #889a0e !important;
        color: white;
        cursor: pointer;

        :hover {
            background-color: #bacf34;
            color: gray;
        }
    }
`;