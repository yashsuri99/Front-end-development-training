const today = new Date();
console.log(today);
console.log(today.toLocaleString());

// Jan - 0, Dec - 11
const independenceDay = new Date(1947, 7, 15, 0, 0, 0, 0);
console.log(independenceDay.toLocaleString());

console.log(independenceDay.getDate()) // 15
console.log(independenceDay.getFullYear()) // 1947
console.log(independenceDay.getMonth()) // 7 -> August

// today.setDate(today.getDate() + 1);
console.log(today.toLocaleString());