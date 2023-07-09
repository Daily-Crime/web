/**
 * Parses user's question so it can be used as useQuery's
 * query key. That allows us to reuse some of the questions
 * which differ only by casing or non-alphanumeric characters.
 *
 * @param question User's original question
 * @returns string - sanitized question
 */
export const sanitizeQuestion = (question: string) => {
  const regex = /[^A-Za-z0-9]/g;
  const sanitizedQuestion = question
    .trim()
    .toUpperCase()
    .replace(regex, '')
    .trim();
  return sanitizedQuestion;
};
