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
    const sql=`select * from blogs where id='${id}'`;
    console.log(12312312312312);
    return exec(sql).then(rows=>{
        console.log(rows);
        console.log(1111);
        return rows[0];
    })
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