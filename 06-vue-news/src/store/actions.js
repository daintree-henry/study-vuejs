import { fetchUserInfo, fetchItemInfo, fetchList } from '../api/index'

export default {
  FETCH_USER({ commit }, name){
    return fetchUserInfo(name)
      .then(({data}) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_ITEM({ commit }, id){
    return fetchItemInfo(id)
      .then(({data}) => {
        commit('SET_ITEM', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  async FETCH_LIST(context, pageName){
    try {
      const response = await fetchList(pageName);
      context.commit('SET_LIST', response.data)
      return response;        
    }catch(error){
      console.log(error);
    }
  },
}