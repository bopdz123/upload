// quy tắc tự động chuyển đổi dữ liệu

// 1 với phép +
// nếu 1 trong 2 toán hạng (gtri) có kiểu chuỗi, thì gtri còn lại cũng chuyển thành chuỗi
// 2 các toán tử toán học khác(- * / ..)
// thì ưu tiên chuyển sang số

// có 2 cách viết, sdung
// kq khác nhau khi sdung trong 1 biểu thức
//let a = 1;

//sdung ở phía sau tên biến
// a++;
// a--;

// thực hiện phép tính trước (với gtri)
// hiện tại của biến sau đó mới tăng
// let result = 10+a--;//11, a =>> 0
// console.log(result);

// // sdung ở phí trc tên biến
// ++a;
// --a;
// tăng giá trị của biến trước

// equal == != (tự động chuyển đổi kiểu)
// strict equal === !== (so sánh cả kiểu dữ liệu)
// NOT - ! (phủ định)
// AND -- && (VÀ)
// OR - || (hoặc)
//  let a = 1,
//  b = (a % 2) * 2,
//  c = a++ - b--,
//  d = "0";

//const result = a + b + c + d;
//const result1 = a - b + c - d;
//const result2 = a-- + (b-- * c) / d;
//const result3 = ++a - +b * c + d;
//console.log(result);
//console.log(result1);
//console.log(result2);
//console.log(result3);
let a = 1,
  b = !a;
let c = (!a && !!b) || 0;
const result = a && b && c;
const result1 = a || b || c;
const result2 = (a && !b) || !!c;
const result3 = !(a && !b) && c;
const result4 = !!(a && !!b) || !c;
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(true + false);
