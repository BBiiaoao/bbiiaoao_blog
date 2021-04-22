var express = require('express');
var router = express.Router();
const {
  getDetail,
  getList,
  newBlog,
  updateBlog,
  delBlog
} = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

// res 对于浏览器返回的应该是字符串
// 所以不使用 express 应该使用 JSON.stringify() 进行转换成字符串
// 以下 express 进行了封装，直接使用 .json() 就可
router.get('/list', function (req, res, next) {
  const author = req.query.author || '';
  const keyword = req.query.keyword || '';
  const result = getList(author, keyword);
  return result.then(listData => {
    res.json(new SuccessModel(listData));
  })//等于 then(data)
});

module.exports = router;
