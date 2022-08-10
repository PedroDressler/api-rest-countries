import returnCountryBasedOnQuery from '../models/country-model.js';

async function getCountries(parametro){
    const data = await returnCountryBasedOnQuery(parametro);
    return data;
}

export default getCountries;