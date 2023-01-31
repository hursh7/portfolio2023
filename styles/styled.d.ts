import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      LightMain: string;
      MainGrey: string;
      LightGrey: string;
      black: string;
      white: string;
      orange: string;
    };
  }
}
