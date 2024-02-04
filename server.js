const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors=require('cors')
app.use(express.json());
PORT = process.env.PORT || 4000;
app.use(cors());


app.use("/api/v1/test", require('./Routes/testrotes'));

app.get('/', (req, res) => {
    res.json("Hii")
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})