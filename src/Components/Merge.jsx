// import { generateArray } from "./bubbleSort";
import styles from "../App.module.css";
import { useEffect, useState } from "react";

export const MergeSort = ({
  wait,
  generateArray,
  arr,
  isSorted,
  setIsSorted,
  notify,
  setIsRunning,
}) => {
  const [nums, setNums] = useState([]);
  const [active, setActive] = useState(-20);
  const [theSorted, setTheSorted] = useState(null);

  useEffect(() => {
    if (arr) {
      let temp = [...arr];
      temp = temp.sort((a, b) => a - b);
      setTheSorted(temp);
    }
    setNums(arr);
  }, [arr]);

  // if (arr) {
  //   let temp = [...arr];
  //   temp = temp.sort();
  //   setTheSorted(temp);
  // }

  const mergeArrays = async (arr, l, m, r) => {
    let n1 = m - l + 1;
    let n2 = r - m;

    let left = [];
    let right = [];

    for (let i = 0; i < n1; i++) {
      left[i] = arr[l + i];
    }

    for (let j = 0; j < n2; j++) {
      right[j] = arr[m + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = l;

    while (i < n1 && j < n2) {
      if (left[i] <= right[j]) {
        setActive(k);
        arr[k] = left[i];
        let x = [...arr];
        setNums(x);
        i++;
      } else {
        setActive(k);
        arr[k] = right[j];
        let x = [...arr];
        setNums(x);
        j++;
      }
      k++;
      await wait();
    }

    while (i < n1) {
      setActive(k);
      arr[k] = left[i];
      let x = [...arr];
      setNums(x);
      i++;
      k++;
    }
    while (j < n2) {
      setActive(k);
      arr[k] = right[j];
      let x = [...arr];
      setNums(x);
      j++;
      k++;
    }

    let x = [...arr];
    setNums(x);
    setIsSorted(true);
    hasSorted(arr);
    setActive(-10);
  };

  const handleSort = async (a, l, r) => {
    setIsRunning(true);

    if (isSorted) {
      notify();
      return;
    }
    if (l >= r) {
      let x = [...a];
      setNums(x);
      setActive(-10);
      hasSorted(arr);
      return;
    }
    const m = l + Math.floor((r - l) / 2);
    await handleSort(a, l, m);
    await handleSort(a, m + 1, r);
    wait();
    await mergeArrays(a, l, m, r);
  };

  const hasSorted = (arr) => {
    if (arr.length === theSorted.length) {
      let x = [...arr];
      x = x.sort((a, b) => a - b);

      for (let i = 0; i < x.length; i++) {
        if (x[i] !== arr[i]) {
          return;
        }
      }
      setIsRunning(false);
    }

    return true;
  };

  const handleRandomnArray = () => {
    setIsSorted(false);
    generateArray();
  };

  return (
    <>
      <div className={styles.container}>
        {nums &&
          nums.map((n, i) => (
            <div
              style={{
                background: i === active ? "#ffce42" : "#63d2dd",
                height: `${n * 4.5}px`,
              }}
            >
              {/* {n} */}
            </div>
          ))}
        <div></div>
      </div>
      <div className={styles.buttonDiv}>
        <button
          style={{ border: "4px solid #63d2dd" }}
          onClick={() => {
            handleSort(nums, 0, nums.length - 1);
          }}
        >
          {" "}
          Sort the array{" "}
        </button>

        <button
          style={{ border: "4px solid #63d2dd" }}
          onClick={handleRandomnArray}
        >
          {" "}
          Random Array
        </button>
      </div>
    </>
  );
};
