import { Router } from "express";
import getCountries from '../controllers/country-controller.js';
const routes = Router();

routes.get('/', (req, res) => {
  res.render('pages/home');
});

routes.get('/regions/:region?', async (req, res) => {
  const regiao = req.params.region;
  const countries = await getCountries(regiao);
  res.render('pages/countries', { countries: countries });
});

export default routes;