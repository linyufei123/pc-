import React, { useEffect, useState } from "react"

import { getUerInfoList } from '../../api/user.js'

import { Table, Radio, Divider } from 'antd';

import { useHistory } from "react-router-dom";


const UsePersonList = (personID)=>{
    const [loading,setLoading] = useState(true);
    const [person,setPerson] = useState({});
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try{
                const res = await getUerInfoList();
                const userList = [];
                res.forEach((item, index) => {
                    const data = {};
                    data.key=index;
                    data.name=item.username;
                    data.age = item.age;
                    data.address=item.city;
                    userList.push(data)
                })
                setPerson(userList);
                setLoading(false);
            }catch (e){
                console.log(e)
            }
           
        }
        fetchData();
    }, [personID])
    return [loading,person]
}

export default function UserList(props) {
    let history = useHistory();
    const [selectionType, setSelectionType] = useState('checkbox');
    const [loading,person] = UsePersonList()

    if(loading==true){
        return <p>loading...</p>
    }

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            render: (text,record) => <a onClick={()=>{
                history.push(`/user/userInfo/${record.name}`)
            }}>{text}</a>,
        },
        {
            title: '年龄',
            dataIndex: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            name: record.name,
        }),
    };

    return <div>
        <Radio.Group
            onChange={({ target: { value } }) => {
                setSelectionType(value);
            }}
            value={selectionType} 
        >
            <Radio value="checkbox">Checkbox</Radio>
            <Radio value="radio">radio</Radio>
        </Radio.Group>

        <Divider />

        <Table
         rowKey={record => record.age} 
            rowSelection={{
                type: selectionType,
                ...rowSelection,
            }}
            columns={columns}
            dataSource={person}
        />
    </div>
}


