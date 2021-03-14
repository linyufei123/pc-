import React, { Component } from 'react'
import { Form, Input, Button, Checkbox ,message} from "antd"
import UploadImage from "../uploadImage"
import axios from "axios"



class ModifyForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            plainOptions: ["悬疑", "灵异奇谈", "阴间系列", "程序员", "民俗奇谈", "鬼怪",
                "仙侠", "脑洞", "奇遇"],
        }

    }

    render() {
        let { bookCoverLogo, authorName, bookShowName, bookClassName ,id} = this.props.modifyData;

        this.form&&this.handlechange(bookCoverLogo, authorName, bookShowName, bookClassName,id)
        
        return (

            <Form  name="nest-messages"
            ref={form=>this.form = form}
            initialValues={{
                bookCoverLogo:bookCoverLogo,
                bookShowName:bookShowName,
                authorName:authorName,
                bookClassName:bookClassName,
                id:id
            }}
            onFinish={this.onFinish.bind(this)}
             >
                <Form.Item
                 label="书籍封面"
                 name="bookCoverLogo"
                >
                <UploadImage />
                </Form.Item>

                <Form.Item 
                label="作者笔名"
                name="authorName">
                    <Input />
                </Form.Item>
                <Form.Item name="bookShowName" label="书籍名称">
                    <Input />
                </Form.Item>
                <Form.Item name="bookClassName" label="类型">
                    <Input />
                </Form.Item>
                <Form.Item name="id" label="图书id">
                    <Input />
                </Form.Item>
             
                <Button type="primary" htmlType="submit" style={{marginRight:"10px"}}>修改</Button>
                <Button onClick={this.handleCancel.bind(this)} >取消</Button>
              
            </Form>
        )
    }

    //更新form.item的值
    handlechange(bookCoverLogo, authorName, bookShowName, bookClassName){
        this.form.setFieldsValue({
            bookCoverLogo:bookCoverLogo,
               bookShowName:bookShowName,
               authorName:authorName,
               bookClassName:bookClassName
       })
    }

    //提交更新
    async  onFinish(rest){
        const {bookCoverLogo,bookShowName,authorName,bookClassName,id} = rest
        const data = await axios.patch(`/api/bookList/${id}`,{
            bookShowName:bookShowName,
            authorName:authorName,
            bookClassName:bookClassName,
            id:id,
        });

        data&&message.success('更新成功',0.5,()=>{this.props.handleCancel();this.props.handlerefsh()});
        
    }

    //取消隐藏弹框
    handleCancel(){
      this.props.handleCancel()
    }
}


export default ModifyForm;
