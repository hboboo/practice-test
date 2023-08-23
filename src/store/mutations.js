const ADD_ITEMNUM = 'ADD_ITEMNUM' 
const REMBER_ANSWER = 'REMBER_ANSWER'

export default {
  //增加题目
  [ADD_ITEMNUM](state, num) {
    state.itemNum += num
  },
  //记录答案
  [REMBER_ANSWER](state, id) {
    state.answerid.push(id)
  }
}