import { IconType } from 'components';

export enum AnswerType {
  'YES' = 'YES',
  'NO' = 'NO',
  'INVALID' = 'INVALID',
}

/**
 * Summarizes an answer to always equal only to YES, NO or INVALID.
 * @param answer WriteSonic's answer
 * @returns AnswerType
 */
export const getSummarizedAnswerType = (answer: string) => {
  const sanitizedAnswerType = answer.trim().toUpperCase();
  if (sanitizedAnswerType.startsWith('YES')) return AnswerType.YES;
  if (sanitizedAnswerType.startsWith('NO')) return AnswerType.NO;
  return AnswerType.INVALID;
};

/**
 * Returns an IconType based on the provided answer
 * @param answer WriteSonic's answer
 * @returns IconType
 */
export const getIcon = (answer: AnswerType): IconType => {
  if (answer === AnswerType.YES) return 'CircleCheckMark';
  if (answer === AnswerType.NO) return 'CircleX';
  return 'CircleQuestionMark';
};

/**
 * Returns a color based on the provided answer
 * @param answer WriteSonic's answer
 * @returns Color
 */
export const getColor = (answer: AnswerType): string => {
  if (answer === AnswerType.YES) return '#00ff00';
  if (answer === AnswerType.NO) return '#ff0000';
  return '#999999';
};
