TodoCtrl = can.Control({
  init: function () {
    this.element.html(can.view('scripts/templates/todo.list.ejs', {
      todos: this.options.todos
    }))
  }
});