export const RPN = (seq) =>  {
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
      if (index === 0) {
        let a = parseInt(stack.splice(-1)[0], 10);
        let b = parseInt(stack.splice(-1)[0], 10);
        stack.push(a + b);
      }
      if (index === 1) {
        let a = parseInt(stack.splice(-1)[0], 10);
        let b = parseInt(stack.splice(-1)[0], 10);
        stack.push(b - a);
      }
      if (index === 2) {
        let a = parseInt(stack.splice(-1)[0], 10);
        let b = parseInt(stack.splice(-1)[0], 10);
        stack.push(a * b);
      }
      if (index === 3) {
        let a = parseInt(stack.splice(-1)[0], 10);
        let b = parseInt(stack.splice(-1)[0], 10);
        stack.push(b / a);
      }
    }
    i++;
  }

  return parseInt(stack[0], 10);
}
