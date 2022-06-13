let USD2VND = function (usd) {
  console.log(`Quy đổi: $${usd} = ${usd * 23500} VNĐ`);
};
USD2VND(1);
USD2VND(50);
USD2VND(10);

let compoundInterest = function (P, r, n, t) {
  console.log(
    `Với số tiền gốc ban đầu là ${P} VNĐ, lãi suất ngân hàng ${
      r * 100
    }% một năm, ghép lãi ${n} lần/năm thì tổng số tiền bạn nhận được sau 
    ${t} năm gửi ngân hàng là: ${P * (1 + r / n) ** (n * t)}VNĐ`
  );
};
compoundInterest(2000000000, 0.69, 12, 4);
