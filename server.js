const express = require('express')//require from express after creating a variable
const app = express()

//to access on website
//we use routes
app.get('/', (req, res)=> {
    res.send('Hello NODE API')
})

app.listen (3000, ()=> {
    console.log('Node API app is running on port 3000')
})