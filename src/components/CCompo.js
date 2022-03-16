import React from 'react';
import { useTitleContext } from './TestContext';

export default function CCompo() {
   const { title, changeTitle } = useTitleContext();
   return (
      <>
         <h1>C Component Title : {title}</h1>
         <strong></strong>
         <button onClick={changeTitle}>C Compo Change Title</button>
      </>
   )
}
