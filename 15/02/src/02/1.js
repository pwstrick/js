import { createStore } from 'redux';
function caculate(previousState = {digit: 0}, action) {        //Reducer
  let state = Object.assign({}, previousState);
  switch (action.type) {
    case "ADD":
      state.digit += 1;
      break;
    case "MINUS":
      state.digit -= 1;
      break;
    default:
      break;
  }
  return state;
}
function Test() {
  let store = createStore(caculate);        //Store
  let action = { type: "ADD" };             //Action
  store.dispatch(action);                　 //触发更新
  console.log(store.getState());            //读取状态
  return null;
}
export default Test;