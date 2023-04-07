import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Redux/counterSlice";
import { updateLoading } from "../../Redux/counterSlice";

const Counter = () => {
  const selector = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{selector.title}</div>
      {selector.loading == true ? (
        <p style={{ fontSize: "20px" }}>Loading...</p>
      ) : (
        <p style={{ fontSize: "20px" }}>{selector.value}</p>
      )}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {/* <input></input> */}
      {/* <button></button> */}
      {/* <ButtonAsync updateLoading={updateLoading}/> */}
    </div>
  );
};

export default Counter;
