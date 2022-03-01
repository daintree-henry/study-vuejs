<template>
  <div>
    <p v-for="article in fetchedNews">
      <a v-bind:href="article.url">
        {{article.title}}
      </a>
      <small> {{ article.time_ago }} {{article.user}} </small>
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