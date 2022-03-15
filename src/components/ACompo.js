import React,{useContext} from 'react';
import { TitleContext } from './TestContext';


export default function ACompo() {
   const {title} = useContext(TitleContext);

   return (
      <>
         <h1>A component Title : {title}</h1>
         <strong></strong>
      </>
   )
}