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
          }}
        />
        <Stack direction="row" gap="5px" alignItems={"flex-end"}>
          <IconButton onClick={onSearchClick}>
            <SearchIcon />
          </IconButton>
          <Button variant="text">Arabic</Button>
        </Stack>
      </Box>
    </>
  );
}
