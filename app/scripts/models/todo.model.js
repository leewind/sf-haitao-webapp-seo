TodoModel = can.Model({
  findAll: 'GET /todos',
  create: 'POST /todos',
  update: 'PUT /todos/{id}',
  destroy: 'DELETE /todos/{id}'
}, {});

