import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
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
let store = createStore(caculate);

function Btn(props) {        　　//展示组件
  return <button>{props.txt}</button>;
}
function mapStateToProps(state, ownProps) {
  console.log(state);
  console.log(ownProps);
  return state;
}
let Smart = connect(mapStateToProps)(Btn);        //生成容器组件

function Test() {
  return <Provider store={store}>
    <Smart txt="提交" />
  </Provider>
}
export default Test;
