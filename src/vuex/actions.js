/**
 * Created by wcheng on 2017/7/26.
 */

export default  {

  saveInfo({commit},msg){
     commit('saveName',msg)
     if(window.sessionStorage){
       window.sessionStorage.setItem("username",msg.username);
       window.sessionStorage.setItem("password",msg.password)
     }
  },

  creatednote({commit},msg){
    commit('createNote',msg)
    console.log(msg)
  }
}
