let data = [100, 60, 70, 65, 80, 85];

let stack = [0];
let res = [1];

for (let i = 1; i < data.length; i++) {
  
  while (data[top(stack)] <= data[i] && stack.length !== 0) {
    stack.pop();
  }

  if (stack.length === 0) {
    res.push(i + 1);
  } else {
    res.push(i - top(stack));
  }
  stack.push(i);
}
console.log(res);

function top(stack) {
  return stack[stack.length - 1];
}

// let stack = [];
// stack.push(0);
// let res = [1];

// for (let i = 1; i < data.length; i++) {
//   while (stack.length !== 0 && data[top(stack)] <= data[i]) {
//     stack.pop();
//   }
//   stack.length === 0 ? res.push(i + 1) : res.push(i - top(stack));
//   stack.push(i);
// }
// console.log(res);
