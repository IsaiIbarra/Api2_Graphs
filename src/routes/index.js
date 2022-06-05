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

//API get distance to each restaurant
router.post('/getRestaurantDistances', (req, res) => {
  const { id_res_a } = req.body;
  console.log(req.body);
  mysqlConnection.query(
    'SELECT distances.*, restaurants_a.name_res as name_res_a, restaurants_b.name_res as name_res_b, units.unit_uni FROM distances INNER JOIN restaurants as restaurants_a ON distances.id_res_a = restaurants_a.id_res INNER JOIN restaurants as restaurants_b ON distances.id_res_b = restaurants_b.id_res INNER JOIN units ON units.id_uni = distances.id_uni WHERE id_res_a = ?',
    [id_res_a],
    (err, rows, fields) => {
      if (!err) {
        for (let i = 0; i < rows.length; i++) {
          if (rows[i].distance_dis == null) {
            rows[i].distance_dis = 'Unknown';
            console.log(rows[i].distance_dis);
          } else {
            rows[i].distance_dis =
              rows[i].distance_dis + ' ' + rows[i].unit_uni;
          }
        }
        res.json({
          result: true,
          message: 'Successful Query!',
          distances: rows,
        });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
