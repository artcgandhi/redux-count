import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputAmount } from "../../Redux/counterSlice";

const Input = () => {
  const selector = useSelector((state) => {
    return {
      ...state.counter,
    };
  });

  const dispatch = useDispatch();

  const handleChange = (e) => dispatch(inputAmount(e.target.value));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <label style={{ marginTop: "20px" }}>enter amount</label>
      <input
        type="text"
        value={selector.valueInput}
        onChange={handleChange}
        style={{
          marginTop: "10px",
          width: "100px",
          textAlign: "center",
          fontSize: "20px",
        }}
      />
    </div>
  );
};

export default Input;
