import axios from 'axios';

const api = axios.create({ baseURL: 'https://restcountries.com/v3.1' });

function retUndef(regiao) {
  if(regiao != undefined) return true
  else return false
}

async function returnCountryBasedOnQuery(regiao) {
  const url = retUndef(regiao) ? `/region/${regiao}` : '/all';
  return await api
    .get(url)
    .then(res => {
      let data = res.data;
      data = data.map(item => {
        return {
          nome: item.name.common,
          flag: item.flags.png,
          populacao: item.population,
          lingua: item.languages ? Object.values(item.languages)[0] : 'Unknown'
        }
      });
      return data;
    });
}


export default returnCountryBasedOnQuery;