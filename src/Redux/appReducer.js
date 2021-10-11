import { authMeAPI } from "../Api/api";
import { getAuthMeData } from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';



let initialState = {
  isInitialized : false,
  
}

const appReducer = (state = initialState, action) => {
  


    switch(action.type) {
        case SET_INITIALIZED: 
            return {
              ...state,
              isInitialized: true,
              
            }
            
        default:
            return state;
    }
}

export const setInitialized = () => {
    return {
      type: SET_INITIALIZED
      
    };
  }

  export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthMeData());
        promise.then(() => {
          dispatch(setInitialized());
        })
        
      }
 }

 




export default appReducer;