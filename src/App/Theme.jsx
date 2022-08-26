import { createTheme } from "@mui/material/styles";
import background from "../Helpers/background.jpg";
import background2 from "../Helpers/background2.jpg";
import gray from "../Helpers/gray.jpg";

export const theme = createTheme({
  typography: {
    fontFamily: "sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        *, *::before, *::after {
          box-sizing: inherit
        }
      
        html: {
          box-sizing: border-box,
        }

        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          background-image: url(${background2});
          background-size: cover;
        }
      `,
    },
  },
});
