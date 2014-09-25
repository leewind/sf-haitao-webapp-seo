var express = require('express');
var sfRequest = require('../util/sf-request');
var sfFile = require('../util/sf-file');
var router = express.Router();
var ejs = require('ejs');
var Promise = require('promise');
var cheerio = require('cheerio');

/**
 * @description 通过id从豆瓣获取book的信息，这里id必须使用2023013
 * @param  {Object} req Request 请求对象
 * @param  {Object} res Response 回复对象
 */
router.get('/:id', function(req, res) {

  var bookId = req.params.id;

  sfRequest.get({url: 'https://api.douban.com/v2/book/'+bookId, method: 'GET'})
    .then(function (data) {

      Promise.all([sfFile.read('app/index.html', 'utf8'), sfFile.read('app/templates/bookinfo.ejs', 'utf8')])
        .then(function (files) {
          var html = files[0];
          var template = files[1];

          var bookinfo = JSON.parse(data.body);
          var innerHtml = ejs.render(template, {bookinfo: bookinfo});

          $ = cheerio.load(html);
          $('#info').html(innerHtml).attr('data-status', 'ready');

          res.set('Content-Type', 'text/html');
          res.send(new Buffer($.html()));
        });
    })
});

module.exports = router;