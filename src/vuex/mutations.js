/**
 * Created by wcheng on 2017/7/26.
 */
export default{
    saveName(state,msg){
      alert(msg.username)
      state.userInfo = msg;
    },
    createNote(state,msg){
      let mssg={};
      mssg.title=msg.title;
      mssg.detail=msg.detail;
      state.notes.push(mssg)
    }
}
