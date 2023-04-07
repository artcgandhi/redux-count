import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "../../Redux/counterSlice";

const ButtonAmount = () => {
  const selector = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleAdd = (value) => {
    dispatch(incrementByAmount(Number(value) || 0));
  };
  return (
    <button
      onClick={() => handleAdd(selector.valueInput)}
      style={{ marginTop: "10px" }}
    >
      Calculate the amount
    </button>
  );
};

export default ButtonAmount;
