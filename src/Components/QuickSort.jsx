import { useState, useEffect } from "react";
import styles from "../App.module.css";
import { v4 as uuid } from "uuid";
// import styles from '../App.module.css'

export const QuickSort = ({ wait, generateArray, arr }) => {
  const [nums, setNums] = useState([]);
  const [active, setActive] = useState(null);
  const [active2, setActive2] = useState(null);

  useEffect(() => {
    // let arr = generateArray();
    setNums(arr);
  }, [arr]);

  const handleRandomnArray = () => {
    let arr = generateArray();
    setNums(arr);
  };

  async function handleSort(num, lo, hi) {
    if (lo >= hi) {
      return;
    }
    let p = await pivot(num, lo, hi);

    await handleSort(num, lo, p);
    await handleSort(num, p + 1, hi);

    setActive(null);
    setActive2(null);
  }

  async function pivot(arr, lo, hi) {
    let pivot = arr[lo];
    let i = lo - 1;
    let j = hi + 1;

    setActive(lo);

    while (true) {
      do {
        i++;
        setActive(i);
      } while (arr[i] < pivot);

      do {
        j--;
        setActive2(j);
      } while (arr[j] > pivot);

      if (i >= j) {
        return j;
      }

      await wait(4);
      [arr[i], arr[j]] = [arr[j], arr[i]];
      let temp = [...nums];
      setNums(temp);
    }
  }

  return (
    <>
      <div className={styles.container}>
        {nums &&
          nums.map((n, i) => (
            <div
              // key={uuid()}
              style={{
                background:
                  i === active || i === active2
                    ? "#ffff00"
                    : n === 999
                    ? "green"
                    : "#dda0dd",
                height: `${n * 4.5}px`,
              }}
            >
              {/* {n} */}
            </div>
          ))}
      </div>
      <div className={styles.buttonDiv}>
        <button onClick={() => handleSort(nums, 0, nums.length - 1)}>
          {" "}
          Sort the array{" "}
        </button>
        <button onClick={handleRandomnArray}> Randomn Array</button>
      </div>
    </>
  );
};
