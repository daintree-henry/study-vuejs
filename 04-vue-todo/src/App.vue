<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:todoItems="todoItems" 
      v-on:removeTodo="removeTodo" 
      v-on:toggleComplete="toggleComplete"></TodoList>
    <TodoFooter v-on:clearTodo="clearTodo"></TodoFooter>
  </div>
</template>

<script>
import TodoFooterVue from './components/TodoFooter.vue'
import TodoHeaderVue from './components/TodoHeader.vue'
import TodoInputVue from './components/TodoInput.vue'
import TodoListVue from './components/TodoList.vue'

export default {
  data: function(){
    return{
      todoItems: []
    }
  },
  methods:{
    removeTodo: function(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function(todoItem, index){
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    addOneItem: function(todoItem){
        var obj = {
          completed: false,
          item: todoItem
        };
        localStorage.setItem(todoItem, JSON.stringify(obj));
        console.log(this.todoItems); 
        this.todoItems.push(obj);
    },  
    clearTodo: function(){
      localStorage.clear();
      this.todoItems = []
    }
  },
  created: function(){
    if (localStorage.length > 0){
      for(var i = 0; i<localStorage.length;i++){
        if(localStorage.key(i) !== ''){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  components:{
    'TodoHeader': TodoHeaderVue,
    'TodoInput' : TodoInputVue,
    'TodoList' : TodoListVue,
    'TodoFooter' : TodoFooterVue
  }
}

</script>

<style>
body{
  text-align: center;
  background-color: #F6F6F6;
}

input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.3);
}
</style>