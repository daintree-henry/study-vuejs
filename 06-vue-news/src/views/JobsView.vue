<template>
  <div>
    <div v-for="job in jobs">{{job.title}}</div>
  </div>
</template>

<script>
import {fetchJobsList} from '../api/index'

export default {
  data() {
    return {
      jobs: []
    }
  },
  created () {
    console.log('호출 전: ', this); // <- 호출 전: Vue  객체
    // var vm = this;
    // fetchJobsList()
    //   .then(function(response){
    //     console.log('호출 후: ',this); // <- 다른스코프(프로미스) 이기 때문에 호출 후: undefined
    //     vm.jobs = response.data
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    fetchJobsList()
      .then(response => {
        console.log('호출 후: ',this); // <- 화살표 함수를 사용하면 호출 후 동일한 객체 리턴 
        this.jobs = response.data
      })
      .catch(err => {
        console.log(err);
      });
  },
}

</script>

<style>

</style>