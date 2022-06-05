const { Router } = require('express');
const cors = require('cors');
const router = Router();

const mysqlConnection = require('../database');

router.use(cors());

//routes

//API get all restaurants
router.get('/', (req, res) => {
  //   res.json({ Titulo: 'Adios' });
  mysqlConnection.query('SELECT * FROM restaurants', (err, rows, fields) => {
    if (!err) {
      res.json({
        result: true,
        message: 'Successful Query!',
        restaurants: rows,
      });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
