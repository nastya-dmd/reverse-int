const { neq } = require("semver");

module.exports = function reverse (n) {
let num = Math.abs(n)  
let arr = String(num).split('');
let arrNew = [];

for (let i = 0; i < arr.length; i++) {
    arrNew.push(arr.pop())
}

arrNew.push(arr.shift());

return Number(arrNew.join(''));
}
