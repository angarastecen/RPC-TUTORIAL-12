const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("WAIT 1 MINUTE TO SEE YOUR RPC")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("RADIANT WRITES RPC IS READY")});
}
module.exports = keepAlive
