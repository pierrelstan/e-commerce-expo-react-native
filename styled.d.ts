// // import original module declarations
// import "styled-components";

// and extend them!
declare module "styled-components/native" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}
