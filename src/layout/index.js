import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Row, Col } from 'antd';
import renderTabBar from "../utils/renderTabBar"
import { layoutRoute } from "../router"
import { withRouter, Link } from "react-router-dom"
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import Cookies from "js-cookie";

const { Header, Content, Footer, Sider } = Layout;

class LayoutComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userIcon: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        }
    }
    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick.bind(this)}>
                <Menu.Item key="" icon={<UserOutlined />}>
                    个人信息
              </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                    修改密码
              </Menu.Item>
                <Menu.Item key="signout" icon={<UserOutlined />}>
                    退出登录
              </Menu.Item>
            </Menu>
        );
        return (
            <Layout>
                {/* 左边边的内容区 */}
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["/home"]}
                        onClick={this.handleTo.bind(this)}
                    >
                        {renderTabBar(layoutRoute)}
                    </Menu>
                </Sider>
                {/* 右边的内容区 */}
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        {/* <Link to="/home">回首页</Link> */}
                        <Row >
                            <Col offset={21} span={3}>
                                <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<UserOutlined />}>
                                    个人中心
                        </Dropdown.Button>
                            </Col>
                        </Row>
                    </Header>
                    
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }

    handleTo({ key }) {
        console.log(key)
        if(key=="/user/userInfo") key = "/user/userInfo/undefined"
        this.props.history.push(key);
    }
    handleMenuClick({key}) {
        if(key=="signout"){
            Cookies.remove("token");
            this.props.history.push('/login')
        }
    }
}
export default withRouter(LayoutComponent);