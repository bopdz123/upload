let findBMI = function (w, h) {
  const BMI = w / h ** 2;

  if (BMI <= 16) {
    console.log(`Gay do III`);
  } else if (BMI > 16 && BMI <= 17.5) {
    console.log(`Gay do II`);
  } else if (BMI > 17.5 && BMI <= 18.5) {
    console.log(`Gay do I`);
  } else if (BMI > 18.5 && BMI <= 25) {
    console.log(`Bthuonggg`);
  } else if (BMI > 25 && BMI <= 30) {
    console.log(`Hoi beo`);
  } else if (BMI > 30 && BMI <= 35) {
    console.log(`Beo phi do I`);
  } else if (BMI > 35 && BMI <= 40) {
    console.log(`Beo phi do II`);
  } else console.log(`Beo phi do III`);
};
findBMI(65, 1.7);

let findMaxOfThree = function (a, b, c) {
  if (a >= b && a >= c) {
    console.log(`${a} là số lớn cmn nhất`);
  } else if (b >= c && b >= a) {
    console.log(`${b} là số lớn cmn nhất`);
  } else if (c >= a && c >= b) {
    console.log(`${c} là số lớn cmn nhất`);
  }
};
findMaxOfThree(999, 69, 96);

let calcWaterBill = function (m3) {
  let price;
  if (m3 < 5) price = 45000;
  else if (m3 <= 10) price = m3 * 9000;
  else if (m3 <= 20) price = (m3 - 10) * 11000 + 9000;
  else if (m3 <= 30) price = (m3 - 20) * 13000 + 20000;
  else price = (m3 - 30) * 15000 + 33000;

  console.log(`Tổng số tiền phải trả cho ${m3} nước là ${price}`);
};

calcWaterBill(5);
calcWaterBill(8);
calcWaterBill(35);

let calcTaxiFee = function (km) {
  let price;
  if (km < 10) price = 10000;
  else if (km <= 30) price = km * 11000 + 10000;
  else price = 10000 + 30 * 11000 + (km - 30) * 9500;
  console.log(`Tổng số tiền phải trả cho ${km} km là ${price}`);
};
calcTaxiFee(25);

//let pass = "dichoinhanhi";
//let answer = prompt("Enter password");

//while (answer != pass) {
//  alert("Sai mật khẩu ! Mời bạn nhập lại!");
// answer = prompt("Re-enter password");
//}

for (i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

result = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    result = result + i;
  }
}
console.log(`Tổng số chẵn từ 1-100 là ${result}`);

let isOddNumber = function (a) {
  if (a % 2 == 0) {
    console.log(`${a} là số chẵn`);
  } else {
    console.log(`${a} là số lẻ`);
  }
};
isOddNumber(52);
isOddNumber(69);
isOddNumber(696);

let maxOfTwo = function (a, b) {
  if (a > b) {
    console.log(`${a} là số lớn hơn`);
  } else if (b > a) {
    console.log(`${b} là số lớn hơn`);
  }
};
maxOfTwo(75, 69);
maxOfTwo(75, 88);
maxOfTwo(5, 2);

let divisibleByThreeAndFive = function (i) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`True`);
  } else if (i % 3 == 0) console.log(`False`);
  else if (i % 5 == 0) console.log(`False`);
};
divisibleByThreeAndFive(50);
divisibleByThreeAndFive(150);

let season = function (month) {
  if (month == 1 || month == 2 || month == 12) {
    console.log(`WINTER`);
  } else if (month == 3 || month == 4 || month == 5) {
    console.log(`Spring`);
  } else if (month == 6 || month == 7 || month == 8) {
    console.log(`Summer`);
  } else if (month == 9 || month == 10 || month == 11) {
    console.log(`Fall`);
  } else if (month > 12) {
    console.log(`NGU VCC`);
  }
};
season(4);
season(8);
season(10);
season(1);
season(12);
season(13);

let trafficLight = function (light) {
  if (light == "red") {
    console.log(`${light} Vượt luôn bạn ê`);
  } else if (light == "green") {
    console.log(`{light} Đóng luôn không phải ngại`);
  } else if (light == "yellow") {
    console.log(`{light} không phải chậm đâu`);
  }
};
trafficLight("red");

let calcCommissions = function (totalSales) {
  totalSales = Number(totalSales);
  if (0 <= totalSales && totalSales <= 100000000) {
    console.log(
      `Số tiền hoa hồng nhận đc cho doanh số ${totalSales} là ${
        0.05 * totalSales
      }`
    );
  } else if (totalSales <= 300000000) {
    console.log(
      `Số tiền hoa hồng nhận đc cho doanh số ${totalSales} là ${
        0.1 * totalSales
      }`
    );
  } else {
    console.log(
      `Số tiền hoa hồng nhận đc cho doanh số ${totalSales} là ${
        0.02 * totalSales
      }`
    );
  }
};
calcCommissions(10000000);
calcCommissions(69960000000);

let isLeafYear = function (year) {
  year = Number(year);
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 4 === 0 && year % 400 === 0)
  ) {
    console.log(`Năm ${year} là năm nhuận.`);
  } else {
    console.log(`Năm ${year} là không phải là năm nhuận.`);
  }
};
isLeafYear(2007);
isLeafYear(2027);
isLeafYear(1998);
isLeafYear(2000);

let daysOfMonth = function (month, year) {
  let today = new Date();
  month = Number(month) || today.getMonth() + 1;
  year = Number(year) || today.getFullYear();
  if (month == 2) {
    if (
      (year % 4 === 0 && year % 100 !== 0) ||
      (year % 4 === 0 && year % 400 === 0)
    ) {
      console.log(`Tháng ${month} năm ${year} có 29 ngày.`);
    } else {
      console.log(`Tháng ${month} năm ${year} có 28 ngày.`);
    }
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log(`Tháng ${month} năm ${year} có 30 ngày.`);
  } else if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    console.log(`Tháng ${month} năm ${year} có 31 ngày.`);
  } else {
    console.log(`Tháng ${month} năm ${year} không hợp lệ.`);
  }
};
daysOfMonth(12, 2003);

let calcGrade = function (point) {
  point = Number(point);
  if (point < 0 || point > 10) {
    console.log(` ${point} ảo thật đấy `);
  } else if (0 <= point && point < 4) {
    console.log(`Điểm trung bình ${point}: Xếp loại F`);
  } else if (point < 5.5) {
    console.log(`Điểm trung bình ${point}: Xếp loại D`);
  } else if (point < 7) {
    console.log(`Điểm trung bình ${point}: Xếp loại C`);
  } else if (point < 8.5) {
    console.log(`Điểm trung bình ${point}: Xếp loại B`);
  } else if (point <= 10) {
    console.log(`Điểm trung bình ${point}: Xếp loại A`);
  }
};
calcGrade(10);
calcGrade(1);
calcGrade(0);
calcGrade(15);
calcGrade(8.5);
calcGrade(5);

