import "styled-components";
interface IPalette {
  main: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
        grey: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
