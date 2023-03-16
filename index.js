const express = require('express');
const app = express();  //create a new router object
const port = 8000;

//create question
app.post('/add', (req, res) => {
    res.status(200).json({
        message: 'hello from post route'
    });
});

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`); 
});

