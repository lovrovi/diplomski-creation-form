import { Box, Paper } from "@mui/material";
import Form from "./components/Form/Form";

function App() {
  return (
    <Box display="flex" justifyContent="center">
      <Paper sx={{ px: 8, py: 4, minWidth: "30rem" }}>
        <Form />
      </Paper>
    </Box>
  );
}

export default App;
