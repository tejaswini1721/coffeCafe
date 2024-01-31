const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const dbconfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "orderform",
};

const addUser = async (input) => {
  const connection = mysql.createConnection(dbconfig);

  await connection.connectAsync();

  const sql =
    "INSERT INTO DETAILS (coffeeType,quantity,name,email,phoneNumber,deliveryAddress,city,zipCode) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  await connection.queryAsync(sql, [
    input.coffeeType,
    input.quantity,
    input.name,
    input.email,
    input.phoneNumber,
    input.deliveryAddress,
    input.city,
    input.zipCode,
  ]);

  await connection.endAsync();
};

module.exports = { addUser };
