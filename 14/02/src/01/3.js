import React from 'react';
class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colors: [] };        //保存复选框值的数组
    this.handle = this.handle.bind(this);
  }
  handle(e) {
    const { checked, value } = e.target;
    let { colors } = this.state;
    if (checked && colors.indexOf(value) === -1) {
      colors.push(value);               //已选中并且数组中未有该值，就在末尾插入
    } else {    
      colors = colors.filter(item => item !== value);        //未选中，就将该值过滤掉
    }
    this.setState({ colors });
  }
  render() {
    return (
      <>
        <input name="colors" value="1" onChange={this.handle} type="checkbox"
          checked={this.state.colors.indexOf("1") >= 0}
        />红
        <input name="colors" value="2" onChange={this.handle} type="checkbox"
          checked={this.state.colors.indexOf("2") >= 0}
        />绿
        <input name="colors" value="3" onChange={this.handle} type="checkbox"
          checked={this.state.colors.indexOf("3") >= 0}
        />蓝
      </>
    );
  }
}
export default Checkbox;