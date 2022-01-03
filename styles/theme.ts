import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    yellow: {
      "900": "#FFBA08",
      "500": "rgba(255, 186, 8, 0.5)",
    },
    gray: {
      "800": "#47585B",
      "500": "#999999",
      "400": "#DADADA",
      "300": "rgba(153, 153, 153, 0.5)",
      "200": "#F5F8FA",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.200",
      },
    },
  },
});

export default theme;
