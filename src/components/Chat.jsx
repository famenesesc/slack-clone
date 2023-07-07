import React from 'react';
import { styled } from 'styled-components';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import { ChatInput } from './ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import { collection, doc, orderBy, query } from 'firebase/firestore';
import { Message } from './Message';

export const Chat = () => {

    const roomId = useSelector(selectRoomId);
    const [ roomDetails ] = useDocument(
        
        roomId && doc(db, 'rooms', roomId)
        // roomId && db.collection('rooms').doc(roomId)
            
            );

    const [ roomMessages ] = useCollection(

        // roomId && collection(db, 'rooms', roomId, 'messages', '')
        roomId && query(collection(db, 'rooms', roomId, 'messages'), orderBy('timestamp', 'asc'))

    )

    const roomName = roomDetails?.data().name;

  return (
    <ChatContainer>
        <>
            <Header>
                <HeaderLeft >
                    <h4> <strong>#{ roomName }</strong> </h4>
                    <StarBorderIcon />
                </HeaderLeft>

                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </HeaderRight>
            </Header>

            <ChatMessages>
                    {
                        roomMessages?.docs.map(doc => {
                            const { message, timestamp, user, userImage } = doc.data();

                            return (
                                <Message
                                    key = { doc.id }
                                    message = { message }
                                    timestamp = { timestamp }
                                    user = { user }
                                    userImage = { userImage }
                                />
                            )
                        })
                    }
            </ChatMessages>

            <ChatInput 
                channelId = { roomId }
                channelName = { roomName }
            />
        
        </>
    </ChatContainer>
  )
}

const ChatContainer = styled.div`
    border: 3px solid red;
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 48px;
`;

const Header = styled.div`
    /* border: 1px dotted yellowgreen; */
    
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
    /* border: 1px dashed green; */

    display: flex;
    align-items: center;
    
    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

    > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
`;

const HeaderRight = styled.div`
    /* border: 1px dashed purple; */

    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }
`;

const ChatMessages = styled.div`

`;