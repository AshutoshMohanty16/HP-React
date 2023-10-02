import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#B8BC86",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
      }}
    >
      <Toolbar variant="dense">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
              <Typography
                sx={{
                  color: "#00518d",
                  fontWeight: 900,
                  fontSize: "28px",
                  letterSpacing: 1,
                  fontFamily: '-apple-system'
                }}
              >
                Harry Potter
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

      </Toolbar>
    </AppBar>
  );
};

export default Header;
