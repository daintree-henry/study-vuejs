<template>
  <div>
    <p v-for="article in fetchedNews">
      <a v-bind:href="article.url">
        {{article.title}}
      </a>
      <small> {{ article.time_ago }} by 
        <router-link v-bind:to="`/user/${article.user}`">{{article.user}}</router-link> 
      </small>
    </p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedNews'])
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
}
</script>

<style>

</style>