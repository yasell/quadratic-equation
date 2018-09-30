module.exports = function solveEquation(equation) {
  // your implementation
  array = equation.split(' ');

  let a = Number(array[0]);
  let b = parseInt(array[3] + array[4], 10);
  let c = parseInt(array[7] + array[8], 10);

  const D = Math.pow(b, 2) - 4 * a * c;

  const x_1 = Math.round((-b + Math.sqrt(D)) / (2 * a));
  const x_2 = Math.round((-b - Math.sqrt(D)) / (2 * a));
  let resultArray = [];
  x_1 < x_2 ? resultArray = [x_1, x_2] : resultArray = [x_2, x_1];

  return resultArray;
}