import React, { useState } from "react";
import { Form, Input, Button, Radio ,message } from "antd"
import styles from "./index.scss"

const ModifyForm = (props) => {
    const onFinish = (data)=>{
        console.log("data-->",data)
        message.success("提交成功")
        props.onprophide()
    }
    return (
        <Form
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                label="事件名称"
                name="eventName"
                initialValue={props.data}
            >
               <Input disabled className={styles.input}/>
            </Form.Item>

            <Form.Item
                label="发布环境"
                name="releaseMent"
                initialValue="preMent"
            >
                <Radio.Group>
                    <Radio value={"preMent"} >预发</Radio>
                    <Radio value={"onlineMent"}>线上</Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    提交发布
                </Button>
            </Form.Item>
        </Form>
    )
}
export default ModifyForm;