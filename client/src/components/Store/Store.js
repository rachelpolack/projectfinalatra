import { createStore } from 'redux'
import produce from 'immer'

const initialState = {
    user: {
        name: "",
        password: "",
        mobile: ""
    },
    identifiedUser:{
        nameUser:"",
        passwordUser:"",
        tasks:[]
    }

}
const reducer = produce((state, action) => {
    switch (action.type) {
        case "SET_FIRST_NAME":
            state.user.name = action.payload
            break;
        case "SET_PASSWORD":
            state.user.password = action.payload
            break;
        
        case "SET_MOBILE":
            state.user.mobile = action.payload
            break;
        // case "CREATE":
        //     return [...state.user,action.payload]
        //     break;
        case "SET_FIRST_NAME_USER":
            state.identifiedUser.nameUser = action.payload
            break;
        case "SET_PASSWORD_USER":
         state.identifiedUser.passwordUser = action.payload
            break;
        case "SET_TASKS":
         state.identifiedUser.tasks = action.payload
            break;
            default:
                return ;

        

        


    }
}, initialState)


const store = createStore(reducer);
window.store = store;
export default store;




