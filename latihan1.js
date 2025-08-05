const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.post("/limas", (req, res) => {
    let luasselimut = Number(req.body.luasselimut)
    let luasalas = Number(req.body.luasalas)
    let tinggi = Number(req.body.tinggi)
    let hasilluas = (luasalas + luasselimut)
    let hasilvolume =  (1/3 * luasalas * tinggi)
    let response = {
        hasilluas : hasilluas,
        hasilvolume : hasilvolume
    }
    res.json(response)
})

app.post("/kubus", (req, res) => {
    let sisi = Number(req.body.sisi)
    let hasilluas = (6 * sisi * sisi)
    let hasilvolume = (sisi * sisi * sisi)
    let response = {
        hasilluas: hasilluas,
        hasilvolume: hasilvolume
    }
    res.json(response)
})

app.post("/balok", (req, res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    hasilluas = (2 * (panjang * lebar) + (panjang * tinggi) + (lebar * tinggi))
    hasilvolume = (panjang * lebar * tinggi)
    let response = {
        hasilluas: hasilluas,
        hasilvolume: hasilvolume
    }
    res.json(response)
})

app.post("/bola", (req, res) => {
    let jari2 = Number(req.body.jari2)
    let hasilluas = (Math.PI * 4 * jari2)
    let hasilvolume = (Math.PI * 4 / 3 * jari2)
    let response = {
        hasilluas : hasilluas,
        hasilvolume : hasilvolume
    }
    res.json(response)
})

app.post

app.listen(8000, () => {
    console.log("Server run di port 8000 😎");
})
