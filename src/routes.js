import express from 'express';

const app = express();
app.use(express.json());

const movies = [
    {
        id: 1, "title": "MIB",
    },
    {
        id: 2, "title": "Interestelar"
    }
]

app.get('/', (req, res) => {
    res.status(200).send('Projeto Node')
})

app.get('/movies', (req, res) => {
    res.status(200).json(movies)
})


app.post('/movies', (req, res) => {
    movies.push(req.body);
    res.status(201).send('O livro foi cadastrado com sucesso!')
})
export default app 