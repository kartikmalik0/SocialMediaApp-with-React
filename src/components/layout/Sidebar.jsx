import { Box, Button, Code, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import {  PROTECTED, USERS } from "../../lib/routes"
import { useAuth } from "../../hooks/auth"
import Avatar from "../profile/Avatar"



function ActiveUser() {
    const { user, isloading } = useAuth()
    // console.log(isloading)
    


    if(isloading) return 'loading...'

    return <Stack align={'center'} my={8} spacing={5}>
        <Avatar user={user}/>
        <Code>@{user.username }</Code>
        <Button colorScheme="teal" w={'full'} as={Link} to={`${PROTECTED}/profile/${user?.id}`}>
            Edit Profile
        </Button>
    </Stack>
}

const Sidebar = () => {



  return (
    <Box px={'6'} height={'100vh'} w={"100%"} maxW={'300px'} borderLeft={'1px solid'} borderLeftColor={'teal.100'} position={"sticky"} top={'16'} display={{base:'none',md:'block'}}>
    <ActiveUser/>      
    <Box align={"center"}>
    
          <Box as="ul" borderTop={'2px solid'} borderColor={'teal.200'}>
    <Button as={Link} to={USERS} variant={'outline'} colorScheme="teal"  mt={4} size={'sm'}> 
        All users
    </Button>
          </Box>
          </Box>
    </Box>
  )
}

export default Sidebar
