import returnCountryBasedOnQuery from '../models/country-model.js';

async function getCountries(regiao) {
    const data = await returnCountryBasedOnQuery(regiao);
    return data;
}

export default getCountries;