var TODOS = [
  {
    id: 1,
    name: 'TASK 1: KILL BILL'
  },
  {
    id: 2,
    name: 'TASK 2: SOMETHING DIFFERENT'
  }
];

can.fixture('GET /todos', function () {
  return TODOS;
});

var id = 2;
can.fixture('POST /todos', function () {
  return {id: ++id}
});

can.fixture('PUT /todos/{id}', function () {
  return {}
});

can.fixture('DELETE /todos/{id}', function () {
  return {}
});