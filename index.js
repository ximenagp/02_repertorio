const express = require('express') //importamos express en el proyecto, declarmos la constante, donde requerimos express
const fs = require('fs') //lee y almacena la información (repositario local)
const app = express()
const port = 3000

app.use(express.json()) //para la interaccion de información, crea peticiones con get, push, etc. Desde el cliente hacia el servidor
app.use(express.static('public')) //crear un archivo en el repositorio local
app.listen(port, () => {
    console.log(`server is running ${port}`) //envia el mensaje por consola que se levantó el servidor
})

app.get('/', (req, res) => {
    if (err) throw err //validción por i hay un error
    res.sendFile(__dirname + '/public/index.html'); //levanta el html de la ruta indicada
})

app.post('/canciones', (req, res) => {
    let data = JSON.parse(fs.readFileSync('repertorio.json', 'utf-8')) // guarda los repertorios
    req.body.id = Date.now().toString() //crea un id en base a la fecha
    const { title, artista, tono } = req.body;
    const dataa = { id: Date.now().toString(), title, autor };
    data.push(dataa)
    fs.writeFileSync('repertorio.json', JSON.stringify(data), 'utf-8') //guarda los datos del usuario
    res.json(req.body) //reponde con un json el req.body
})