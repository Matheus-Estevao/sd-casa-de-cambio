const CACHE_KEY = '';

const cleanCurrencyInput = () => {
  const currencyInput = document.getElementById('currency-input');
  currencyInput.value = '';
}
const cleanList = () => {
const currencyList = document.getElementById('currency-list');
currencyList.innerHTML = '';
};

const renderBaseCurrencyTitle = (base) => {
  const baseTitle = document.getElementById('title-base');
  baseTitle.innerHTML = `Valores referentes a: 1 ${base}`;
}

const renderRateItemList = (currency, value) => {
const currencylist = document.getElementById('currency-list');
const li = document.createElement('li');
li.innerHTML = `<strong>${currency}:</strong> ${value}`
currencylist.appendChild(li);
};

const renderRates =  (rates) => {
const ratesEntries = Object.entries(rates);
ratesEntries.forEach((entry) => {
  const [currency, value] = entry;
  renderRateItemList(currency,value);
});
};

const handleSearchEvent = async () => {
 const currencyElement = document.getElementById('currency-input');
 const currencyValue = currencyElement.value;
 if(currencyValue === ''){
  alert('Preencha o campo de pesquisa!')
  return
 }
 const object = await fetchExchangeRates(currencyValue);
 localStorage.setItem(CACHE_KEY, JSON.stringify(object));

 cleanList();
 renderRates(object.rates)
 renderBaseCurrencyTitle(object.base)
 cleanCurrencyInput();
};

const setupHtmlElements = () => {
const serchButton = document.getElementById('search-button');
serchButton.addEventListener('click', handleSearchEvent);
};

window.onload = () => {
setupHtmlElements();
const object = JSON.parse(localStorage.getItem(CACHE_KEY));
if(object) {
  const {base, rates} = object;
  renderRates(rates);
  renderBaseCurrencyTitle(base);
}
};