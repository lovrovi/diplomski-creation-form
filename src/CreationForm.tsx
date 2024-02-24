import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

function CreationForm() {
  const queryClient = new QueryClient();
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default CreationForm;
