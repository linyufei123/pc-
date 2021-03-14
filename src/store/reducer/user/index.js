import {handleActions} from "redux-actions";
import Cookies from "js-cookie";

const defaultState = {
    token:Cookies.get("token")||"未登录",
}

export default handleActions({
    login_action:(state,action)=>{

        let newUserState = Object.assign({},state);
        
        newUserState.username = action.payload.username;
        
        Cookies.set("token",action.payload.username);

        return newUserState;
    }
},defaultState)