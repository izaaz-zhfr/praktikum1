const express = require('express');
const app = express();
const port = 8000;

// Endpoint: Konversi dari Desimal
app.get('/convert/decimal/:value', (req, res) => {
    const decimal = parseInt(req.params.value);

    res.json({
        decimal,
        result: {
            binary: decimal.toString(2),
            octal: decimal.toString(8),
            hexadecimal: decimal.toString(16)
        }
    });
});

// Endpoint: Konversi dari Biner
app.get('/convert/binary/:value', (req, res) => {
    const binary = req.params.value;
    const decimal = parseInt(binary, 2);

    res.json({
        binary,
        result: {
            decimal,
            octal: decimal.toString(8),
            hexadecimal: decimal.toString(16)
        }
    });
});

// Endpoint: Konversi dari Oktal
app.get('/convert/octal/:value', (req, res) => {
    const octal = req.params.value;
    const decimal = parseInt(octal, 8);

    res.json({
        octal,
        result: {
            decimal,
            binary: decimal.toString(2),
            hexadecimal: decimal.toString(16)
        }
    });
});

// Endpoint: Konversi dari Hexadesimal
app.get('/convert/hexadecimal/:value', (req, res) => {
    const hexadecimal = req.params.value;
    const decimal = parseInt(hexadecimal, 16);

    res.json({
        hexadecimal,
        result: {
            decimal,
            binary: decimal.toString(2),
            octal: decimal.toString(8)
        }
    });
});

app.listen(8000, () => {
    console.log("Server run on port 8000😘");
});
