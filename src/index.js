module.exports = function reverse (n) {
  let a = Math.abs(n);
  let array = [...a.toString()];
 
  return array.reverse().join("");
}
