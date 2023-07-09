import styled from 'styled-components';
import { Theme } from 'styles/theme';

export const Input = styled.input<{ isDark?: boolean; theme: Theme }>`
  font-size: 1.1em;
  padding: 12px 8px;
  background-color: ${({ isDark, theme }) =>
    isDark ? theme.secondaryBg : '#e9e9e9'};
  border: ${({ isDark, theme }) =>
    isDark ? 'none' : `5px solid ${theme.primaryBg}`};
  box-sizing: border-box;
`;
