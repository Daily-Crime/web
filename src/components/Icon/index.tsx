import React from 'react';
import styled from 'styled-components';

import icons, { IconType as AssetIconType } from 'assets/icons';
import { Size } from 'components';

type Props = {
  className?: string;
  spin?: boolean;
  icon: AssetIconType;
  size?: Size | number;
} & Omit<React.CSSProperties, 'width' | 'height'>;

export const Icon = (props: Props): JSX.Element => {
  const { className, spin = false, size = Size.MICRO, icon, ...style } = props;
  const SVG = icons[icon];

  return (
    <StyledSVG className={className} style={style} size={size} spin={spin}>
      <SVG />
    </StyledSVG>
  );
};

const StyledSVG = styled.span<{
  size: Size;
  spin: boolean;
}>`
  min-height: ${({ size }) => size}rem;
  max-height: ${({ size }) => size}rem;
  svg {
    ${({ spin }) => spin && `animation: rotation 2s infinite linear;`}
    display: block;
    margin: 0 auto;
    min-height: ${({ size }) => size}rem;
    max-height: ${({ size }) => size}rem;
    height: ${({ size }) => size}rem;
    width: ${({ size }) => size}rem;
    path {
      fill: currentColor;
    }
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

export type IconType = AssetIconType;
