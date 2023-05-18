
import * as types from "./actionTypes";
import axios from "axios";

export const fetchData=(payload)=>(dispatch)=>{
    
  dispatch({type:types.GET_REQUEST});
   axios.get(payload)
  .then((res)=>{
      
      dispatch({type:types.GET_SUCCESS,payload:res.data});
  })
  .catch((err)=>{
  
      dispatch({type:types.GET_FAILURE,payload:err});

  })

}


export const getData=(params)=>(dispatch)=>{
    
    dispatch({type:types.GET_REQUEST});
    return axios.get("https://dummyjson.com/products/categories",params)
    .then((res)=>{
        
        dispatch({type:types.GET_SUCCESS,payload:res.data});
    })
    .catch((err)=>{
    
        dispatch({type:types.GET_FAILURE,payload:err});

    })

}


export const getProductData=(id)=>(dispatch)=>{
    
  dispatch({type:types.GET_PRODUCT_REQUEST});
  return axios.get(`https://dummyjson.com/products/category/${id}`)
  .then((res)=>{
      
      dispatch({type:types.GET_PRODUCT_SUCCESS,payload:res.data});
  })
  .catch((err)=>{
  
      dispatch({type:types.GET_PRODUCT_FAILURE,payload:err});

  })

}




  
 

