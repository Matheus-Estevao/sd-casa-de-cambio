const BASE_URL = "https://api.exchangerate.host";
const LATEST_ENDPOINT = '/latest';

//retorna a URL 
const buildLatestExchangeUrl = (currency) => {
  return `${BASE_URL}${LATEST_ENDPOINT}?base=${currency}`
}

const fetchExchangeRates = async (currency) => {
try{
       const urlToFetch = buildLatestExchangeUrl(currency);
       const response = await fetch(urlToFetch);
       const json = await response.json();

       const exchangeRates = {
       base: json.base,
       rates: json.rates
      }
       return exchangeRates;
    }catch(error){
    console.log(error);
    throw error;
    }
}

fetchExchangeRates("BRL")
.then((exchangeRates) => console.log(exchangeRates))
