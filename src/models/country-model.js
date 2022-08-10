import axios from 'axios';

const api = axios.create({ baseURL: 'https://restcountries.com/v3.1/region' });

async function returnCountryBasedOnQuery(parametro) {
  return await api
    .get(`/${parametro}`)
    .then(data => {
    })
}


export default returnCountryBasedOnQuery;