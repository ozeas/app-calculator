import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  border,
  BorderProps,
} from 'styled-system';

type BoxProps = SpaceProps & BorderProps & LayoutProps;

const Box = styled.div<BoxProps>`
  ${border}
  ${layout}
  ${space}
`;

export default Box;