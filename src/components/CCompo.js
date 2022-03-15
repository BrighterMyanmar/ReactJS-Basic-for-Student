import React, { useContext } from 'react';
import { TitleContext } from './TestContext';

export default function CCompo() {
   const { title, changeTitle } = useContext(TitleContext);
   return (
      <>
         <h1>C Component Title : {title}</h1>
         <strong></strong>
         <button onClick={changeTitle}>C Compo Change Title</button>
      </>
   )
}
