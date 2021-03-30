const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config({path: 'config.env'});
const PORT = process.env.PORT;


require('./db/conn');

app.use(express.json());

app.use(cors())

app.use(require('./router/auth'));

const middleware = (req,res,next) => {
    console.log("middleware");
    next();   
}; 


app.get('/about',middleware,(req,res) => {
    res.send("This is about");
});


app.listen(PORT,() => {
    console.log(`Server running at port no ${PORT}`);
});