import { Icon } from 'components';
import { AnswerType, getColor, getIcon } from 'utils/summarizeAnswer';

type Props = {
  answer: AnswerType;
};

export const AnswerIcon = ({ answer }: Props) => {
  return <Icon icon={getIcon(answer)} color={getColor(answer)} />;
};
