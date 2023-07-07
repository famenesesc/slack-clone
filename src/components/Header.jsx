import React from 'react'
import styled from '@emotion/styled'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

export const Header = () => {
  
  const [ user ] = useAuthState(auth);
  
  console.log(user?.photoURL);

  return (
    <HeaderContainer>

      <HeaderLeft>
        <HeaderAvatar>
        <img
          onClick={ () => auth.signOut() }
          alt = { user?.displayName }
          src = { user?.photoURL }
          /> 
        </HeaderAvatar>
          { user?.displayName }

        <AccessTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon/>
        <input type="text" name="" id="" placeholder='Search...'/>
      </HeaderSearch>

      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>

    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  /* border: 1px solid red; */
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

// const HeaderAvatar = styled(AccountBoxIcon).img`
const HeaderAvatar = styled.div`
display: flex;
  cursor: pointer;
  border: 1px solid red;
  border-radius: 100%;
  margin-right: 20px;
  
  > img {
    height: 40px;
    border-radius: 100%;
  }

  :hover {
    opacity: 0.5;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #442446;
  text-align: center;
  display: flex;
  padding: 0 50px;
  border: 1px solid gray;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;

const HeaderRight = styled.div`
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;