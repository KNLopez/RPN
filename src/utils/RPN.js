export const RPN = seq => {
  console.log(seq);
  if (seq.length <= 2) {
    return;
  }

  let operands = ["+", "-", "*", "/"];
  let stack = [];
  let i = 0;

  stack.push(seq[i]);
  i++;

  while (i <= seq.length) {
    let item = seq[i];
    let index = operands.indexOf(item);
    if (index < 0) {
      stack.push(seq[i]);
    } else {
      let a = parseInt(stack.splice(-1)[0], 10);
      let b = parseInt(stack.splice(-1)[0], 10);
      if (index === 0) {
        stack.push(a + b);
      } else if (index === 1) {
        stack.push(b - a);
      } else if (index === 2) {
        stack.push(a * b);
      } else if (index === 3) {
        stack.push(b / a);
      }
    }
    i++;
  }

  return parseInt(stack[0], 10);
};
