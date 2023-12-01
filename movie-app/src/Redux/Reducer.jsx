import { GET_SEARCH } from "./ActionType"


const initialState={
    searchVal:""
}

export const Reducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case GET_SEARCH:{
            return {...state,searchVal: payload}
        }
    
        default : return state
    }
   
}