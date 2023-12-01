import React, { useState } from "react";
import { Box, Button, Heading, Icon, Image, Input, VStack, useDisclosure } from "@chakra-ui/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaToriiGate, FaUser, FaSignOutAlt, FaFontAwesome } from 'react-icons/fa'; // Import the icons
import "./Nav.css";
import { useDispatch } from "react-redux"
import { GetSearchVal } from "../Redux/Action";

export const Nav = () => {
  const dispath=useDispatch()
  const [inpVal,setInputVal]=useState("");
  const navigate = useNavigate();
  const name = JSON.parse(localStorage.getItem("logged"));
  const username = name ? name.split('@')[0] : null;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("logged");
    navigate("/register");
  };

  const handleInputChange = (event) => {
    setInputVal(event.target.value);
  };

  const handleButtonClick = () => {
    dispath(GetSearchVal(inpVal))
  };


  return (
    <Box
      as="nav"
      bg="#292B2C"
      color="white"
      p={['2', '4']}
      display={["flex", "flex"]}
      justifyContent="space-between"
      alignItems="center"
    >

      <Box
        className="logo"
        onClick={handleLogoClick}
        alignItems="center"
        display={['none', 'flex']}
      >
        <Image
          borderRadius="full"
          boxSize="50px"
          src="https://cdn-icons-png.flaticon.com/512/3698/3698776.png"
          alt="Movie Logo"
        />
        <Heading size="lg" ml={2}>
          Movie
        </Heading>
      </Box>
      <Box display={["none", "flex"]}>
        <ul style={{ listStyleType: "none", display: "flex", alignItems: "center" }}>
          <li>
            <NavLink  to={"/"} className="link" mx={2}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/favourite"} className="link" mx={2}>
              Favourite
            </NavLink>
          </li>
          <li>
            <Input value={inpVal} 
               onChange={handleInputChange} type="text" id="searchInput" placeholder="Search..." />
          </li>&nbsp;
          <li>
            <Button bg="yellow.300"  onClick={handleButtonClick}>Search</Button>
          </li>
        </ul>
      </Box>
      <Button
        display={{ base: 'block', md: 'none' }}
        onClick={isOpen ? onClose : onOpen}
        ml={3}
        id='mob_menue_nav'
        variant="outline"
        backgroundColor="yellow.300"
        color={'black'}
      >
        Menu
      </Button>
      <Box className="single-Li" display={["none", "flex"]}>
        {name ? (
          <li>
            <Button variant="link" color={'white'} onClick={handleLogout}>
              <Icon as={FaSignOutAlt} />  Logout
              &nbsp; <Box
                display={{ base: "none", md: "block" }}
                ml={1}
                fontWeight="bold"
                color="yellow.300"
              >
                {username}
              </Box>
            </Button>
          </li>
        ) : (
          <li>
            <NavLink to={"/register"} className="link">
              Register
            </NavLink>
          </li>
        )}
      </Box>

      {/* Mobile Menu */}
      {isOpen && (
        <Box id="mob_nav" color={'white'} mt={4}>


          <VStack overflow={'auto'} alignItems="center">
            <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'600'} to="/">
              Home
            </Box>
            <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'600'} to="/favourite">
              Favourite
            </Box>
            <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'600'} to="/register">
              Register
            </Box>

            {name && (
              <Box>
                <Button variant="link" id="nav_li" color='white' onClick={handleLogout}>
                  <Icon as={FaSignOutAlt} ml={2} />  Logout
                </Button>
                <Box mt={"10px"}>
                  {username}
                </Box>
              </Box>
            )}
          </VStack>
        </Box>
      )}
    </Box>
  );
};
