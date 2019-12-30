const pool = require('../../db');

exports.postLogin = async (req, res, next) => {
  pool.getConnection(async(err, connection) => {
    if(err) {
      throw(err);
    }
    const body = req.body;
    console.log(body);
  })
}

// get All Users
exports.getAllCustomers = async (req, res, next) => {
  pool.getConnection((err, connection) => {
    try {
    if(err) {
      throw err;
    }
    connection.query(`SELECT * FROM users`, (err, rows) => {
      if(!err && rows.length > 0) {
        connection.release();
        res.json(rows);
      } else {
        res.json();
      }
    });
    connection.on('error', (err) => {
      throw err;
    })
  } catch(err) {
    next(err);
    }
  })
}

// // Register Route
// exports.postRegister = async (req, res, next) => {
//   pool.getConnection((err, connection) => {
//     if(err) {
//       throw err;
//     }
//     connection.query(`SELECT * FROM customer`, (err, rows) => {
//       if(!err && rows.length > 0) {
//         connection.release();
//         res.json(rows);
//       } else {
//         res.json();
//       }
//     });
//     connection.on('error', (err) => {
//       throw err;
//     })
//   })
// }

