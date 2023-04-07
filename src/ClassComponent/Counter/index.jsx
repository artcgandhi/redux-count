import React, { Component } from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmountAct,
} from "./counterSliceClass";
class Counter extends Component {
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <p style={{ fontSize: "20px" }}>{this.props.value}</p>
        <button onClick={() => this.props.dynamicIncrement(5)}>+</button>
        <button onClick={() => this.props.decrement()}>-</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    dynamicIncrement: (num) => {
      console.log("value incbyamount", value);
      dispatch(incrementByAmountAct(num));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    title: state.counterClass.title,
    value: state.counterClass.value,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
