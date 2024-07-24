import { Box, Button, Typography } from "@mui/material";

const PageError = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "300px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "currentLine.main",
            alignItems: "center",
            width: "80%",
            marginTop: "20px",
          }}
        >
          <Typography color="foreGround.main">
            سرور با خطا مواجه شده است لطفا دوباره تلاش کنید .....!!!
          </Typography>

          <Button
            sx={{ marginTop: "30px" }}
            color="purple"
            variant="contained"
            onClick={() => window.location.reload()}
          >
            تلاش مجدد
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PageError;
