$(document).ready(function () {
  $.when(BookInfo.findOne()).then(function (data) {

    var bookinfo = data;

    var bookInfoCtrl = new BookInfoCtrl('#info', {
      bookinfo: bookinfo
    });
  });
});