const express = require('express');
const app = express();
const port = 8000;

// Endpoint: Konversi dari Celcius
app.get('/convert/celcius/:value', (req, res) => {
    const celcius = parseFloat(req.params.value);
    const reamur = celcius * 4 / 5;
    const fahrenheit = (celcius * 9 / 5) + 32;
    const kelvin = celcius + 273;

    res.json({
        celcius: req.params.value,
        result: {
            reamur,
            fahrenheit,
            kelvin
        }
    });
});

// Endpoint: Konversi dari Reamur
app.get('/convert/reamur/:value', (req, res) => {
    const reamur = parseFloat(req.params.value);
    const celcius = reamur * 5 / 4;
    const fahrenheit = (celcius * 9 / 5) + 32;
    const kelvin = celcius + 273;

    res.json({
        reamur: req.params.value,
        result: {
            celcius,
            fahrenheit,
            kelvin
        }
    });
});

// Endpoint: Konversi dari Kelvin
app.get('/convert/kelvin/:value', (req, res) => {
    const kelvin = parseFloat(req.params.value);
    const celcius = kelvin - 273;
    const fahrenheit = (celcius * 9 / 5) + 32;
    const reamur = celcius * 4 / 5;

    res.json({
        kelvin: req.params.value,
        result: {
            celcius,
            fahrenheit: parseFloat(fahrenheit.toFixed(2)),
            reamur: parseFloat(reamur.toFixed(2))
        }
    });
});

// Endpoint: Konversi dari Fahrenheit
app.get('/convert/fahrenheit/:value', (req, res) => {
    const fahrenheit = parseFloat(req.params.value);
    const celcius = (fahrenheit - 32) * 5 / 9;
    const reamur = celcius * 4 / 5;
    const kelvin = celcius + 273;

    res.json({
        fahrenheit: req.params.value,
        result: {
            celcius: parseFloat(celcius.toFixed(2)),
            reamur: parseFloat(reamur.toFixed(2)),
            kelvin: parseFloat(kelvin.toFixed(2))
        }
    });
});

app.listen(8000, () => {
    console.log("Server run on port 8000😘");
});
