type InputsProps = {
  amount?: string;
  installments?: string;
  mdr?: string;
};

type Validate = {
  fields: {
    amount?: boolean;
    installments?: boolean;
    mdr?: boolean;
  };
  isValid: boolean;
};

const validateFields = ['amount', 'installments', 'mdr'];

const validate = (data: InputsProps): Validate => {
  const errors = Object.entries(data).reduce((acc, [item, value]) => {
    if (!value && validateFields.includes(item)) {
      return {
        ...acc,
        [item]: true
      };
    }
    return acc;
  }, {});

  return {
    fields: {
      ...errors
    },
    isValid: Object.keys(errors).length === 0
  };
};

export default validate;
