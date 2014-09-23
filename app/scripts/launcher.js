$(document).ready(function () {
  $.when(TodoModel.findAll()).then(function (data) {
    var todos = data;

    var todoCtrl = new TodoCtrl('#todos', {
      todos: todos
    });
  });
});