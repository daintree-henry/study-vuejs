<template>
  <div>
    <div v-for="item in asks">{{item.title}}</div>
  </div> 
</template>

<script>
import {fetchAskList} from '../api/index';

export default {
  data() {
    return {
      asks: []
    }
  },
  created(){
    var vm = this;
    fetchAskList()
      .then(response => {
        vm.asks = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
}
</script>

<style>

</style>