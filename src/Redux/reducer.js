import * as types from "./actionTypes";

const initialState={
    product:[],
    isLoading:false,
    isError:false
}

const reducer=(state=initialState,action)=>
{
    const {type,payload}=action;
    
    switch(type){
        case types.GET_REQUEST:
            return {
                ...state,
                isLoading:true
            }
            case types.GET_SUCCESS:
            return {
                ...state,
                isLoading:false,
                product:payload,
                isError:false
            }
            case types.GET_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true,
                product:[],
                
            }
          


        default:
            return state
    }

}

export {reducer};