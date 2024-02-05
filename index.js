const express = require('express') //importamos express en el proyecto, declarmos la constante, donde requerimos express
const fs = require('fs') //lee y almacena la información (repositario local)
const app = express()
const port = 3000

app.use(express.json());
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html', err => {
        if (err) throw err;
    });
});

app.post('/canciones', (req, res) => {
    let data = JSON.parse(fs.readFileSync('repertorio.json', 'utf-8'));
    const { title, artista, tono } = req.body;
    const newData = { id: Date.now().toString(), title, autor: artista };
    data.push(newData);
    fs.writeFileSync('repertorio.json', JSON.stringify(data), 'utf-8');
    res.json(newData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
