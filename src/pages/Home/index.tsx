import React, { useState } from 'react';
import styled from 'styled-components';

import { useAppContext } from 'context';
import { Theme } from 'styles/theme';
import { AnswerArea, QuestionArea, Nav } from 'containers';

export const Home = (): JSX.Element => {
  const { theme } = useAppContext();
  const [finalInput, setFinalInput] = useState<string>('');

  return (
    <MainWrapper theme={theme}>
      <Nav />
      <Content>
        <QuestionArea finalInput={finalInput} setFinalInput={setFinalInput} />
        <AnswerArea />
      </Content>
    </MainWrapper>
  );
};

const MainWrapper = styled.div.attrs(({ theme }: { theme: Theme }) => {
  const style: React.CSSProperties = {
    color: theme.secondaryText,
    backgroundColor: theme.secondaryBg,
  };
  return { style };
})<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  gap: 24px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;
