import React from 'react';
import styled from 'styled-components';
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  border,
  BorderProps,
  flexbox,
  FlexboxProps
} from 'styled-system';

type FlexProps = LayoutProps | SpaceProps | BorderProps | FlexboxProps;

const Flex = styled.div<FlexProps>`
  display: flex;

  ${flexbox}
  ${border}
  ${layout}
  ${space}
`;

export default Flex;
