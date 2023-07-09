import styled from 'styled-components';

import { useAppContext, Answer } from 'context';
import { AnswerIcon } from './AnswerIcon';

export const AnswerArea = () => {
  const { history } = useAppContext();
  const answers = Object.entries(history).filter(entry => entry[1].length > 0);

  return (
    <Wrapper>
      <Title>What do we know so far...</Title>
      <Columns>
        {answers.map(([type, history]: [string, Answer[]]) => (
          <Column key={`column-${type}`}>
            {history.map((entry: Answer, index: number) => (
              <Entry key={`answer-${index}-${entry.question}`}>
                <AnswerIcon answer={entry.answer} /> - {entry.question}
              </Entry>
            ))}
          </Column>
        ))}
      </Columns>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 24px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Entry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  font-size: 1.2em;
`;

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 30vw;
  max-width: 30vw;
`;
