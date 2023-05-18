import React from 'react'
import { Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./nav.css"
const Navbar = () => {
  return (
    <div>
    <Box >
      
      <Box id="navbar-container">
        <Link to={"/"}>Navbar</Link>
        <Link to={"/search"}>Search</Link>
      </Box>
    </Box>
    
    </div>
  )
}

export default Navbar