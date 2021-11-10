// import { generateArray } from "./bubbleSort";
import styles from "../App.module.css";
import { useEffect, useState } from "react";

export const SelectionSort = ({ wait, generateArray, arr }) => {
  const [nums, setNums] = useState([]);
  const [active, setActive] = useState(-20);
  const [ind, setInd] = useState(-1);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    setNums(arr);
  }, [arr]);

  async function handleSort(arr) {
    for (let i = 0; i < arr.length; ) {
      let minInd = i;
      for (let j = i + 1; j < arr.length; j++) {
        setCurrent(j);

        if (arr[j] < arr[minInd]) {
          minInd = j;
        }
        setActive(minInd);
        await wait(3);
      }
      [arr[i], arr[minInd]] = [arr[minInd], arr[i]];
      setInd(i);
      i++;
    }
    setActive(null);
    setCurrent(null);
  }

  const handleRandomnArray = () => {
    setInd(-100);

    let arr = generateArray();
    setNums(arr);
  };

  return (
    <>
      <div className={styles.container}>
        {nums &&
          nums.map((n, i) => (
            <div
              style={{
                background:
                  i === active || i === current
                    ? "#ffd700"
                    : i > ind
                    ? "#808080"
                    : "#dc143c",

                height: `${n * 4.5}px`,
              }}
            >
              {/* {n} */}
            </div>
          ))}
        <div></div>
      </div>
      <div className={styles.buttonDiv}>
        <button onClick={() => handleSort(nums)}> Sort the array </button>
        <button onClick={handleRandomnArray}> Randomn Array</button>
      </div>
    </>
  );
};
