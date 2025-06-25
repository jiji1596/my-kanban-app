import { useState } from "react";
import "./App.css";
import { KanbanBoard } from "./features/KanbanBoard";
import { Box, Container } from '@mui/material';

function App() {
  const [nextId, setNextId] = useState(null);
  const [boardData, SetBoardData] = useState([
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




  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Container maxWidth="lg">
        <KanbanBoard nextId={nextId} boardData={boardData} />
      </Container>
    </Box>
  );
}

export default App;
