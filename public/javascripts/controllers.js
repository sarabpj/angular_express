app.controller('homeController', homeController)

homeController.$inject = ["TodoService"]

function homeController(TodoService){

   var vm = this;
   vm.submitTodo = function(){
      TodoService.createTodo(vm.todo)
        .then(function(){
          viewTodos();
        })
        .catch(function(err){
          console.log(err)
        })
    vm.todo = ''
   };

  var viewTodos = function(){
     TodoService.getTodos()
      .then(function(data){
        // console.log(data.data.todos)
        vm.getTodos= data.data.todos;
      })
      .catch(function(err){
        console.log(err)
      })
   };
    viewTodos();


}

