//tăng
let printNumber = function (a, b) {
  if (a > 0 && b > 0 && a < b) {
    for (i = a; i <= b; i++) {
      console.log(i);
    }
  } else {
    console.log(`Gtri k hợp lệ`);
  }
};
printNumber(1, 10);

function isOddNumber(a) {
  if (a % 2 == 1) return true;
  else return false;
}

function sumOddNumers(a, b) {
  let total = 0;
  for (i = a; i <= b; i++) {
    if (isOddNumber(i)) total = total + i;
  }
  return total;
}
console.log(sumOddNumers(2, 10));

function divisor(a) {
  for (i = 1; i <= a; i++) {
    if (a % i == 0) {
      console.log(i);
    }
  }
}
divisor(20);

function factorial(a) {
  total = 1;
  for (i = 1; i <= a; i++) total = total * i;
  return total;
}
factorial(4);
console.log(factorial(4));

function countFolding(m) {
  let paper = 0.1;
  let count = 0;
  m = m * 1000;
  while (paper < m * 1000) {
    paper *= 2;
    count++;
    }
    return count;
}
console.log(countFolding(10));

function dogchicken(dog, chicken) {
    chicken = 1;
    dog = 36 - chicken;
    sum = dog * 4 + chicken * 2;
    while
}
