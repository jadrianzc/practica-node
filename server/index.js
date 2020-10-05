require('./config/config');
const express = require('express');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/usuario', (req, res) => {
    res.json('GET USUARIOS');
});

// Route
app.post('/usuario', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario"
        });

    } else {
        res.json({
            user: body
        });
    }

});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', (req, res) => {
    res.json('GET USUARIOS');
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});