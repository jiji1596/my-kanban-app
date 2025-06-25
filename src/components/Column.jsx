import { useState } from "react";
import { Paper, Box, Typography, Button, Collapse, TextField } from "@mui/material";
import { CardItem } from "./CardItem";
import AddIcon from "@mui/icons-material/Add";

export const Column = ({ col, nextId, addCard }) => {
  console.log("Rendering column:", col.title);
  console.log("Cards:", col.cards);
  const [task, setTask] = useState("");
  const [open, setOpen] = useState(false);

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
        <Box sx={{ mb: 2 }}>
          <Button
            variant="outlined"
            onClick={() => setOpen((prev) => !prev)}
            fullWidth
            sx={{
              height: "48px"
            }}
          >
            {open ? "Cancel"  : <AddIcon fontSize="large" />}
          </Button>

          <Collapse in={open}>
            <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
              <TextField
                fullWidth
                size="small"
                label="Card title"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <Button variant="contained" onClick={() => addCard(task, col.id)}>Add</Button>
            </Box>
          </Collapse>
        </Box>
        {col.cards.map((card) => {
          return <CardItem key={card.id} text={card.text} />;
        })}
      </Paper>
    </Box>
  );
};
