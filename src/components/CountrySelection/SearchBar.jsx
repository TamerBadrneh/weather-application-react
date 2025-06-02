import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function CountrySelection({
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
        <FormControl
          variant="standard"
          sx={{
            width: { xs: "70%", md: "60%" },
            "& .MuiInputLabel-root": {
              color: (theme) => theme.palette.text.primary,
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: (theme) => theme.palette.primary.main,
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: (theme) => theme.palette.text.primary,
            },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: (theme) => theme.palette.text.primary,
            },
          }}
        >
          <InputLabel id="location-label">Select Location</InputLabel>
          <Select
            labelId="location-label"
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            label="Select Location"
          >
            {[
              "Amman",
              "Irbid",
              "Zarqa",
              "Balqa",
              "Madaba",
              "Karak",
              "Tafilah",
              "Ma'an",
              "Aqaba",
              "Jerash",
              "Ajloun",
              "Mafraq",
            ].map((place) => (
              <MenuItem key={place} value={place}>
                {place}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
