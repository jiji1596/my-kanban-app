import { Paper, Box, Typography } from "@mui/material";
import { CardItem } from "./CardItem";

export const Column = ({ col, nextId }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%", // give the board a vertical presence
      }}
    >
      <Typography variant="h3" align="center" sx={{ marginBottom: "20px" }}>
        {col.title}
      </Typography>
      <Paper
        elevation={3}
        sx={{
          flex: 1, // each column takes equal space
          p: 2,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          height: "100%",
        }}
      >
        {col.cards.map((card) => {
          return <CardItem key={card.id} text={card.text} />;
        })}
      </Paper>
    </Box>
  );
};
