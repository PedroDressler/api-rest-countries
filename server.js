import express from 'express';
import bodyParser from 'body-parser';
import expressEjsLayouts from 'express-ejs-layouts';
import routes from './src/routes/routes.js';

import path from 'path';                                // Para o __dirname funcionar
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3333;
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded());
app.use(expressEjsLayouts);
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Servidor sendo executado na porta http://localhost:${port}`);
})