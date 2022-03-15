import React, { useState, createContext } from 'react';

export const TitleContext = createContext();

function TitleContextProvider(props) {
   const [title, setTitle] = useState("Testing");

   const changeTitle = () => {
      let dd = "Testing " + Math.ceil(Math.random(0, 1) * 1000);
      setTitle(dd);
   }

   const data = { title, changeTitle };

   return (
      <TitleContext.Provider value={data}>
         {props.children}
      </TitleContext.Provider>
   );
}

export default TitleContextProvider;
