import React,{useState} from "react";
import { Box, Stack } from '@chakra-ui/react'
import { Button } from "@chakra-ui/button"
import { Link } from "react-router-dom"









const Navbar = () => {

    let loginData =  JSON.parse(localStorage.getItem('user')) || [];
let newAuth = JSON.parse(localStorage.getItem('auth')) || false;
let [auth, setAuth] = useState(newAuth);

const handleLogout = () => {
    localStorage.setItem('auth',false); 
    setAuth(false);
    window.location.href = '/';
}

    return (<>
        <Box bg='#172c50' w='100%' m='auto' p={4} pl={10} pr={10} color='white' style={{display : 'flex', justifyContent : 'space-between'}} >

                <Link to='/' >
            <Button variant='outline'  m='left'  colorScheme='#fdfcff' size='md'>Home</Button>
                </Link>
            <Stack spacing={10} direction='row' align='center'>
                
                {
                    auth ?
                    <Button onClick={handleLogout} variant='outline'  m='left'colorScheme='#fdfcff' size='md'>Logout</Button>
                    :
                    <Link to='/login' >
                    <Button variant='outline'  m='left'colorScheme='#fdfcff' size='md'>Login</Button>
                </Link>  
                } 
                {
                   auth ? "" :
                    <Link to='/signup' >
                    <Button variant='outline' m='left' colorScheme='#fdfcff' size='md'>Sign Up</Button>
                </Link> 
                
                }
                
            </Stack>

        </Box>
    </>)
}

export default Navbar;