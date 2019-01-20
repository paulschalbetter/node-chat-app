let moment = require('moment');

// let date = new Date();
// console.log(date.getMonth());

let someTimestamp = moment().valueOf();
console.log(someTimestamp);

let createdAt = 1234;
let date = moment(someTimestamp);
console.log(date.format('HH:mm'));
