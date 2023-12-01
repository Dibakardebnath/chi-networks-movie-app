import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const hashPassword = (password) => {
  // In a real-world scenario, use a secure hashing algorithm
  return btoa(password); // Base64 encoding as a simple example
};

export const Register = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError(''); // Clear any previous error messages when toggling modes
    setUser({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }); // Reset form values
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && user.password !== user.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (isLogin) {
      // Handle login
      // Check if the user exists in localStorage
      const storedUser = JSON.parse(localStorage.getItem("login"));
      if (storedUser && storedUser.email === user.email && storedUser.password === hashPassword(user.password)) {
        localStorage.setItem('logged', JSON.stringify(storedUser.email))
        navigate("/"); // Redirect to  after successful login
      } else {
        setError('Invalid email or password.');
      }
    } else {
      // Handle registration
      // Hash the password before storing it in localStorage
      localStorage.setItem("login", JSON.stringify({ ...user, password: hashPassword(user.password) }));
      navigate("/register"); // Redirect to  after successful registration
      setIsLogin(true);
    }
  };

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
              <Input
                type="text"
                name="name"
                value={user.name}
                onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
              />
            </FormControl>
          )}

          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
            />
          </FormControl>

          {!isLogin && (
            <FormControl id="confirmPassword" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
              />
            </FormControl>
          )}

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <Button type="submit" colorScheme={isLogin ? 'green' : 'green'}>
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
