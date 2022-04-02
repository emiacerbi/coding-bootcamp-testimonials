// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      100: "#221e39",
      200: "#babacf",
    },
  },

  styles: {
    global: {
        body: {
          alignItems: 'center',
          display: 'flex',
          fontFamily: "'Inter', sans-serif",
          justifyContent: 'center',
          minHeight: '100vh',
        }
    }
  }

});

export default theme;

// --Dark-Blue: #202046;
// --Grayish-Blue: #babacf;
