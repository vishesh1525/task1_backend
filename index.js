const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
app.get('/', function (req, res) {
  res.send('Hello World')
})
let port=3000;
app.listen(port,(req,res)=>
{
    console.log(`conneted to server${port}`);
})


let count=0;
app.get("/increment",async(req,res)=>
{
   count++;
  res.json({ message: 'Incremented' });
})

app.get("/value",async(req,res)=>
{
    res.json(count);
})
