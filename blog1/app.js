const querystring = require('querystring');
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');


const serverHandle = (req, res) => {
    //设置返回格式 JSON
    res.setHeader('Content-type', 'application/json');

    //获取 path
    const url = req.url;
    req.path = url.split('?')[0];

    //解析 query
    req.query = querystring.parse(url.split('?')[0]);

    //处理blog路由
    const blogData = handleBlogRouter(req, res);
    if (blogData) {
        res.end(
            JSON.stringify(blogData)
        )
        return;
    }

    //处理 user 路由
    const userData = handleUserRouter(req, res)
    if (userData) {
        res.end(
            JSON.stringify(userData)
        );
        return;
    }

    //未命中路由返回 404
    res.writeHead(404, { "Content-type": "text/plain" });
    res.write('404 NOT Found');
    res.end();

};

module.exports = serverHandle;
//env:process.env.NODE_ENV
