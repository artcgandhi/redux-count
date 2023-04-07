import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount, updateLoading } from "../../Redux/counterSlice";

const ButtonAsync = (props) => {
  const selector = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleAdd = (value) => {
    dispatch(props.updateLoading(true));
    setTimeout(() => {
      dispatch(props.incrementByAmount(Number(value)));
      dispatch(props.updateLoading(false));
    }, 2000);
  };

  return (
    <button onClick={() => handleAdd(props.valueInput)}>Calculate Async</button>
  );
};

export default ButtonAsync;
