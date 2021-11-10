import styles from "./App.module.css";
import { MergeSort } from "./Components/Merge";
import { SelectionSort } from "./Components/SelectionSort";
import { BubbleSort } from "./Components/BubbleSort";
import { useEffect, useState } from "react";
import { QuickSort } from "./Components/QuickSort";
// import { motion } from "framer-motion";
import { Link, Switch, Route } from "react-router-dom";

import Slider from "@mui/material/Slider";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#fffff",
    },
  },
});

function App() {
  const [arrSize, setArrSize] = useState(100);
  const [arr, setArr] = useState();
  const [timer, setTimer] = useState(0);
  const [header, setHeader] = useState([
    [10, "U"],
    [3, "T"],
    [4, "I"],
    [13, "I"],
    [15, "E"],
    [6, "G"],
    [0, "S"],
    [11, "A"],
    [2, "R"],
    [5, "N"],
    [8, "I"],
    [14, "Z"],
    [1, "O"],
    [12, "L"],
    [7, "V"],
    [9, "S"],
    [16, "R"],
  ]);
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
    handleHeaderSort(header);
  }, []);

  function generateArray() {
    let newArray = [];
    for (let i = 0; i < arrSize; i++) {
      let randomInt = Math.ceil(Math.random() * 95);
      newArray.push(randomInt);
    }

    return newArray;
  }

  const handleHeaderSort = async (header) => {
    for (let i = 0; i < header.length - 1; ) {
      for (let j = 0; j < header.length - 1 - i; ) {
        if (header[j][0] > header[j + 1][0]) {
          [header[j], header[j + 1]] = [header[j + 1], header[j]];
        }
        let temp = [...header];
        setHeader(temp);
        j++;
        await wait();
      }
      i++;
    }
  };

  const handleArrSlider = async (e) => {
    let x = await setArrSize(e.target.value);
    console.log(arrSize);
    let y = await generateArray();
    setArr(y);
  };

  const handleTimer = (e) => {
    setTimer(e.target.value);
  };

  return (
    <>
      <div
        style={{
          color: "white",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "1.9rem",
            letterSpacing: "5px",
            fontWeight: "600",
          }}
        >
          <p>{header[0][1]}</p>
          <p>{header[1][1]}</p>
          <p>{header[2][1]}</p>
          <p>{header[3][1]}</p>
          <p>{header[4][1]}</p>
          <p>{header[5][1]}</p>
          <p style={{ paddingRight: "12px" }}>{header[6][1]}</p>
          <p> </p>
          <p>{header[7][1]}</p>
          <p>{header[8][1]}</p>
          <p>{header[9][1]}</p>
          <p>{header[10][1]}</p>
          <p>{header[11][1]}</p>
          <p>{header[12][1]}</p>
          <p>{header[13][1]}</p>
          <p>{header[14][1]}</p>
          <p>{header[15][1]}</p>
          <p>{header[16][1]}</p>
        </div>
      </div>
      <div className={styles.App}>
        {/* <div className={styles.nav}>
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
        </div> */}
        <div className={styles.slider}>
          <ThemeProvider theme={theme}>
            <Slider
              onChange={handleArrSlider}
              defaultValue={100}
              step={10}
              marks
              min={30}
              max={100}
              size="small"
              color="secondary"
              orientation="vertical"
              sx={{
                '& input[type="range"]': {
                  WebkitAppearance: "slider-vertical",
                },
              }}
            />
            <Slider
              onChange={handleTimer}
              defaultValue={0}
              step={2}
              marks
              min={0}
              max={10}
              size="small"
              color="secondary"
              orientation="vertical"
              sx={{
                '& input[type="range"]': {
                  WebkitAppearance: "slider-vertical",
                },
              }}
            />
          </ThemeProvider>
        </div>
        <div className={styles.arrays}>
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
      </div>
    </>
  );
}

export default App;
