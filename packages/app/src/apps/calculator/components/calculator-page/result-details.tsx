import React, { FC } from 'react';

import { centsToReal } from '../utils/convert-cents';
import {
  WrapperDetail,
  Separator,
  TitleDetail,
  ItemDetail,
  WrapperItemDetail,
  OverflowWrapper
} from './styled';

type Props = {
  result?: { [key: string]: number };
};

const emptyState = {
  1: 0,
  15: 0,
  30: 0,
  90: 0
};

const ResultDetails: FC<Props> = ({ result = {} }: Props) => {
  const hasResults = Object.keys(result).length;
  const processResults = hasResults ? result : emptyState;
  const hasTomorrow = Object.keys(processResults).includes('1');
  const { 1: tomorrow, ...othersResults } = processResults;

  return (
    <WrapperDetail data-testid="result-details">
      <TitleDetail>você receberá:</TitleDetail>
      <Separator />
      <OverflowWrapper>
        {hasTomorrow && (
          <WrapperItemDetail>
            <ItemDetail data-testid="tomorrow">
              Amanhã: <strong>{centsToReal(tomorrow)}</strong>
            </ItemDetail>
          </WrapperItemDetail>
        )}
        {Object.entries(othersResults).map(([day, value]) => (
          <WrapperItemDetail key={day}>
            <ItemDetail data-testid={day}>
              Em {day} dias: <strong>{centsToReal(value)}</strong>
            </ItemDetail>
          </WrapperItemDetail>
        ))}
      </OverflowWrapper>
    </WrapperDetail>
  );
};

export default ResultDetails;
