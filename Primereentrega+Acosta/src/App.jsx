import React from 'react'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <ItemListContainer greeting = {'asd'}></ItemListContainer>
    
    </ChakraProvider>
  )
}

export default App
