export const realToCents = (value: number): number => value * 100;
export const centsToReal = (value: number): string => {
  const formattedValue = value / 100;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(Number(formattedValue));
};
