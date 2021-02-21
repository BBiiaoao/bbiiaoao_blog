const { exec } = require('../db/mysql');

const getList = (author, kerword) => {
    let sql = `select * from blogs where 1=1 `;
    if (author) {
        sql += `and author='${author}' `;
    }
    if (kerword) {
        sql += `and title like '%${keyword}%' `;
    }
    sql += `order by createtime desc;`

    //返回 promise
    return exec(sql);
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