<template>
  <div id="app">
    <TodoHeaderVue></TodoHeaderVue>
    <TodoInputVue v-on:addTodoItem="addOneItem"></TodoInputVue>
    <TodoListVue v-bind:todoItems="todoItems" 
      v-on:removeTodo="removeTodo" 
      v-on:toggleComplete="toggleComplete"></TodoListVue>
    <TodoFooterVue v-on:clearTodo="clearTodo"></TodoFooterVue>
  </div>
</template>

<script>
import TodoFooterVue from './components/TodoFooter.vue'
import TodoHeaderVue from './components/TodoHeader.vue'
import TodoInputVue from './components/TodoInput.vue'
import TodoListVue from './components/TodoList.vue'

export default {
  data(){
    return{
      todoItems: []
    }
  },
  methods:{
    removeTodo(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleComplete(todoItem, index){
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    addOneItem(todoItem){
        const obj = {
          completed: false,
          item: todoItem
        };
        localStorage.setItem(todoItem, JSON.stringify(obj));
        console.log(this.todoItems); 
        this.todoItems.push(obj);
    },  
    clearTodo(){
      localStorage.clear();
      this.todoItems = []
    }
  },
  created(){
    if (localStorage.length > 0){
      for(let i = 0; i<localStorage.length;i++){
        if(localStorage.key(i) !== ''){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  components:{
    TodoHeaderVue,
    TodoInputVue,
    TodoListVue,
    TodoFooterVue
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