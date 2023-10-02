import { Avatar, Box } from "@mui/material";
import { Stack } from "@mui/system";
import { useLocation } from "react-router-dom";

const Details = () => {
  const data = useLocation();
  console.log(data);
  return (
    <Box>
      <Stack>
        <Avatar
          alt={data.name}
          src={data.image}
          sx={{ width: 200, height: 200 }}
        />
      </Stack>
    </Box>
  );
};

export default Details;
