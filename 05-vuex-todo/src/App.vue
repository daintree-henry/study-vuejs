<template>
  <div id="app">
    <TodoHeaderVue></TodoHeaderVue>
    <TodoInputVue></TodoInputVue>
    <TodoListVue></TodoListVue>
    <TodoFooterVue></TodoFooterVue>
  </div>
</template>

<script>
import TodoFooterVue from './components/TodoFooter.vue'
import TodoHeaderVue from './components/TodoHeader.vue'
import TodoInputVue from './components/TodoInput.vue'
import TodoListVue from './components/TodoList.vue'

export default {
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