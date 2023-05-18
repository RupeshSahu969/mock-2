import { Box, SimpleGrid } from '@chakra-ui/react';

import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';

import Navbar from '../Componets/Navbar';

import { useDispatch, useSelector } from 'react-redux';

import { getData } from '../Redux/actionCreator';

const HomePage = () => {

  const [data,setData]=useState([]);

  const navigate=useNavigate();

  const product=useSelector((state) => state.product)

const dispatch=useDispatch()

  useEffect(()=>{
    
    if(product.length === 0)
    {
      dispatch(getData())
    }

  },[]);
  
  var dataCategory = JSON.parse(localStorage.getItem("category"))||[]

  function handleClick(item){
    dataCategory.push(item)
           localStorage.setItem("category",JSON.stringify(dataCategory));
    navigate(`/products/${item}`)
  }


  return (
    <Box>
      <Navbar/>
      <SimpleGrid columns={3} spacing={5}>
      {
        product.map((item)=>{
          return <Box boxShadow="2xl" key={item} onClick={()=>handleClick(item)}
           w="60%" m="auto" marginTop="30px"  h="50px">{item}</Box>

        })
      }
       </SimpleGrid>
    </Box>
  )
}

export default HomePage
