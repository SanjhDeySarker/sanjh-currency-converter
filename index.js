import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_WrZuIFEsiGKAO7T4T655MVKrg5OvBG5zMT7PamDf');

//convert formCurrency to toCurrency units

export async function convertCurrency(fromCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency,

    });
    const multiplier = res.data[toCurrency];
    return multiplier*units;

    console.log(multiplier);
}