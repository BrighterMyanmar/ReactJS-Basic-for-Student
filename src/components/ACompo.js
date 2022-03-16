import React from 'react';
import { useTitleContext } from './TestContext';


export default function ACompo() {
   const {title} = useTitleContext()

   return (
      <>
         <h1>A component Title : {title}</h1>
         <strong></strong>
      </>
   )
}
