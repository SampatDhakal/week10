import React, { useState } from "react";
import styles from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
  incrementIfOdd,
  incrementAsync,
} from "./counterSlice";

export function Counter() {
  // const selectCount = (state) => state.counter.value

  const count = useSelector(selectCount);
  const dispatch = useDispatch();


  /** @TODO move count to reducer and get value to selector */
  // const [count, setCount] = useState(0);

  /** @TODO create required action to decrement redux state value */
  // const decrement = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };

  /** @TODO create required action to increment redux state value */
  // const increment = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  /** @TODO create required action to increment by given amount redux state value */
  // const incrementByAmount = (amount) => {
  //   setCount((prevCount) => prevCount + +amount);
  // };
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;


  /** @TODO create required action to increment redux state value if odd by given amount */
  // const incrementIfOdd = (amount) => {
  //   /** @TODO implment isOdd condition for the current counter value */
  //   const isOdd = false;
  //   if (isOdd) {
  //     setCount((prevCount) => prevCount + +amount);
  //   }
  // };

  // /**
  // *@TODO create required action to increment redux state value by fetching value
  //  * from {@link fetchCount} async function
  //  * Also handle loading states to disable other buttons while the data is being fetched
  //  * */
  // const incrementAsync = async (amount) => {
  //   const response = await fetchCount(amount);
  //   const amountFromAsyncFunction = response.data;

  //   setCount((prevCount) => prevCount + +amountFromAsyncFunction);
  // };

  /** @TODO Disable all the buttons while counter is being incremented asynchronously */
  // const isAsyncActionInProcess = false;
  const [isAsyncActionInProcess, setIsAsyncActionInProcess] = useState(false);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          disabled={isAsyncActionInProcess}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          disabled={isAsyncActionInProcess}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>

      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          disabled={isAsyncActionInProcess}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          disabled={isAsyncActionInProcess}
          onClick={() => {
            setIsAsyncActionInProcess(true);
            dispatch(incrementAsync(incrementValue)).then(() => {
              setIsAsyncActionInProcess(false);
            }).catch(() => setIsAsyncActionInProcess(false));
          }}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          disabled={isAsyncActionInProcess}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}