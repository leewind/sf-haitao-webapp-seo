/**
 * @see http://canjs.com/docs/can.Model.html
 * @description 建立Model模型，通过findOne接口访问数据
 */
BookInfo = can.Model({
  findOne: 'GET https://api.douban.com/v2/book/2023013',
}, {});


/**
 * @see http://canjs.com/docs/can.Control.html
 * @description 获取数据之后使用模板进行封装，DTL的做法，直接渲染出View进行展示
 */
BookInfoCtrl = can.Control({

  /**
   * @description 初始化的时候就会执行init方法
   */
  init: function () {
    this.element.html(can.view('templates/bookinfo.ejs', {
      bookinfo: this.options.bookinfo
    }));
  }
});

