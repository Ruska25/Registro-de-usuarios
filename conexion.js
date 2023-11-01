const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{
    console.log('conexion correcta a Mongodb')
})

objetobd.on('error', ()=>{
    console.log('error en la conexion  Mongodb')
})

module.exports = mongoose