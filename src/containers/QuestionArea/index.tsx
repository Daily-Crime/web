import { Suspense, useState, useTransition } from 'react';
import styled from 'styled-components';

import { useAI } from 'hooks/useAI';
import { Button, Icon, Input } from 'components';
import { useAppContext } from 'context';

type Props = {
  finalInput: string;
  setFinalInput: (finalInput: string) => void;
};

export const QuestionArea = (props: Props) => {
  const { finalInput, setFinalInput } = props;
  const [isPending, startTransition] = useTransition();
  const { theme, token } = useAppContext();
  const [input, setInput] = useState<string>('');

  const initialStory =
    'Story: Jack and Judy were two goldfish that swam in a small, round aquarium placed on a shelf. The shelf was hanging on a wall about two meters above the floor. One afternoon, a cat sneaked into the room through the window. He jumped on the shelf where the aquarium was placed and accidentally pushed the aquarium. It was not on purpose. Aquarium fell off the shelf and shattered against the ground. Since there was nobody home, no one could help the goldfish and they died a few minutes later because of suffocation.';

  const { answer } = useAI({
    question: finalInput,
    initialStory,
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
      <Suspense
        fallback={
          <StyledAnswer>
            <Icon icon="Spin" spin />
          </StyledAnswer>
        }>
        {
          <StyledAnswer>
            {isPending ? <Icon icon="Spin" spin /> : answer}
          </StyledAnswer>
        }
      </Suspense>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledAnswer = styled.div`
  width: 500px;
  height: 50px;
`;
