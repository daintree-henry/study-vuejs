<template>
  <div>
    <section>
      <user-profile :info="fetchItemInfo">
        <router-link slot="username" :to="`/user/${fetchItemInfo.user}`">{{fetchItemInfo.user}}</router-link>
        <template slot="time">{{ 'Posted '+ fetchItemInfo.time_ago}}</template>
      </user-profile>
    </section>
    <section>
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
import UserProfile from '../components/UserProfile.vue'
import { mapGetters } from 'vuex'

export default {
  components:{
    UserProfile
  },
  computed: {
    ...mapGetters(['fetchItemInfo'])
  },
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