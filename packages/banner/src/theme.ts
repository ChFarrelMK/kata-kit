import { ThemeAttributes, variables } from '@kata-kit/theme';

const success: ThemeAttributes = {
  backgroundColor: variables.colors.green01,
  textColor: variables.colors.neutral08
};

const info: ThemeAttributes = {
  backgroundColor: variables.colors.kata01,
  textColor: variables.colors.white
};

const warning: ThemeAttributes = {
  backgroundColor: variables.colors.yellow03,
  textColor: variables.colors.neutral08
};

const error: ThemeAttributes = {
  backgroundColor: variables.colors.red02,
  textColor: variables.colors.white
};

const themes = {
  defaultTheme: error,
  success,
  info,
  warning,
  error
};

export default themes;
