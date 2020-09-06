type InputsProps = {
  amount?: string;
  installments?: string;
  mdr?: string;
  days?: string;
};

type ParseValuesForm = {
  amount?: number;
  installments?: number;
  mdr?: number;
  days?: number[];
};

const processFormat = {
  amount: (value: string): string =>
    String(value).replace('R$ ', '').replace(/\./g, '').replace(',', '.'),
  installments: (value: string): number => parseInt(value.replace(',', '.')),
  mdr: (value: string): number =>
    parseFloat(value.replace(',', '.').replace('%', '')),
  days: (value: string): number[] => {
    const daysList = String(value).split(',');
    const parsedValues = daysList.reduce((acc: number[], current) => {
      const parsedDay = Number(current.replace(/[^\d]/g, ''));
      if (parsedDay) {
        return [...acc, parsedDay];
      }
      return acc;
    }, []);

    return parsedValues;
  }
};

const parseValuesForm = (data: InputsProps): ParseValuesForm => {
  const parsedValues = Object.entries(data).reduce(
    (acc: ParseValuesForm, [item, value]) => {
      return {
        ...acc,
        [item]: processFormat[item](value)
      };
    },
    {}
  );

  return parsedValues;
};

export default parseValuesForm;
