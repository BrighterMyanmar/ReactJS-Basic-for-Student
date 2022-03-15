import React, { useState } from 'react';
import ACompo from './components/ACompo';
import BCompo from './components/BCompo';
import TitleContextProvider from './components/TestContext';

const H1_STYLE = {
   color: "red",
   fontWeight: "bold"
}

function App() {
   return (
      <TitleContextProvider>
         <div className="container">
            <h1 style={H1_STYLE}>Context Api</h1>
            <ACompo />
            <BCompo />
         </div>
      </TitleContextProvider>

   );
}

export default App;
