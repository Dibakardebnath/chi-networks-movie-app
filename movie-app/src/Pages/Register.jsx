
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Heading } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import './Register.css'



export const Register = () => {
 
  const navigate=useNavigate()
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit=()=>{
    let log=JSON.parse(localStorage.getItem("login")) || [];
      if(isLogin && log){
        localStorage.setItem("login", JSON.stringify(user))
        navigate("/")
      }
  }
   

  return (
    <Box className='mainBox' border={'1px solid'}>
      <Heading as="h1" size="xl" mb={4}>
        {isLogin ? 'Login' : 'Signup'}
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {!isLogin && (
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" value={user.name} onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
            </FormControl>
          )}

          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" name="email" value={user.email} onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" value={user.password} onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
          </FormControl>

          <Button type="submit"  colorScheme={isLogin ? 'green' : 'green'}>
            {isLogin ? 'Login' : 'Signup'}
          </Button>
        </Stack>
      </form>

      <Button mt={4} colorScheme="teal" variant="solid" onClick={toggleAuthMode}>
        {isLogin ? 'Switch to Signup' : 'Switch to Login'}
      </Button>
    </Box>
  );
};


