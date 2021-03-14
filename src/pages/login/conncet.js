
import {LOGIN_ACTION_ASYNC} from "../../actions/user"
import {message} from "antd";

export const mapStateToProps = ()=>({

})

export const mapDispatchToProps = (dispatch)=>({
    async handleLogin(e){
        //可以获取表单中的内容
       let data = await dispatch(LOGIN_ACTION_ASYNC(e))
       
       data&&message.success('登录成功',1.5,()=>{this.history.push("/home")});
        
    }
})

