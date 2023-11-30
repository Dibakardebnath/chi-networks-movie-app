

import {  Box, Button, Heading, Image } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import './Nav.css'

export const Nav=()=>{
    
    return <nav>
       <Box className="logo">
        <Image borderRadius='full'
       boxSize='50px'
       src='https://bit.ly/dan-abramov'
       alt='Dan Abramov'></Image>
       <Heading size={'lg'}>Movie</Heading>
         </Box>
      <ul>
        <li><NavLink to={'/'} className="link">Home</NavLink></li>
        <li> <NavLink to={'/favourite'} className="link">Favourite</NavLink></li>
        <li> <NavLink to={'/About'} className="link">About</NavLink></li>
        <input type="text" id="searchInput" placeholder="Search..."/>
        <button>Search</button>
      </ul>
    <Box className="single-Li">
    <li> <NavLink to={'/register'} className="link">Register</NavLink></li>
    </Box>

    </nav>
}
