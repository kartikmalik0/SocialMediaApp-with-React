import { Button, Flex } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { DASHBOARD } from "../../lib/routes"
import { useLogout } from "../../hooks/auth"
const Navbar = () => {
    const {Logout,isLoading} = useLogout()
  return (
    <Flex shadow={'sm'} pos={'fixed'} width={'full'} borderTop={'6px solid'} borderTopColor={'teal.400'} height={'16'} zIndex={'13'} justify={'center'} bg={'white'}> 
          <Flex px={4} w={'full'} align={'center'} maxW={'1200px'}>
              <Link as={RouterLink} to={DASHBOARD} color={'teal'} fontWeight={'bold'}>
                  Home
              </Link>
              <Button ml={'auto'} colorScheme="teal" size={'sm'} onClick={Logout} isLoading={isLoading}>
               
                  LogOut
              </Button>
          </Flex>
    </Flex>
  )
}

export default Navbar
