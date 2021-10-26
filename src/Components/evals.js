// let data1 = [90, 70, 20, 80, 50];
// let nk = [5, 3];
// let k = nk[1];
// let lo = 0;
// let hi = data1.length - 1;
// let res = "No";

// while (lo < hi) {
//   let diff = Math.abs(data1[lo] - data1[hi]);

//   if (diff === k) {
//     res = "Yes";
//     break;
//   }

//   if (diff < k) {
//     lo++;
//   } else {
//     hi--;
//   }
// }

// console.log(res);

let res = [];

function pm(arr, l, r) {
  if (l === r) {
    console.log(arr);
  }
  for (let i = l; i <= r; i++) {
    [arr[i], arr[l]] = [arr[l], arr[i]];
    pm(arr, l + 1, r);
    [arr[l], arr[i]] = [arr[i], arr[l]];
  }
}

pm([1, 2, 3], 0, 2);
console.log(res);

let arr = [2, 4, 5, 5, 4, 4];

let obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    // checking if we have stored the value in key value pairs
    obj[arr[i]] += 1;
  } else {
    obj[arr[i]] = 1;
  }
}

let min = arr[0];
let max = arr[0];

for (let key in obj) {
  // console.log(obj[min]);
  if (obj[key] < obj[min]) {
    min = key;
  }
  if (obj[key] > obj[max]) {
    max = key;
  }
}
console.log(Math.abs(min - max));
