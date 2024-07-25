import {
  CSSReset,
  ColorModeProvider,
  ThemeProvider,
  theme,
} from "@chakra-ui/react";
import ThemeToggler from "./components/ThemeToggler";
import Form from "./components/Form";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ThemeToggler />
        <Form />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
