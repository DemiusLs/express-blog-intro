import express from "express"


const app = express()

console.log(express)
const port = 3000


app.use(express.static("public"));


app.get('/', (req, res) => {
    const resData = {
        data: "Server del mio blog",
    };

    res.json(resData.data);
})


app.get('/bacheca', (req, res) => {


    res.json(posts);
})


app.listen(port, () => {
    console.log("Server in ascolto");
});


const posts = [
    {
        "titolo": "Ciambellone soffice alla vaniglia",
        "contenuto": "Un classico dolce da colazione: il ciambellone soffice alla vaniglia, facile da preparare e perfetto per ogni occasione.",
        "immagine": "images/ciambellone.jpeg",
        "tags": ["Dolci", "Colazione", "Ciambellone", "Vaniglia"]
    },
    {
        "titolo": "Cracker croccanti alla barbabietola",
        "contenuto": "Colorati e salutari, questi cracker alla barbabietola sono ideali come snack o antipasto leggero e ricco di fibre.",
        "immagine": "images/cracker_barbabietola.jpeg",
        "tags": ["Salati", "Vegetariani", "Barbabietola", "Snack"]
    },
    {
        "titolo": "Pane fritto dolce della tradizione",
        "contenuto": "Una ricetta povera ma irresistibile: fette di pane raffermo fritte e zuccherate, come si faceva una volta.",
        "immagine": "images/pane_fritto_dolce.jpeg",
        "tags": ["Dolci", "Tradizione", "Riciclo", "Fritti"]
    },
    {
        "titolo": "Pasta rossa alla barbabietola",
        "contenuto": "Un primo piatto scenografico e gustoso: pasta cremosa con salsa di barbabietola, ricotta e noci.",
        "immagine": "images/pasta_barbabietola.jpeg",
        "tags": ["Primi", "Vegetariani", "Barbabietola", "Colorato"]
    },
    {
        "titolo": "Torta paesana lombarda",
        "contenuto": "La torta paesana è un dolce rustico e ricco di sapore, tipico della Lombardia, a base di pane, cacao e frutta secca.",
        "immagine": "images/torta_paesana.jpeg",
        "tags": ["Dolci", "Tradizionale", "Lombardia", "Riciclo"]
    }
]