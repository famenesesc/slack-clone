import React from 'react'
import { styled } from 'styled-components'
import { SidebarOption } from './SidebarOption';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { db } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection } from 'firebase/firestore'


export const Sidebar = () => {

  const [ channels ] = useCollection(collection(db, 'rooms'));

  return (
    <SidebarContainer>
        
        <SidebarHeader>
            
            <SidebarInfo>
                <h2>User</h2>
                <h3> <FiberManualRecordIcon /> Nando </h3>
            </SidebarInfo>

            <CreateIcon />

        </SidebarHeader>

        <SidebarOption MyIcon={ InsertCommentIcon } title={ "Threads" }  />
        <SidebarOption MyIcon={ InboxIcon } title={ "Mentions & Reactions" }  />
        <SidebarOption MyIcon={ DraftsIcon } title={ "Drafts" }  />
        <SidebarOption MyIcon={ ExpandLessIcon } title={ "Show Less" }  />
        <hr />
        <SidebarOption MyIcon={ ExpandMoreIcon } title={ "Channels" }  />
        <hr />
        <SidebarOption MyIcon={ AddIcon } addChannelOption title={ "Add Channel" }  />
       
        {
          channels?.docs.map((doc) => (
            <SidebarOption 
              key = { doc.id }
              id = { doc.id }
              title = { doc.data().name }
            />
          ))
        }


    </SidebarContainer>
  )
}

// Minuto 1:38:20



const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 250px;
    margin-top: 48px;
    
    > hr {
      margin-top: 10px;
      margin-bottom: 10px;
      border: 1px solid #49274b
    }
`;
const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
      padding: 8px;
      color: #49274b;
      font-size: 18px;
      background-color: white;
      border-radius: 100%;
    }
`;


const SidebarInfo = styled.div`
/* border: 1px solid green; */
    flex: 1;

    > h2 {
      font-size: 15px;
      font-weight: 900;
      margin-bottom: 5px;
    }

    > h3 {
      display: flex;
      font-size: 13px;
      font-weight: 400;
      align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
      font-size: 14px;
      margin-top: 1px;
      margin-right: 2px;
      color: green;
    }
`;