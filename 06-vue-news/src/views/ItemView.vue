<template>
  <div>Item</div>
</template>

<script>
import fetchItemList from '../api/index';

export default {
  created(){
    fetchItemList()
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
  }
}
</script>

<style>

</style>