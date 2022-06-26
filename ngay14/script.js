let mobile = {
  smart: true,
  heavy: "200 gr",
  age: 1,
  color: "gray",
};

function getValue(key) {
  return mobile[key];
}

console.log(getValue("smart"));
console.log(getValue("age"));
console.log(getValue("color"));

console.log(getValue("key"));
for (const key in mobile) {
  console.log(`${key} :${mobile[key]}`);
}

const guess_list = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Arg",
};
function greeting(name) {
  if (name in guess_list) {
    console.log(`Hi , I'm ${name} and I'm come form ${guess_list[name]}`);
  } else {
    console.log(`Hi ! I'm a guess`);
  }
}
greeting("ba");
greeting("Wendy");
greeting("Sam");

const family = {
  Dad: 53,
  Mom: 46,
  Me: 20,
  Sister: 15,
};

function afterNYears(family, years) {
  const result = {};

  for (let key in family) {
    result[key] = family[key] + years;
  }

  return result;
}
console.log(afterNYears(family, 15));
console.log(family);

// const scores = {
//   A: 100,
//   B: 14,
//   C: 9,
//   D: 28,
//   E: 145,
//   F: 12,
//   G: 3,
//   H: 10,
//   I: 200,
//   J: 100,
//   K: 114,
//   L: 100,
//   M: 25,
//   N: 450,
//   O: 80,
//   P: 2,
//   Q: 12,
//   R: 400,
//   S: 113,
//   T: 405,
//   U: 11,
//   V: 10,
//   W: 10,
//   X: 3,
//   Y: 210,
//   Z: 23,
// };
// function calcScore(name) {
//   let total = 0;
//   for (let characer of name) {
//     if (char in scores) {
//       total = total + scores;
//     }
//   }

//   if (total <= 60) {
//     console.log(`NOT TO GOOD`);
//   } else if (61 <= total && total <= 300) {
//     console.log(`PRETTY GOOD`);
//   } else if (301 <= total && total <= 600) {
//     console.log(`VERY GOOD`);
//   } else if (total > 600) {
//     console.log(`THE BEST`);
//   }
//   console.log(`Tên ${name} có số ${total}`);
// }
// calcScore("AB");

let self = {
  name: "Linh",
  age: 20,

  greeting() {
    console.log(`Hi everyone my name is${this.name},I'm ${this.age} years old`);
  },
};
self.greeting();

const clone = self;
self = null;
clone.greeting();



