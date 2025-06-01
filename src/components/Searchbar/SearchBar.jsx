import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function Searchbar({
  location,
  onLocationChange,
  onSearchClick,
}) {
  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", md: "80%" },
          display: "flex",
          gap: "10px",
          alignItems: "flex-end",
          justifyContent: {
            xs: "center",
            sm: "flex-start",
          },
        }}
      >
        <TextField
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          label="Enter Location"
          variant="standard"
          sx={{
            width: {
              xs: "70%",
              md: "60%",
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: (theme) => theme.palette.text.primary,
            },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: (theme) => theme.palette.text.primary,
            },
            "& .MuiInputLabel-root": {
              color: (theme) => theme.palette.text.primary,
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: (theme) => theme.palette.primary.main,
            },
          }}
        />
        <Stack direction="row" gap="5px" alignItems={"flex-end"}>
          <IconButton color="secondary" onClick={onSearchClick}>
            <SearchIcon color="primary" />
          </IconButton>
          <Button
            sx={{
              textTransform: "none",
            }}
            variant="text"
          >
            Arabic
          </Button>
        </Stack>
      </Box>
    </>
  );
}
