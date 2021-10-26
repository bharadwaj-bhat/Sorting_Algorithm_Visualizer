import styles from "./App.module.css";
import { MergeSort } from "./Components/Merge";
import { SelectionSort } from "./Components/SelectionSort";
import { BubbleSort } from "./Components/BubbleSort";
import { useEffect, useState } from "react";
import { QuickSort } from "./Components/QuickSort";

import { Link, Switch, Route } from "react-router-dom";

import Slider from "@mui/material/Slider";

import { useReducer, red } from "react";

function App() {
  const [arrSize, setArrSize] = useState(30);
  const [arr, setArr] = useState();
  const [timer, setTimer] = useState(0);
  const initState = [];
  // const [state, dispatch] = useReducer(reducer, initState);

  function wait(delay) {
    return new Promise((ac) => {
      setTimeout(() => {
        ac();
        return;
      }, 10 * timer);
    });
  }

  useEffect(() => {
    let arr = generateArray();
    setArr(arr);
  }, []);

  function generateArray() {
    let newArray = [];
    for (let i = 0; i < arrSize; i++) {
      let randomInt = Math.ceil(Math.random() * 100);
      newArray.push(randomInt);
    }

    return newArray;
  }

  const handleArrSlider = (e) => {
    setArrSize(e.target.value);
    console.log(arrSize);
    let x = generateArray();
    setArr(x);
  };

  const handleTimer = (e) => {
    setTimer(e.target.value);
  };

  return (
    <>
      <div className={styles.App}>
        <div className={styles.nav}>
          <Link to="/">
            <button> Quick </button>
          </Link>
          <Link to="/bubbleSort">
            <button> Bubble </button>
          </Link>
          <Link to="/selectionSort">
            <button> Selection </button>
          </Link>
          <Link to="/mergeSort">
            <button> Merge </button>
          </Link>
        </div>
        <div className={styles.slider}>
          <Slider
            onChange={handleArrSlider}
            defaultValue={30}
            step={10}
            marks
            min={30}
            max={100}
          />
          <Slider
            onChange={handleTimer}
            defaultValue={0}
            step={2}
            marks
            min={0}
            max={10}
          />
        </div>
        <Switch>
          <Route exact path="/">
            <QuickSort
              arr={arr}
              generateArray={generateArray}
              wait={(timer) => wait(timer)}
            />
          </Route>
          <Route path="/mergeSort">
            <MergeSort
              arr={arr}
              generateArray={generateArray}
              wait={(timer) => wait(timer)}
            />
          </Route>
          <Route path="/bubbleSort">
            <BubbleSort
              arr={arr}
              generateArray={generateArray}
              wait={(timer) => wait(timer)}
            />
          </Route>
          <Route path="/selectionSort">
            <SelectionSort
              arr={arr}
              generateArray={generateArray}
              wait={(timer) => wait(timer)}
            />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
