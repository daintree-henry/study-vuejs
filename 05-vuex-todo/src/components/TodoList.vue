<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-bind:key="todoItem.item" v-for="(todoItem, index) in this.storedTodoItems" class="shadow">
        <font-awesome-icon icon="fa-check" class="checkBtn" v-on:click="toggleComplete({todoItem,index})" v-bind:class="{checkBtnCompleted: todoItem.completed}"/>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <font-awesome-icon icon="trash-alt" />
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods:{
    ...mapMutations(['removeTodo','toggleComplete']),
  },
  computed:{
    ...mapGetters(['storedTodoItems'])
    //컨포넌트에 선언된 이름과 다를 경우
    // ...mapGetters({
    //   todoItems: 'storedTodoItems'
    // })
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.list-enter-active, .list-leave-active{
  transition: all 1s;
}
.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
</style>