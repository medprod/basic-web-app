

// for(i=0; i<5; i++)
// {
	
// 	console.log('Hello, world!');

// }
const { faker } = require('@faker-js/faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});

//INSERTING SINGUALAR DATA

// var q = 'INSERT INTO users(email) VALUES("wyatdog@gmail.com")';

// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// var person = {
// 	  email: faker.internet.email(),
// 	  created_at: faker.date.past()
//   };
// console.log(person);
// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//    if (err) throw err;
//    console.log(result);
//  });
// console.log(end_result.sql);

// connection.end();

//INSERTING MULTIPLE DATA

// var data = [
//     ['blah@gmail.com', '2017-05-01 03:51:37'],
//     ['ugh@gmail.com', '2017-05-01 03:51:37'],
//     ['meh@gmail.com', '2017-05-01 03:51:37']
// ];

// var q = 'INSERT INTO users (email, created_at) VALUES ?';

// connection.query(q, [data], function(err, result) {
//   console.log(err);
//   console.log(result);
// });

var data = [];
for(var i = 0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
// console.log(data);
 
var q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});

connection.end();














// console.log(faker.internet.email());
// console.log(faker.date.past());

// console.log(faker.address.city());

// function generateAddress(){
// 	console.log(faker.address.streetAddress());
// 	console.log(faker.address.city());
// 	console.log(faker.address.state());
// }
// generateAddress();
// generateAddress();
// generateAddress();

