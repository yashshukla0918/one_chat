const express = require('express');

// setting up application
const app = express()


app.get('/',(req,res)=>{
    res.send("Hello there")
})






const PORT = 5000
app.listen(PORT,()=>{
    console.log(`Server listening on post :${PORT} ....`)
})
