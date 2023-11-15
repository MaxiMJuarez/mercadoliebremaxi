const express= require('express');
const app = express();

const path = require('path')

app.listen(3000, ()=>{
    console.log('puerto escuchando')
});

//app.get('/', (req,res)=>{
//    res.send('conexion exitosa')
//});

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
  });