<template>
  <div>
    <div v-for="article in news">{{article.title}}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index'

export default {
  data() {
    return {
      news: []
    }
  },
  created () {
    var vm = this;
    fetchNewsList()
      .then(response => {
        console.log(response);
        vm.news = response.data;
      })
      .catch(error => {
        console.log(error);
      })
  },
}
</script>

<style>

</style>