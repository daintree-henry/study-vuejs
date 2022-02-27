<template>
  <div class="inputBox shadow">
    <input type="text" 
      v-model="newTodoItem" 
      v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <font-awesome-icon icon="plus" class="addBtn" />
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <font-awesome-icon icon="fa-times" class="closeModalBtn" @click="showModal = false"/>
      </h3>
      <h3 slot="body">
        값을 입력하세요.
      </h3>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/TodoModal.vue'

export default {
  data(){
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods:{
    addTodo(){
      if (this.newTodoItem !== ''){
        this.$emit('addTodoItem', this.newTodoItem)
        this.clearInput();
      }else{
        this.showModal = !this.showModal 
      }
    },
    clearInput(){
      this.newTodoItem = '';
    }
  },
  components:{
    Modal: Modal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn{
  color: #42b983;
}
</style>