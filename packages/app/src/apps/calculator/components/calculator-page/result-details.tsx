import React, { FC } from 'react';

import {
  WrapperDetail,
  Separator,
  TitleDetail,
  ItemDetail,
  WrapperItemDetail
} from './styled';

type Props = {
  result?: { [key: string]: string };
};

const ResultDetails: FC<Props> = ({ result = {} }: Props) => {
  return (
    <WrapperDetail>
      <TitleDetail>você receberá:</TitleDetail>
      <Separator />
      <WrapperItemDetail>
        <ItemDetail>
          Amanhã: <strong>{result['1'] ?? 'R$ 0,00'}</strong>
        </ItemDetail>
      </WrapperItemDetail>
      <WrapperItemDetail>
        <ItemDetail>
          Em 15 dias: <strong>{result['15'] ?? 'R$ 0,00'}</strong>
        </ItemDetail>
      </WrapperItemDetail>
      <WrapperItemDetail>
        <ItemDetail>
          Em 30 dias: <strong>{result['30'] ?? 'R$ 0,00'}</strong>
        </ItemDetail>
      </WrapperItemDetail>
      <WrapperItemDetail>
        <ItemDetail>
          Em 90 dias: <strong>{result['90'] ?? 'R$ 0,00'}</strong>
        </ItemDetail>
      </WrapperItemDetail>
    </WrapperDetail>
  );
};

export default ResultDetails;
