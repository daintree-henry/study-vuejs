import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index'

export default {
  FETCH_NEWS(context){
    fetchNewsList()
      .then(response => {
        //mutation을 통해서만 state 변경 가능
        context.commit('SET_NEWS', response.data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_JOBS({commit}){
    fetchJobsList()
      .then(({data}) => {
        //mutation을 통해서만 state 변경 가능
        commit('SET_JOBS', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_ASK({commit}){
    fetchAskList()
      .then(({data}) => {
        //mutation을 통해서만 state 변경 가능
        commit('SET_ASK', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
}