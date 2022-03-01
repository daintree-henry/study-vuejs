<template>
  <div>
    <section>
      <div class="user-container">
        <div>
           User
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchItemInfo.user}`">
            {{ fetchItemInfo.user}}
          </router-link>
          <div class="time">
            {{ fetchItemInfo.time_ago}}
          </div>
        </div>
      </div>
      <h2>
        <p>{{fetchItemInfo.title}}</p>
      </h2>
    </section>
    <section>
      <div v-html="fetchItemInfo.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['fetchItemInfo'])
  },
  created(){
    console.log('test')
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', id)
  }
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.user-description{
  padding-left: 8px;
}
.time{
  font-size: 0.7rem;
}
</style>