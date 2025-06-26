import { useState } from "react";
import "./App.css";
import { KanbanBoard } from "./features/KanbanBoard";
import { Box, Container } from "@mui/material";
import { useKanbanStore } from "./store/useKanbanStore";

function App() {
  const boardData = useKanbanStore((s) => s.boardData);
  const addCard = useKanbanStore((s) => s.addCard);
  const nextId = useKanbanStore((s) => s.nextId);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <KanbanBoard nextId={nextId} boardData={boardData} addCard={addCard} />
      </Container>
    </Box>
  );
}

export default App;
