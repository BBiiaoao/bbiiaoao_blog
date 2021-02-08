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

const getDetail = (id) => {
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: 1612103627787,
        author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    //blogData 是一个博客对象，包含 title content属性
    return {
        id: 3//表示新建博客，插入到数据库表里面的 id
    }
}

const updateBlog = (id, blogData = {}) => {
    //id 就是要更新博客的 id
    //blogData 是一个博客对象，包含 title content属性
    return true;
}

const delBlog = (id) => {
    //id 就是要删除博客的id
    return true;
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}