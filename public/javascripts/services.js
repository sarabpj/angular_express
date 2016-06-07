app.service('TodoService', function($http){
  return{
    createTodo: function(content){
      var req = {
        method: "POST",
        url: '/todos',
        // content === req.body.todo 
        data: {todo: {todo: content}}
      }
      return $http(req)
    },

    getTodos: function(){
     var req = {
        method: "GET",
        url: '/todos',
     }

      return $http(req)

    }
  }

});