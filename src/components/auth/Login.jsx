import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input,Link ,Text} from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { DASHBOARD, REGISTER } from "../../lib/routes"
import { useLogin } from "../../hooks/auth"
import { useForm } from "react-hook-form"
import { emailValidate, passwordValidate } from "../../utils/form-validation"



const Login = () => {
    // i am using use form and all the function in handle submit is provide by useForm like data object and reset function
    const {register,handleSubmit,reset,formState:{errors}} = useForm()
    const { Login, isLoading } = useLogin()
    


    async function handleLogin(data) {
       const succeeded =  await Login({
            email: data.email,
            password: data.password,
            redirectTO:DASHBOARD,
        })
       if(succeeded) reset();
    }


  return (
      <Center w={'100%'} h={'100vh'}>
          <Box mx={'1'} maxW={'md'} p={9} borderWidth={'1px'} borderRadius={'lg'}>
              <Heading mb={4} size={'lg'} textAlign={'center'}>
                  Log In
              </Heading>
              <form onSubmit={handleSubmit((data)=>handleLogin(data))}>
                  <FormControl isInvalid={errors.email} py={2}>
                      <FormLabel>Email</FormLabel>
                      <Input type='email' placeholder="user@email.com" {...register('email',emailValidate)} />
                      <FormErrorMessage>{ errors.email && errors.email.message }</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.password} py={2}>
                      <FormLabel>Password</FormLabel>
                      <Input type='password' placeholder="password123" {...register('password',passwordValidate)} />
                      <FormErrorMessage>{ errors.password && errors.password.message }</FormErrorMessage>
                  </FormControl>
                  <Button mt={4} type="submit" colorScheme="teal" size={'md'} w={'full'} isLoading={isLoading} >
                      Log In
                  </Button>
              </form>
              <Text fontSize={'xlg'} align={'center'} mt={6}>
                  Don't have an accout? {" "}
                  <Link as={RouterLink} to={REGISTER} color={'teal.800'} fontWeight={'medium'} textDecor={'underline'} _hover={{background:'teal.100'}}>
                  Register
                </Link>{" "} instead!
              </Text>
          </Box>
      </Center>
  )
}

export default Login
 