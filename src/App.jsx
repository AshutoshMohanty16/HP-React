import { Box, Stack } from "@mui/system";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <Stack direction={"column"}>
      <Header />
      <Box sx={{ marginTop: "48px" }}>
        <Outlet />
      </Box>
    </Stack>
  );
}

export default App;
