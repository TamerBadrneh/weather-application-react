import { Box, Button, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function Searchbar({
  location,
  onLocationChange,
  onSearchClick,
}) {
  return (
    <>
      <Box
        width="80%"
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "flex-end",
        }}
      >
        <TextField
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          label="Enter Location"
          variant="standard"
          sx={{
            width: "60%",
          }}
        />
        <IconButton onClick={onSearchClick}>
          <SearchIcon />
        </IconButton>
        <Button variant="text">Arabic</Button>
      </Box>
    </>
  );
}
