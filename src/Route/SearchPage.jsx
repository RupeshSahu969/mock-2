import { Box, Button, Container, Image, Input, SimpleGrid, Text } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'


import Navbar from '../Componets/Navbar';

import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '../Redux/actionCreator';


const SearchPage = () => {
  const [data, setData] = useState([]);

  const [query,setQuery]=useState(null);

  console.log(query)

  const product=useSelector((state) => state.product)

const dispatch=useDispatch()

  function getSearch(){
    fetch(`https://dummyjson.com/products/search?q=${query}`)
    .then((res) =>
    res.json()
  )
    
    .then((res)=>{
      setData(res.products)
      console.log(res);
    });
   
  }

  useEffect(()=>{
    getSearch()
    
  },[]);
 


  function handleClick(){
    getSearch(query)
    
  }

  return (
    <Box >
      <Navbar/>
      <Box w="60%" m="auto" marginTop="20px" display="flex">
      <Box  w="40%" marginLeft="180px">
      <Input
        value={query}
        type="text"
        
        onChange={(e) => setQuery(e.target.value)}
        placeholder="SEARCH"
       />
       </Box>
       <Box>
      <Button onClick={handleClick} colorScheme="blue">
        Search
      </Button>
      </Box>
    </Box>
      <SimpleGrid columns={3} spacing={10}>
      {
        data.map((item)=>{
          return <Box key={item.id} w="80%" m="auto" marginTop="20px">
            <Image src={item.images[1]} w="100%"/>
            <Text fontSize="3xl">{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>Item Price:{item.price}</Text>

          </Box>
        })
      }
      </SimpleGrid>
     
    </Box>
  )
}

export default SearchPage
