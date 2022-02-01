// 1
function circle(r) {
  return (r ** 2) * Math.PI
}
// console.log(circle(3))

// 2
function lengthOfCircle(r) {
  return 2 * Math.PI * r
}
// console.log(lengthOfCircle(4))


// 3
function average(a, b) {
  return (a + b) / 2
}
// console.log(average(15, 20))

// 4

function calc(x, y, action) {
  let result;
  switch (action) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '%':
      result = x % y;
      break
    case '^':
      result = x ^ y;
      break;
    default:
      result = 'не считается'
  }
  return result
}

// console.log(calc(12, 3, '/'))

