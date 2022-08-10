import { Router } from "express";
import getCountries from '../controllers/country-controller.js';
const routes = Router();

routes.get('/', (req, res) => {
  res.render('pages/home');
});

routes.get('/regions/:region', async (req, res) => {
  const parametro = req.params.region;
  const pais = await getCountries(parametro);
  res.render('pages/countries', { paises: pais });
});

export default routes;