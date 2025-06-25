import { Paper, Box } from "@mui/material";

export const Column = ({ col }) => {
  return (
    <Box sx={{
        width: "100%",
        height: "100%", // give the board a vertical presence
      }} >
      <h4>{col.title}</h4>
      <Paper
        elevation={3}
        sx={{
          flex: 1, // each column takes equal space
          p: 2,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          height: "100%"
        }}
      >
        Item {col.id}
      </Paper>
    </Box>
  );
};
