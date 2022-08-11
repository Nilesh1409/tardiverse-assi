import React, { useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
// import { FaUserAlt, FaLock } from "react-icons/fa";

// const CFaUserAlt = chakra(FaUserAlt);
// const CFaLock = chakra(FaLock);


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleShowClick = () => setShowPassword(!showPassword);
    let loginData =  JSON.parse(localStorage.getItem('user')) || [];
    const toast = useToast()
     

   
    const handleSubmit = (e) => {
        e.preventDefault();
        let user = { email, password };
       
       
       
       loginData.email === email && loginData.password === password ? localStorage.setItem('auth',true) : localStorage.setItem('auth',false);
       loginData.email === email && loginData.password === password ? window.location.href = '/' : toast({
        title: `Invalid credentials`,
        status: 'error',
        position: 'top',
        isClosable: true,
      });

    }

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="90vh"
            //   backgroundColor="#e2e8f0"
            bg="#f7fafc"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg="#172c50" />
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form>
                        <Stack
                            spacing={4}
                            p="3rem"
                            pt="6rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                        >
                            <FormControl>
                                <InputGroup>

                                    <Input type="email" placeholder="email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>

                                    <Input
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormHelperText textAlign="right">
                                </FormHelperText>
                            </FormControl>
                            <Button
                            onClick={ (e) => handleSubmit(e)}
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                bg="#172c50"
                                color={"white"}
                                // colorScheme="blue"
                                width="full"
                            >
                                Login
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box>
                New to us?{" "}
                <Link color="teal.500" href="signup">
                    Sign Up
                </Link>
            </Box>
        </Flex>
    );
};




export default Login;