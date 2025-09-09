import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_WrZuIFEsiGKAO7T4T655MVKrg5OvBG5zMT7PamDf');

convertCurrency("INR", "USD", 3);

export async function convertCurrency(fromCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency,

    });
    const multiplier = res.data[toCurrency];
    return multiplier*units;

    console.log(multiplier);
}