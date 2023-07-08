import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from 'context';
import { Flex } from 'components';
import { Theme } from 'styles/theme';

const MainWrapper = styled.div.attrs(({ theme }: { theme: Theme }) => {
  const style: React.CSSProperties = {
    color: theme.primaryText,
    backgroundColor: theme.primaryBg,
  };
  return { style };
})<{ theme: Theme }>`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

export const Home = (): JSX.Element => {
  const { theme, themeType, setThemeType } = useContext(AppContext);
  const onChangeThemeClick = () => {
    if (themeType === 'light') {
      setThemeType('dark');
    } else {
      setThemeType('light');
    }
  };

  return (
    <MainWrapper theme={theme}>
      <Flex column align justify>
        <div>(((o(*ﾟ▽ﾟ*)o)))</div>
        <button onClick={onChangeThemeClick}>Reverse theme</button>
      </Flex>
    </MainWrapper>
  );
};
