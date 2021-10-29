/* eslint-disable linebreak-style */
export const currencyConfig = (
  locale = 'pt-BR',
  style = 'currency',
  currency = 'BRL',
  minimumFractionDigits = 2,
  maximumFractionDigits = 2,
) => {
  const currencyConfigVar = {
    locale,
    formats: {
      number: {
        BRL: {
          style,
          currency,
          minimumFractionDigits,
          maximumFractionDigits,
        },
      },
    },
  };
  return currencyConfigVar;
};
