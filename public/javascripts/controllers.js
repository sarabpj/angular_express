app.controller('homeController', homeController)

homeController.$inject = ["TodoService"]

function homeController(TodoService){

   var vm = this;
   vm.submitTodo = function(){
      TodoService.createTodo(vm.todo)
        .then(function(){
            vm.todo = ''
        })
        .catch(function(err){
          console.log(err)
        })
   };

  (function viewTodos(){
     TodoService.getTodos()
      .then(function(data){
        console.log(data.data.todos)
        vm.getTodos= data.data.todos;
      })
      .catch(function(err){
        console.log(err)
      })
   })();



}

