import app from '../src/routes.js'

const port = process.env.PORT || 3000;



app.listen(port, () => {
    console.log(`Servidor on na porta: ${port}`);
})