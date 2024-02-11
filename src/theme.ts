import { createTheme } from "@mui/material";

// Augment the palette to include an transperent color
declare module '@mui/material/styles' {
  interface Palette {
    transperent: Palette['primary'];
    black: Palette['primary'];
    blue: Palette['primary'];
  }

  interface PaletteOptions {
    transperent?: PaletteOptions['primary'];
    black?: PaletteOptions['primary'];
    blue?: PaletteOptions['primary'];
  }
}

// Update the Button's color options to include an transperent option
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    transperent: true;
    black: true
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'Assistant',
  },
  palette: {
    transperent: {
      main: 'transperent',
    },
    black: {
      main: '#3D404A'
    },
    blue: {
      main: "#0D4665"
    }
  },
});