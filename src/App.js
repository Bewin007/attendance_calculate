import React, {useState} from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import {
  Stack,
  Input,
  Button,
} from '@chakra-ui/react'

function App() {
  const [total,setData] = useState(null)
  const [absent, setabsent] = useState(null)
  const [final, setfinal] = useState(null)
  const [need ,setneed] = useState(null)
  const [bunk, setbunk] = useState(null)
  
  const click=() =>{
    setfinal((absent/total)*100)

    if (final<80){
      setneed(((80-absent)/100)-total )
    }
    else{
      setbunk(((80-total)/100)*absent)
    }

  }

  const Total =event=>{
    setData(event.target.value)
  }

  const Absent = eve =>{
    setabsent(eve.target.value)
  }
  
  return (
    <ChakraProvider theme={theme} >
      <h1 >Attendance percent cal</h1>
      <Stack spacing={3} m={5}>
        <Input placeholder='Enter the total working hour' onChange={Total} size='lg' />
        <Input placeholder='Enter the present hour' id='present_hour' onChange={Absent} size='lg' />
        <Button colorScheme='blue' onClick={click} >Button</Button>
        <h1>you have: {final}</h1>
        
        <h1>hj{need}</h1>
        <h1>{bunk}</h1>
       
      </Stack>


      
      
    </ChakraProvider>
    
  );
}

export default App;
