import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './HomePage'
import ProductsPage from './ProductsPage'
import SearchPage from './SearchPage'

const AllRoute = () => {
  
  return (
    <div>
         <Box>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/products/:id" element={<ProductsPage/>}/>
    <Route path="/search" element={<SearchPage/>}/>
   </Routes>
   </Box>
    </div>
  )
}

export default AllRoute