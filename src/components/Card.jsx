import { Avatar, Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Card = ({ obj }) => {
  console.log(obj);

  const navigate = useNavigate();

  const goToDetails = () => {
    alert("hi");
  };

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        padding: "1em",
      }}
    >
      <Stack
        direction={"column"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Avatar
          alt={obj.name}
          src={obj.image}
          sx={{ width: 200, height: 200 }}
        />
        <Stack
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <h2>{obj.name}</h2>
          <p>{obj.house}</p>
          <Button
            onClick={() =>
              navigate(`/details`, {
                state: {
                  myObj: obj,
                },
              })
            }
          >
            Know More..
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Card;
