const express = require('express')
const knex = require('./db/db');
const mysql = require('mysql');
const cors = require('cors');
var morgan = require('morgan');

const app = express()
const port = 5000
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    console.log('in');
    knex("expense").select("id","text","amount")
    .then(rows=>{
        res.json(rows)
    })
})
app.post('/', (req, res) => {
    console.log("reqBody ::: ", req.body)
    knex('expense').insert({ text: req.body.text, amount: req.body.amount }).returning([ 'text','amount'])
      .then(row => {
          console.log(row)
        res.json(row);
      }).catch((err) => {
        console.log("err :::::::::::::::", err);
      })
  })
  app.delete('/:id',(req,res)=>{
    console.log(req.params.id)
      knex('expense').where('id',req.params.id).del().then(rows=>{
          res.json(rows);
      })
    })    
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



