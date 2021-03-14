import React from "react"
import { Menu  } from 'antd';

const { SubMenu } = Menu;

export default (routes) => {
    let eachTabBar = (route) => {
        return <SubMenu
            key={route.key}
            title={
                <span>
                    <span>{route.name}</span>
                </span>
            }
        >
           {
               route.children.map((child)=>(
                 <Menu.Item key={child.key}>
                     <span className="nav-text">{child.name}</span>
                 </Menu.Item>
               ))
           }
            
        </SubMenu>
    }

    return routes.map((route) => {
        if (route.children) {
            return eachTabBar(route)
        } else {
            return <Menu.Item key={route.key}>
                <span className="nav-text">{route.name}</span>
            </Menu.Item>
        }
    })
}


