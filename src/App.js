import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalCSS } from './styles/GlobalCSS';
import { Container } from './styles/Shares';
import Home from './components/Home';
import Login from './components/Login';
import LoginContextProvider from './store/LoginContextApi';
import RouteGurad from './helpers/RouteGuard';

const theme = {
   colors: {
      primary: "aliceblue"
   }
}

function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalCSS />
         <Container>
            <LoginContextProvider>
               <Router>
                  <Routes>
                     <Route path="/" element={<Login />} />
                     <Route path="/home" element={
                        <RouteGurad>
                           <Home />
                        </RouteGurad>
                     } />
                  </Routes>
               </Router>
            </LoginContextProvider>
         </Container>
      </ThemeProvider>
   );
}

export default App;
