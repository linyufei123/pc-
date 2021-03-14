import React, { Component } from "react"

import { Table, Tag, Button, Pagination ,Modal} from 'antd';
import { getBookList } from "../../api/booklist"
import ModifyForm from "../../components/modifyForm"


export default class AddBooks extends Component {
    constructor() {
        super()
        this.state = {
            pageNum: 1,
            pageSize: 5,
            bookList: [],
            visible:false,
            modifyData:{},
            columns: [
                {
                    title: '书籍封面',
                    dataIndex: 'bookCoverLogo',
                    key: 'bookCoverLogo',
                    render: url => <img src={url} style={{ width: '56px', height: '65px' }} />,
                },
                {
                    title: '作者笔名',
                    dataIndex: 'authorName',
                    key: 'authorName',
                },
                {
                    title: '书籍名称',
                    dataIndex: 'bookShowName',
                    key: 'bookShowName',
                },
                {
                    title: "类型",
                    dataIndex: "bookClassName",
                    key: "bookClassName",
                    render: tags => (
                        <span>
                            {
                                tags == "现代言情" ? <Tag color="green">{tags}</Tag>
                                    : <Tag color="cyan">{tags}</Tag>
                            }
                        </span>
                    )
                },
                {
                    title: '操作',
                    key: 'action',
                    render: (text, record) => (
                        <span>
                            <Button type="primary" style={{ marginRight: "5px" }}
                                onClick={this.handleShowModal.bind(this, record)}
                                >操作</Button>

                            <Button type="dashed"
                                onClick={this.handleDel.bind(this, record)}>删除</Button>
                        </span>
                    ),
                },
            ],
        }
    }

    //显示模态框
    handleShowModal(record) {
        this.setState({
            visible: true,
            modifyData: record
        })
    }

    //删除书籍
    handleDel(record) {
        Modal.info({
            title: "删除",
            content: `您确定要删除《${record.bookShowName}》书吗？`,
            onOk: () => {
                //ajax删除数据
            }
        })
    }

    //关闭模态框
    handleCancel() {
        this.setState({
            visible: false
        })
    }

    async onChange(...rest){
        const pageNum = rest[0] ,pageSize = rest[1] ;
        const bookList = await getBookList({ pageNum, pageSize }) 
        this.setState({bookList:bookList ,pageNum:pageNum})
    }

    //获取书籍列表
    async getList(){
        const { pageNum, pageSize } = this.state;
        const bookList = await getBookList({ pageNum, pageSize })
        this.setState({
            bookList: bookList
        })
    }


    render() {
        const { columns, bookList ,modifyData ,pageNum} = this.state;
        return (
            <div>
                <Table
                    rowKey={record => record.id}  //bookList中的bookId
                    columns={columns}
                    dataSource={bookList}
                    pagination={false}
                />
                <Pagination  style={{marginTop:"20px"}}
                    showQuickJumper 
                    defaultCurrent={pageNum} 
                    total={100} 
                    pageSizeOptions={[5,10,15,20]}
                    defaultPageSize={5}
                    onChange={this.onChange.bind(this)} 
                />
                <Modal
                    title="修改数据信息"
                    visible={this.state.visible}
                    footer={null}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <ModifyForm modifyData={modifyData} pageNum={pageNum} 
                    handleCancel={this.handleCancel.bind(this)}
                    handlerefsh = {this.getList.bind(this)}
                    />
                </Modal>
            </div>

        )
    }

    componentDidMount() {
        this.getList()
    }
}