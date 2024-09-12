

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import CartWidget from '../CartWidget/CartWidget'





const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>...</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} alignItems={'center'}>

              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Link fontSize={20}>Inicio</Link>
              <Link fontSize={20}>Sobre mi</Link>
              <Link fontSize={20}>Ubicacion</Link>
              <CartWidget/> 

              
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
export default NavBar