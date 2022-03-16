import React, { useState} from 'react';
import CCompo from './CCompo';
import { useTitleContext } from './TestContext';

export default function BCompo() {
   const { title, changeTitle } = useTitleContext();
   return (
      <>
         <h1>B Component Title : {title}</h1>
         <button onClick={changeTitle}>Change Title</button>
         <CCompo />
      </>
   )
}
