

import {  Box, Button, Heading, Image } from "@chakra-ui/react"
import { NavLink, useNavigate } from "react-router-dom"
import './Nav.css'

export const Nav=()=>{
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // Replace 'your-homepage-url' with the actual URL of your home page
    navigate('/');
  };
    return <nav>
       <Box className="logo" onClick={handleLogoClick}>
        <Image borderRadius='full'
       boxSize='50px'
       src='https://cdn-icons-png.flaticon.com/512/3698/3698776.png'
       alt='Dan Abramov'></Image>
       <Heading size={'lg'}>Movie</Heading>
         </Box>
      <ul>
        <li><NavLink to={'/'} className="link">Home</NavLink></li>
        <li> <NavLink to={'/favourite'} className="link">Favourite</NavLink></li>
        <input type="text" id="searchInput" placeholder="Search..."/>
        <button>Search</button>
      </ul>
    <Box className="single-Li">
    <li> <NavLink to={'/register'} className="link">Register</NavLink></li>
    </Box>

    </nav>
}
