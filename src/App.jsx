import { useState } from "react";
import "./App.css";
import { KanbanBoard } from "./features/KanbanBoard";
import { Box, Container } from "@mui/material";

function App() {
  const [nextId, setNextId] = useState(7);
  const [boardData, setBoardData] = useState([
    {
      id: 1,
      title: "To Do",
      cards: [
        { id: 1, text: "eat" },
        { id: 2, text: "sleep" },
        { id: 3, text: "code" },
      ],
    },
    {
      id: 2,
      title: "In Progress",
      cards: [
        { id: 4, text: "eat" },
        { id: 5, text: "sleep" },
      ],
    },
    {
      id: 3,
      title: "Done",
      cards: [{ id: 6, text: "Wash dishes" }],
    },
  ]);

  function addCard(task, colId) {
    console.log("Adding task:", task, "to column:", colId);
    setBoardData((prev) => {
      const updated = prev.map((column) =>
        column.id === colId
          ? {
              ...column,
              cards: [...column.cards, { id: nextId, text: task }],
            }
          : column
      );
      console.log("Updated board:", updated); // 👈 Check if the card is added here
      return updated;
    });
    setNextId((id) => id + 1);
  }

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
