import { Suspense, useState, useTransition } from 'react';
import styled from 'styled-components';

import { useAI } from 'hooks/useAI';
import { Button, Icon, Input } from 'components';
import { useAppContext } from 'context';

import story from 'data/story_23-07-09.json';

type Props = {
  finalInput: string;
  setFinalInput: (finalInput: string) => void;
};

export const QuestionArea = (props: Props) => {
  const { finalInput, setFinalInput } = props;
  const [isPending, startTransition] = useTransition();
  const { theme, token } = useAppContext();
  const [input, setInput] = useState<string>('');

  const { answer } = useAI({
    question: finalInput,
    initialStory: story.initialStory,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (event: any) => {
    setInput(event.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onKeyDown = (event: any) => {
    if (event.key !== 'Enter') return;
    handleSend();
  };

  const handleSend = async () => {
    if (!input?.length) {
      alert('Question cannot be empty');
      return;
    }
    if (!token) {
      alert('You must provide API token');
      return;
    }

    startTransition(() => {
      setInput('');
      setFinalInput(input);
    });
  };

  return (
    <Wrapper>
      <StoryPrompt>{story.prompt}</StoryPrompt>
      <InputArea>
        <Input
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={input}
          placeholder="Your question..."
          theme={theme}
        />
        <Button
          onClick={handleSend}
          label="Send"
          disabled={!token}
          title={!token ? 'You need to provide an API token' : ''}
        />
      </InputArea>
      <Suspense
        fallback={
          <StyledAnswerType>
            <Icon icon="Spin" spin />
          </StyledAnswerType>
        }>
        {
          <StyledAnswerType>
            {isPending ? <Icon icon="Spin" spin /> : <>🕵️: {answer}</>}
          </StyledAnswerType>
        }
      </Suspense>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 600px;
`;

const StoryPrompt = styled.div`
  font-family: 'Special Elite';
  font-size: 1.5em;
  text-align: center;
`;

const InputArea = styled.div`
  display: flex;
  flex: 1 1 100%;

  & > input {
    flex-grow: 1;
  }

  & > button {
    width: 90px;
  }
`;

const StyledAnswerType = styled.div`
  /* display: flex;
  align-items: center; */
  font-size: 1.4em;
`;
