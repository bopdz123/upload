function humanize(date) {
  const now = new Date();

  const passedTime = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (passedTime < 5) {
    return "Vừa xong";
  } else if (passedTime < 60) {
    return `${passedTime} giây trước`;
  } else if (passedTime < 3600) {
    return `${passedTime / 60} phút trước`;
  } else if (passedTime < 86400) {
    return `${passedTime / 60 / 60} giờ trước`;
  } else if (passedTime < 2592000) {
    return `${passedTime / 60 / 60 / 24} ngày trước`;
  } else if (passedTime < 31536000) {
    return `${passedTime / 60 / 60 / 24 / 30} tháng trước`;
  } else {
    return `Ngày xửa ngày xưa ...`;
  }
}

const now = new Date();

const tenSecondAgo = new Date();
tenSecondAgo.setSeconds(tenSecondAgo.getSeconds() - 10);

const fifteenMinutesAgo = new Date();
fifteenMinutesAgo.setMinutes(fifteenMinutesAgo.getMinutes() - 15);

console.log(humanize(now));
console.log(humanize(tenSecondAgo));
console.log(humanize(fifteenMinutesAgo));
