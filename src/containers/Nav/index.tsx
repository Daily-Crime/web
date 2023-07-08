import styled from 'styled-components';

import { Button, Input } from 'components';
import { useAppContext } from 'context';
import { Theme } from 'styles/theme';

export const Nav = () => {
  const { theme, themeType, setThemeType, token, setToken } = useAppContext();

  const onChangeThemeClick = () => {
    if (themeType === 'light') setThemeType('dark');
    else setThemeType('light');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTokenChange = (event: any) => {
    setToken(event.target.value);
  };

  return (
    <Wrapper theme={theme}>
      <Title>DAILY CRIME 0.1.0</Title>
      <Input
        type="password"
        value={token}
        placeholder="Your API token"
        onChange={handleTokenChange}
        isDark
        theme={theme}
      />
      <Button
        icon={themeType === 'light' ? 'Sun' : 'Moon'}
        onClick={onChangeThemeClick}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: space-between;
  position: sticky;
  inset: 0;
  padding: 24px;
  background-color: ${({ theme }) => theme.primaryBg};
`;

const Title = styled.h1`
  margin: 0;
`;
