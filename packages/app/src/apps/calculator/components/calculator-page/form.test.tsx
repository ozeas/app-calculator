import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Form from './form';

describe('Form Calculator', () => {
  const onSubmit = jest.fn();
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const component = () => render(<Form onSubmit={onSubmit} />);

  const query = (selector): HTMLElement => {
    const { container } = component();
    return container.querySelector(selector);
  };

  describe('initial state', () => {
    it('should render correctly labels fields', () => {
      const saleValueLabel = query('label[for="sale-value"]');
      const installmentsLabel = query('label[for="installments"]');
      const mdrLabel = query('label[for="mdr"]');
      const daysLabel = query('label[for="days"]');

      expect(saleValueLabel.innerHTML).toBe('Informe o valor da venda');
      expect(installmentsLabel.innerHTML).toBe('Em quantas parcelas');
      expect(mdrLabel.innerHTML).toBe('Informe o percentual MDR');
      expect(daysLabel.innerHTML).toBe('Dias a serem calculados');
    });

    it('should render correctly inputs fields', () => {
      const { getByLabelText } = render(<Form onSubmit={onSubmit} />);

      const saleValueInput = getByLabelText('sale-value');
      const installmentsInput = getByLabelText('installments');
      const mdrInput = getByLabelText('mdr');
      const daysInput = getByLabelText('days');

      expect(saleValueInput.getAttributeNames()).toContain('required');
      expect(installmentsInput.getAttributeNames()).toContain('required');
      expect(mdrInput.getAttributeNames()).toContain('required');
      expect(daysInput.getAttributeNames()).not.toContain('required');
    });
  });

  describe('validate errors', () => {
    it('should show errors on required inputs', async () => {
      const { getByLabelText, container } = render(
        <Form onSubmit={onSubmit} />
      );

      await act(async () => {
        await fireEvent.click(getByLabelText('submit-button'));
      });

      const inputErrors = container.querySelectorAll('input[aria-invalid]');

      expect(inputErrors.length).toBe(3);
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  describe('submit form', () => {
    it('should call onSubmit when submit valid form', async () => {
      const { getByLabelText } = render(<Form onSubmit={onSubmit} />);

      const saleValueInput = getByLabelText('sale-value');
      const installmentsInput = getByLabelText('installments');
      const mdrInput = getByLabelText('mdr');

      fireEvent.change(saleValueInput, { target: { value: '15000' } });
      fireEvent.change(installmentsInput, { target: { value: '5' } });
      fireEvent.change(mdrInput, { target: { value: '3' } });

      await act(async () => {
        await fireEvent.click(getByLabelText('submit-button'));
      });

      expect(onSubmit).toHaveBeenCalled();
    });

    it('should disabled elements when isLoading is true', () => {
      const { getByLabelText } = render(<Form onSubmit={onSubmit} isLoading />);

      expect(getByLabelText('sale-value').disabled).toBeTruthy();
      expect(getByLabelText('installments').disabled).toBeTruthy();
      expect(getByLabelText('mdr').disabled).toBeTruthy();
      expect(getByLabelText('days').disabled).toBeTruthy();
      expect(getByLabelText('submit-button').disabled).toBeTruthy();
    });
  });
});
