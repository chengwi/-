/**
 * Created by wcheng on 2017/5/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex);


 const state ={
    userInfo:{},
    nates:[{
      title:'dahzanghu',
      detail:"zhuantaiguanli"
    }]
  }


export default new Vuex.Store({
  state,
  actions,
  mutations
})
