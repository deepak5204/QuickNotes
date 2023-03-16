const express = require('express');
const app = express();  //create a new router object
const port = 8000;


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`); 
});

