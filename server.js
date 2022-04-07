const express = require('express');
const app = express();
const cors = require('cors');
require('./server/config/config');

const AutorRouter = require('./server/rutas/autorRuta');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use('/api',AutorRouter);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});