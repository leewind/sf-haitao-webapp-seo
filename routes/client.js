var express = require('express');
var router = express.Router();
var sfFile = require('../util/sf-file');

/**
 * @description 通过id从豆瓣获取book的信息，这里id必须使用2023013，通过浏览器端进行渲染
 * @param  {Object} req Request 请求对象
 * @param  {Object} res Response 回复对象
 */
router.get('/:id', function(req, res) {

  var bookId = req.params.id;

  sfFile.read('app/index.html')
    .then(function (data) {

      res.set('Content-Type', 'text/html');
      res.send(new Buffer(data));

    });
});

module.exports = router;