
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
 const object = await fetchExchangeRates(currencyValue);
 cleanList();
 renderRates(object.rates)
 renderBaseCurrencyTitle(object.base)
 console.log(object)
};

const setupHtmlElements = () => {
const serchButton = document.getElementById('search-button');
serchButton.addEventListener('click', handleSearchEvent);
};

window.onload = () => {
setupHtmlElements();
};