let today = new Date();
// console.log(today);


// mm-dd-yyyy // time
let birthDate = new Date("10/29/2002");
// console.log(birthDate);

let otherDate = new Date('8-4-2003 04:54:08');
otherDate = new Date('June 10 1979');
console.log(otherDate);

let a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getHours();
a = otherDate.getTime();  // number of seconds till 1 jan 1970
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
// console.log(a);
// 0 : sun // 6 : sat


otherDate.setDate(23);
otherDate.setMonth(1);
otherDate.setFullYear(2002);
otherDate.setMinutes(30);
otherDate.setHours(20);
otherDate.setSeconds(15);
console.log(otherDate);