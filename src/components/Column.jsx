import { useState } from "react";
import {
  Paper,
  Box,
  Typography,
  Button,
  Collapse,
  TextField,
} from "@mui/material";
import { CardItem } from "./CardItem";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import AddIcon from "@mui/icons-material/Add";

export const Column = ({ col, addCard }) => {
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
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Box sx={{ mb: 2 }}>
            <Button
              variant="outlined"
              onClick={() => setOpen((prev) => !prev)}
              fullWidth
              sx={{
                height: "48px",
              }}
            >
              {open ? "Cancel" : <AddIcon fontSize="large" />}
            </Button>

            <Collapse in={open}>
              <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                <TextField
                  fullWidth
                  size="small"
                  label="Task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
                <Button
                  variant="contained"
                  onClick={() => {
                     if (task.trim() === "") return;
                     addCard(task.trim(), col.id);
                     setTask("");
                    }
                  }
                >
                  Add
                </Button>
              </Box>
            </Collapse>
          </Box>
        </ClickAwayListener>
        {col.cards.map((card) => {
          return <CardItem key={card.id} text={card.text} id={card.id} colId={col.id}  />;
        })}
      </Paper>
    </Box>
  );
};
