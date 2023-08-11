"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
// import type { RootState } from "@/redux/store";
// import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/redux/reducers/counter/counterSlice";

const AddPage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="btn" onClick={() => dispatch(increment())}>
        +
      </div>
      <div>{count}</div>
      <div className="btn" onClick={() => dispatch(decrement())}>
        -
      </div>
      <div className="btn" onClick={() => dispatch(incrementByAmount(2))}>
        ++
      </div>
    </div>
  );
};

export default AddPage;
