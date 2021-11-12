import { useState, useEffect } from "react";
import styles from "../App.module.css";

export const BubbleSort = ({
  wait,
  generateArray,
  arr,
  setIsSorted,
  isSorted,
  notify,
  setIsRunning,
}) => {
  const [nums, setNums] = useState([]);
  const [active, setActive] = useState(-20);
  const [ind, setInd] = useState(1000);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setNums(arr);
  }, [arr]);

  const handleRandomnArray = () => {
    setIsSorted(false);
    setInd(500);
    setCounter(0);
    let arr = generateArray();
    setNums(arr);
  };

  const handleSort = async (num) => {
    if (isSorted) {
      notify();
      return;
    }
    setIsRunning(true);

    for (let i = 0; i < num.length - 1; ) {
      for (let j = 0; j < num.length - 1 - i; ) {
        setActive(j);
        setCounter((prev) => prev + 1);
        if (num[j] > num[j + 1]) {
          [num[j], num[j + 1]] = [num[j + 1], num[j]];
        }
        let temp = [...nums];
        setNums(temp);
        j++;
        await wait();
      }
      setInd(num.length - 1 - i);
      i++;
    }
    setActive(-10);
    setInd(0);
    setIsSorted(true);
    setIsRunning(false);
  };

  return (
    <>
      <div className={styles.container}>
        {nums &&
          nums.map((n, i) => (
            <div
              style={{
                background:
                  i === active || i === active + 1
                    ? "#f08080"
                    : i >= ind
                    ? "#8fbc8f"
                    : "#000080",
                height: `${n * 4.5}px`,
              }}
            >
              {/* {n} */}
            </div>
          ))}
      </div>
      <div className={styles.buttonDiv}>
        <button
          style={{ border: "4px solid #000080" }}
          onClick={() => handleSort(nums)}
        >
          {" "}
          Sort the array{" "}
        </button>
        <button
          style={{ border: "4px solid #000080" }}
          onClick={handleRandomnArray}
        >
          {" "}
          Random Array
        </button>
      </div>
    </>
  );
};
