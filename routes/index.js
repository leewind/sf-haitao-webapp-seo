var express = require('express');
var sfRequest = require('../util/sf-request');
var sfFile = require('../util/sf-file');
var router = express.Router();
var ejs = require('ejs');

/**
 * @description 通过id从豆瓣获取book的信息，这里id必须使用2023013
 * @param  {Object} req Request 请求对象
 * @param  {Object} res Response 回复对象
 */
router.get('/:id', function(req, res) {

  var bookId = req.params.id;

  sfRequest.get({url: 'https://api.douban.com/v2/book/'+bookId, method: 'GET'})
    .then(function (data) {

      var p = sfFile.read('app/templates/bookinfo.ejs', 'utf8')
        .then(function (str) {

          var bookinfo = JSON.parse(data.body);
          var html = ejs.render(str, {bookinfo: bookinfo});

          res.render('index', { content: html, status: 'ready' });
        });
    })
});

module.exports = router;