import React, { useState, useContext } from 'react';
import CCompo from './CCompo';
import { TitleContext } from './TestContext';

export default function BCompo() {
   const { title, changeTitle } = useContext(TitleContext);
   return (
      <>
         <h1>B Component Title : {title}</h1>
         <button onClick={changeTitle}>Change Title</button>
         <CCompo />
      </>
   )
}
