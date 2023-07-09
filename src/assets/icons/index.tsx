import { ReactComponent as Cat } from './Cat.svg';
import { ReactComponent as CircleCheckMark } from './CircleCheckMark.svg';
import { ReactComponent as CircleQuestionMark } from './CircleQuestionMark.svg';
import { ReactComponent as CircleX } from './CircleX.svg';
import { ReactComponent as Moon } from './Moon.svg';
import { ReactComponent as Spin } from './Spin.svg';
import { ReactComponent as Sun } from './Sun.svg';

const icons = {
  Cat,
  CircleCheckMark,
  CircleQuestionMark,
  CircleX,
  Moon,
  Spin,
  Sun,
};

export type IconType = keyof typeof icons;
export default icons;
