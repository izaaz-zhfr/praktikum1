const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/bmi", (req, res) => {
    const tinggi = parseFloat(req.body.tinggi); // dalam meter
    const berat = parseFloat(req.body.berat);   // dalam kg

    if (!tinggi || !berat) {
        return res.status(400).json({ message: "Data tidak lengkap" });
    }

    const bmi = berat / (tinggi * tinggi);
    let status = "";

    if (bmi < 18.5) status = "Kurus";
    else if (bmi < 25) status = "Normal";
    else if (bmi < 30) status = "Gemuk";
    else status = "Obesitas";

    res.json({
        tinggi,
        berat,
        bmi: bmi.toFixed(2),
        status,
    });
});

app.listen(8000, () => {
    console.log("Server run on port 8000😘");
})
