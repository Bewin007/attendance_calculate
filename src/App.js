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
  Card,
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
  const [ operation, setoperation] = useState(null)
  const [string,setString] = useState(null)
  const [eligible,setEligible] = useState(null)
  
  const percent=() =>{
    let temp = (Math.round((absent/total)*100))
    setfinal(temp)
    console.log(final)

    if (final>80){
      let t = (Math.abs((80- absent) * (total/100)))
      setString("You are eligible to write the exam." )
      setEligible("Attendance percentage of " + final)
      setoperation("You can bunk "+t+" of classes")
    }
    else{
      let t =(Math.abs((0.8*total)-absent))
      setString("You are not elgible to write exam.")
      setEligible("Attendance percentage of " + final)
      setoperation("You need to attend "+t+" of classes")
    }

    console.log(operation)
  }

  const Total =event=>{
    setData(event.target.value)
  }

  const Absent = eve =>{
    setabsent(eve.target.value)
  }
  
  return (
    <ChakraProvider theme={theme} >
      <Card margin={100} p={20} justifyContent={'center'} >
      <Stack spacing={3} m={5}>
        <Input placeholder='Enter the total working hour' onChange={Total} size='lg' />
        <Input placeholder='Enter the present hour' id='present_hour' onChange={Absent} size='lg' />
        <Button colorScheme='blue' onClick={percent} >percent</Button>

        <Text>{string}</Text>
        <Text>{operation}</Text>
        <Text>{eligible}</Text>
      </Stack>
      </Card>
    </ChakraProvider>
    
  );
}
export default App;
