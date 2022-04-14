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

app.get('/movies/:id', (req, res) => {
    let index = searchMovies(req.params.id);
    res.json(movies[index]);
})

app.post('/movies', (req, res) => {
    movies.push(req.body);
    res.status(201).send('O livro foi cadastrado com sucesso!')
})

app.put('/movies/:id', (req, res) => {
    let index = searchMovies(req.params.id);
    movies[index].title = req.body.title;
    res.json(movies);
})

app.delete('/movies/:id', (req, res) => {
    const { id } = req.params.id;
    const index = searchMovies(id);
    movies.splice(index, 1)
    res.json(`Movie ${id} was sucessesfully deleted`);
})

function searchMovies(id){
    return movies.findIndex(movie => movie.id == id);
}
export default app 