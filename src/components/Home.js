import React from 'react'
import Nav from './Nav';
import flutterImg from '../images/Flutter.png';
import javaImg from '../images/Java.png';
import nodeImg from '../images/NodeJs.png';
import styled from 'styled-components';
import {Button} from '../styles/Shares';

const FlexDiv = styled.div`
   background-color:${(props) => props.theme.colors.primary};
   display:flex;
   padding:0 20px;
   align-items:center;
`
const Flex = styled.div`
   flex:1;
   display:flex;
   flex-direction:column;
   padding:20px;
   justify-content:center;
   align-items:center;
`

export default function Home() {
   return (
      <>
         <Nav />
         <FlexDiv>
            <Flex>
               <h1>Brighter Myanmar</h1>
               <h4 style={{ marginTop: "10px" }}>Professional Computer Programming Class</h4>
               <Button>Download Apk</Button>
            </Flex>
            <Flex>
               <img src={flutterImg} alt="ads" width="80%" />
            </Flex>
         </FlexDiv>
         <FlexDiv>
            <Flex>
               <img src={javaImg} alt="ads" width="80%" />
            </Flex>
            <Flex>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro id repudiandae veritatis aliquam impedit reprehenderit ducimus nobis a sint neque excepturi amet libero nihil, at quia, tempore earum error itaque.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro id repudiandae
               </p>
            </Flex>
         </FlexDiv>
         <FlexDiv>
            <Flex>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro id repudiandae veritatis aliquam impedit reprehenderit ducimus nobis a sint neque excepturi amet libero nihil, at quia, tempore earum error itaque.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro id repudiandae
               </p>
            </Flex>
            <Flex>
               <img src={nodeImg} alt="ads" width="80%" />

            </Flex>
         </FlexDiv>
      </>
   )
}
