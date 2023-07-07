import React from 'react';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { styled } from 'styled-components';
import { Chat } from './components/Chat';
import { auth } from './firebase';
import Login from './components/Login';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {

  const [ user ] = useAuthState(auth);

  return (
    <div className="app">
      
      <Router>
        {
          !user ? (
            <Login />
          ) : (
            <>
              <Header />

              <AppBody>
                <Sidebar />
                <Routes>
                  {/* <Route path='/' element={ <Header /> }  exact /> */}
                    <Route path='/' element={ <Chat /> }  exact>
                  </Route>
                </Routes>
              </AppBody>
            </>
          )
        }
      </Router>

    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;