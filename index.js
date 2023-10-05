const express = require('express');
const {body, validationResult} = require('express-validator');
const checkValidasi = require('./middleware/validasi-register');
const checkError = require('./middleware/error-handler');

const app = express();

const port = 1945;

app.use(express.json());

app.post("/auth/register", checkValidasi, (req,res) => {
    validationResult(req).throw();
    console.log(body);
    const body = req.body;

    return res.status(200).json({
        status: "success",
        message: "tes register",
        data: body
    });
});

app.use(checkError);

app.listen(port, () => {
    console.log(`app start at = ${port}`)

});

