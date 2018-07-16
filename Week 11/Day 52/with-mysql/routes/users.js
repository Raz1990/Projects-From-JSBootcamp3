var express = require('express');
var db = require('./../db')();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.query('SELECT * FROM users', (err, results)=>{
    res.json(results);
  });
});

router.get('/:id', function(req, res, next) {
    db.query('SELECT * FROM users WHERE id = ' + req.params['id'], (err, results)=>{
        res.json(results);
    });
});

router.post('/', function(req, res, next) {
    const query = "INSERT INTO test.users (`id`,`name`) VALUES (0,'"+req.body.name+"')";

    db.query(query, (err, results)=>{
        res.json(results);
    });
});

router.put('/', function(req, res, next) {
    const query = 'UPDATE test.users SET name = "' +req.body.name + '" WHERE id = ' +req.body.id;
    db.query(query, (err, results)=>{
        res.json(results);
    });
});

router.delete('/:id', function(req, res, next) {
    const query = 'DELETE FROM test.users WHERE id = ' + req.params['id'];
    db.query(query, (err, results)=>{
        res.json(results);
    });
});

module.exports = router;
