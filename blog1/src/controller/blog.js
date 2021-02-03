const getList = (author, kerword) => {
    //先返回假数据（格式是正确的）
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1612103627787,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1612103670730,
            author: 'lisi'
        }
    ]
}

const getDetail=(id)=>{
    return{
        id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1612103627787,
            author: 'zhangsan'
    }
}

module.exports = {
    getList,
    getDetail
}