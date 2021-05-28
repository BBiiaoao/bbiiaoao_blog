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
const loginCheck = require('../middleware/loginCheck');

// res 对于浏览器返回的应该是字符串
// 所以不使用 express 应该使用 JSON.stringify() 进行转换成字符串
// 以下 express 进行了封装，直接使用 .json() 就可
router.get('/list', (req, res, next) => {
  const author = req.query.author || '';
  const keyword = req.query.keyword || '';

  if (req.query.isadmin) {
    //管理员界面
    if (req.session.username == null) {
      //未登录
      res.json(new ErrorModel('未登录'));
      return;
    }
    //强制查询自己的博客
    author = req.session.username;
  }
  const result = getList(author, keyword);
  return result.then(listData => {
    res.json(new SuccessModel(listData));
  })//等于 then(data)
});

router.get('/detail', (req, res, next) => {
  const result = getDetail(req.query.id);
  return result.then(data => {
    res.json(new SuccessModel(data));
    return;
  })
});

router.post('/new',  (req, res, next) => {
  req.body.author = req.session.username;
  const result = newBlog(req.body);
  return result.then(data => {
    res.json(new SuccessModel(data));
    return;
  })
})


router.post('/updata', loginCheck, (req, res, next) => {
  const result = updateBlog(req.query.id, req.body);
  return result.then(val => {
    if (val) {
      res.json(new SuccessModel());
    }
    else {
      res.json(new ErrorModel("更新博客失败"));
    }
  })
})

router.post('/delete', loginCheck, (req, res, next) => {
  const author = req.session.username;
  const result = delBlog(req.query.id, author);
  return result.then(val => {
    if (val) {
      res.json(new SuccessModel());
    }
    else {
      res.json(new ErrorModel("更新博客失败"));
    }
  })
})


module.exports = router;
