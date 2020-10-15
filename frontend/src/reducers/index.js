import {combineReducers} from 'redux'

const defaultState = {
   loggedIn: false,
   user: {}
}

const userReducer = (state = defaultState, action) => {
   switch(action.type){
       case "LOGIN_SUCCESS":
           return {
               loggedIn: true,
               user: {...action.payload}
           }
       case "LOGOUT":
           localStorage.clear()
           return {
               loggedIn: false,
               user: {}
           }
       default: return state
   }
}

// export default userReducer
export default combineReducers({user:userReducer});