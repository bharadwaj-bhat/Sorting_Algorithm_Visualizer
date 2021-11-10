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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [current, setCurrent] = useState("Quick");
  const [isSorted, setIsSorted] = useState(false);

  function wait(delay) {
    return new Promise((ac) => {
      setTimeout(() => {
        ac();
        return;
      }, 100 / timer);
    });
  }

  useEffect(() => {
    generateArray();
    handleHeaderSort(header);
  }, []);

  const notify = () =>
    toast("Array has already been sorted, Randomize the array and try again!");

  function generateArray(n = arrSize) {
    setIsSorted(false);
    let newArray = [];
    for (let i = 0; i < n; i++) {
      let randomInt = Math.ceil(Math.random() * 95);
      newArray.push(randomInt);
    }
    setArr(newArray);
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

  const handleArrSlider = (e) => {
    setArrSize((prev) => e.target.value);
    generateArray(e.target.value);
  };

  const handleTimer = (e) => {
    setTimer(e.target.value);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
        <div className={styles.nav}>
          <Link to="/">
            <button
              style={
                current !== "Quick"
                  ? { border: "1px solid #dda0dd" }
                  : {
                      background: "#dda0dd",
                      color: "white",
                      border: "none",
                      transform: "scale(1.1)",
                    }
              }
              onClick={() => setCurrent("Quick")}
            >
              {" "}
              Quick{" "}
            </button>
          </Link>
          <Link to="/bubbleSort">
            <button
              style={
                current !== "Bubble"
                  ? { border: "1px solid #000080prop" }
                  : {
                      background: "#000080",
                      color: "white",
                      border: "none",
                      transform: "scale(1.1)",
                    }
              }
              onClick={() => setCurrent("Bubble")}
            >
              {" "}
              Bubble{" "}
            </button>
          </Link>
          <Link to="/selectionSort">
            <button
              style={
                current !== "Selection"
                  ? { border: "1px solid #808080" }
                  : {
                      background: "#808080",
                      color: "white",
                      border: "none",
                      transform: "scale(1.1)",
                    }
              }
              onClick={() => setCurrent("Selection")}
            >
              {" "}
              Selection{" "}
            </button>
          </Link>
          <Link to="/mergeSort">
            <button
              style={
                current !== "Merge"
                  ? { border: "1px solid #63d2dd" }
                  : {
                      background: "#63d2dd",
                      color: "white",
                      border: "none",
                      transform: "scale(1.1)",
                    }
              }
              onClick={() => setCurrent("Merge")}
            >
              {" "}
              Merge{" "}
            </button>
          </Link>
        </div>
        <div className={styles.slider}>
          <ThemeProvider theme={theme}>
            <div className={styles.sliderWrapper}>
              <p> Array Size</p>
              <Slider
                onChange={(e) => handleArrSlider(e)}
                defaultValue={100}
                step={10}
                marks
                min={30}
                max={100}
                size="small"
                color="secondary"
              />
            </div>
            <div className={styles.sliderWrapper}>
              <p>Speed</p>
              <Slider
                onChange={handleTimer}
                defaultValue={9}
                step={2}
                marks
                min={1}
                max={11}
                size="small"
                color="secondary"
              />
            </div>
          </ThemeProvider>
        </div>
        <div className={styles.arrays}>
          <Switch>
            <Route exact path="/">
              <QuickSort
                arr={arr}
                generateArray={generateArray}
                wait={(timer) => wait(timer)}
                isSorted={isSorted}
                setIsSorted={setIsSorted}
                notify={notify}
              />
            </Route>
            <Route path="/mergeSort">
              <MergeSort
                arr={arr}
                generateArray={generateArray}
                wait={(timer) => wait(timer)}
                isSorted={isSorted}
                setIsSorted={setIsSorted}
                notify={notify}
              />
            </Route>
            <Route path="/bubbleSort">
              <BubbleSort
                arr={arr}
                generateArray={generateArray}
                wait={(timer) => wait(timer)}
                isSorted={isSorted}
                setIsSorted={setIsSorted}
                notify={notify}
              />
            </Route>
            <Route path="/selectionSort">
              <SelectionSort
                arr={arr}
                generateArray={generateArray}
                wait={(timer) => wait(timer)}
                isSorted={isSorted}
                setIsSorted={setIsSorted}
                notify={notify}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
