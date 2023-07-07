import React from 'react'
import { styled } from 'styled-components'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useDispatch } from 'react-redux'
import { enterRoom } from '../features/appSlice'

export const SidebarOption = ( { MyIcon, title, addChannelOption, id } ) => {

  const dispatch = useDispatch();
  
  const addChannel = async ( ) => {

    const channelName = prompt('Enter the channel name');

    if (channelName) {

      await addDoc(collection(db, 'rooms'), {
        name: channelName
      })

    }

  };

  const selectChannel = ( ) => {

    if ( id ) {
      dispatch(enterRoom({ roomId: id }))
    }

  };


  return (
    <SideBarOptionContainer
      onClick={ addChannelOption ? addChannel : selectChannel }
    >
      <SidebarContent>
        { 
         MyIcon && <MyIcon fontSize="small" style={{padding: 10}} /> 
        }
        
        {
          MyIcon ? (
            <h3>{ title }</h3>
            ) : (
              <SideBarOptionChannel>
              <span>#</span> { title }
            </SideBarOptionChannel>
          )
        }
      </SidebarContent>
    </SideBarOptionContainer>
  )
}

const SidebarContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const SideBarOptionContainer = styled.div`
  font-size: 12px;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #2d0c2f;
  }
`;

const SideBarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;

  > span {
    padding: 15px;
    pointer-events: none;
  }
`;