var BOOKINFO = {
  "rating": {
    "max": 10,
    "numRaters": 196,
    "average": "7.4",
    "min": 0
  },
  "subtitle": "",
  "author": ["PIAN SHAN GONG"],
  "pubdate": "2007-1",
  "tags": [{
    "count": 95,
    "name": "片山恭一",
    "title": "片山恭一"
  }, {
    "count": 44,
    "name": "日本文学",
    "title": "日本文学"
  }, {
    "count": 29,
    "name": "日本",
    "title": "日本"
  }, {
    "count": 26,
    "name": "小说",
    "title": "小说"
  }, {
    "count": 14,
    "name": "爱情",
    "title": "爱情"
  }, {
    "count": 13,
    "name": "倘若我在彼岸",
    "title": "倘若我在彼岸"
  }, {
    "count": 11,
    "name": "日本小说",
    "title": "日本小说"
  }, {
    "count": 11,
    "name": "纯爱",
    "title": "纯爱"
  }],
  "origin_title": "",
  "image": "http:\/\/img5.douban.com\/mpic\/s9097939.jpg",
  "binding": "Paperback",
  "translator": [],
  "catalog": "",
  "pages": "193",
  "images": {
    "small": "http:\/\/img5.douban.com\/spic\/s9097939.jpg",
    "large": "http:\/\/img5.douban.com\/lpic\/s9097939.jpg",
    "medium": "http:\/\/img5.douban.com\/mpic\/s9097939.jpg"
  },
  "alt": "http:\/\/book.douban.com\/subject\/2023013\/",
  "id": "2023013",
  "publisher": "青岛出版社",
  "isbn10": "7543639130",
  "isbn13": "9787543639133",
  "title": "倘若我在彼岸",
  "url": "http:\/\/api.douban.com\/v2\/book\/2023013",
  "alt_title": "",
  "author_intro": "",
  "summary": "《倘若我在彼岸》是作者在《在世界中心呼唤爱》后的首部爱情小说集。片山恭一，学生时代通读了包括夏目漱石和大江健三郎在内的日本近现代文学全集，同时读了从笛卡尔、莱布尼茨到结构主义的欧洲近现代哲学，也读了马克思。自二十二三岁开始创作小说，《气息》、《世界在你不知道的地方运转》、《别相信约翰·列侬》等均为他的代表作。",
  "price": "14.00元"
}

can.fixture('GET https://api.douban.com/v2/book/2023013', function() {
  return BOOKINFO;
});