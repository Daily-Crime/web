export type Theme = {
  primaryBg: string;
  secondaryBg: string;
  primaryText: string;
  secondaryText: string;
};

export const theme: { light: Theme; dark: Theme } = {
  light: {
    primaryBg: '#DBC2CF',
    secondaryBg: '#9FA2B2',
    primaryText: '#16262E',
    secondaryText: '#2E4756',
  },
  dark: {
    primaryBg: '#16262E',
    secondaryBg: '#2E4756',
    primaryText: '#DBC2CF',
    secondaryText: '#9FA2B2',
  },
};
