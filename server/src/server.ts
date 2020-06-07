import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import { errors } from "celebrate";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Request Param: Parâmetros da própria rota que identificam um recurso;
// Query Param: Parâmetros opcionais, geralmente usados para paginação e filtros;
// Request Body: Parâmetros para criação/atualização de informações.

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);