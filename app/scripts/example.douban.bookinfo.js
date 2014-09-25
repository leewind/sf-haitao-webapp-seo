/**
 * @see http://canjs.com/docs/can.Model.html
 * @description 建立Model模型，通过findOne接口访问数据
 */
BookInfo = can.Model({
  // @see http://developers.douban.com/wiki/?title=book_v2#get_book
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
  init: function() {
    this.render();
    this.supplement();
  },

  render: function (data) {
    var status = this.element.attr('data-status');
    if (status !== 'ready') {
      this.element.html(can.view('/app/templates/bookinfo.ejs', {
        bookinfo: this.options.bookinfo
      }));
    };
  },

  supplement: function () {
    var id = can.route.attr('id');
    if (id) {
      this.element.append(can.view('/app/templates/bookinfo.supplement.ejs', {
        id: id
      }));
    }
  }
});


can.route('case/:id');
can.route.ready();

var Routing = can.Control.extend({
  init: function () {
    var that = this;
    $.when(BookInfo.findOne()).then(function (data) {

      that.bookinfo = data;

      that.bookInfoCtrl = new BookInfoCtrl('#info', {
        bookinfo: that.bookinfo
      });
    });
  },
});

new Routing(document.body)