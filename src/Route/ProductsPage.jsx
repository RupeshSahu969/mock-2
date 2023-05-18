import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Componets/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../Redux/actionCreator";


const getProductDatas = ({id}) => {
  return fetch(`https://dummyjson.com/products/category/${id}`).then((res) =>
    res.json()
  );
};

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);

  const product=useSelector((state) => state.product)
  const dispatch=useDispatch()
    useEffect(()=>{
      
      if(product.length === 0)
      {
        dispatch(getProductData({id}))
       
      }
  
    },[]);

  useEffect(() => {
    getProductDatas({id})
    .then((res) => {
      
      console.log(res);
      setData(res.products);
    });
  }, [id]);
  return (
    <Box>
      <Navbar/>
      <SimpleGrid columns={3} spacing={5}>
      {
        data.map((item)=>{
          return <Box key={item.id} w="80%" m="auto" marginTop="20px"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          >
            <Image  w="100%" h="50%" src={item.images[1]}  />
            <Box mt="5" p="1" >
            <Text fontSize="2xl">{item.title}</Text>
            <Text textAlign={"center"}>{item.description}</Text>
            <Text textAlign={"center"}>Item Price:{item.price}</Text>
            </Box>
          </Box>
        })
      }
      </SimpleGrid>
    </Box>
  );
};



export default ProductsPage;
