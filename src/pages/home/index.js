// import React,{Component} from "react"
// import { Empty } from 'antd';

// class Home extends Component{
//     render(){
//         return (
//             // <div>Home</div>
//             <Empty />
//         )
//     }
// }
// export default Home


import React, { useState } from "react"
import { Form, Input, Button, Modal } from 'antd';
import ReactJson from 'react-json-view'
import ModifyForm from "./modifyForm";
import styles from "./index.scss";

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 12,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 2,
        span: 4,
    },
};



const Home = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [jsonData, setJsonVal] = useState({});

    const onFinish = (data) => {
        setJsonVal(JSON.parse(data.textArea))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const onprophide = () => {
        setIsModalVisible(false)
    }
    return (
        <div>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="事件名称"
                    name="eventName"
                    initialValue={"事件名称"}
                >
                    <Input disabled className={styles.input} />
                </Form.Item>
                <Form.Item
                    label="事件中文名称"
                    name="eventHzName"
                    initialValue={"事件中文名称"}
                >
                    <Input disabled className={styles.input} />
                </Form.Item>
                <Form.Item
                    label="富文本"
                    name="textArea"
                    rules={[
                        {
                            required: true,
                            message: '请输入内容',
                        },
                    ]}
                    initialValue={JSON.stringify({d:1})}
                >
                    <Input.TextArea/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" style={{ marginRight: "10px" }}>
                        测试
                    </Button>
                    <Button type="primary" onClick={() => { setIsModalVisible(true) }}>
                        提交
                    </Button>
                </Form.Item>
            </Form>
            <ReactJson
                    src={jsonData} 
                    name={null}
                    collapsed={2} 
                    theme={"monokai"}
                    style={{textAlign:"left",paddingLeft:"10px"}}
                    // enableClipboard={false}
            />
             <Modal title="事件发布" visible={isModalVisible}
                onCancel={handleCancel}

                footer={null}
            >
                <ModifyForm data={"父组件传值"} onprophide={onprophide} />
            </Modal>
        </div>

    );
};

export default Home;
