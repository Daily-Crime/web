import { useAppContext, History } from 'context';
import styled from 'styled-components';

export const AnswerArea = () => {
  const { history } = useAppContext();

  const getAnswer = (answer: string) => {
    const sanitizedAnswer = answer.trim().toUpperCase();
    if (sanitizedAnswer.startsWith('YES')) return '✅';
    if (sanitizedAnswer.startsWith('NO')) return '❌';
    return '❔';
  };

  return (
    <Wrapper>
      <Title>What do we know so far...</Title>
      {history
        .filter((entry: History) => entry?.question && entry?.answer)
        .map((entry: History) => (
          <Entry>
            {getAnswer(entry.answer)} - {entry.question}
          </Entry>
        ))}
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

const Entry = styled.div``;
