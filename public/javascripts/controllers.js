app.controller('homeController', homeController)

homeController.$inject = ["TodoService"]

function homeController(TodoService){
   var vm = this;
   vm.submitTodo = function(){
      TodoService.createTodo(vm.todo)
        .then(function(){

        })
        .catch(function(err){
          console.log(err)
        })
   }
}