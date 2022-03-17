const express = require('express');
const jsonwebtoken = require('jsonwebtoken');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const iss = process.env.ISS || "jwt-issuer-2";
const secret = process.env.SECRET || "super-secret-key";


app.post('/auth/token', function (request, response) {
    const { username, password } = request.body;
    if (username === "joke" && password === "joke") {
        const token = jsonwebtoken.sign({
            iss
        }, secret)
        return response.json({ token });
    }
    response.json({ message: 'invalid credentials' });

});

app.listen(9000);