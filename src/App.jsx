import "./App.css";
import { DndContext } from "@dnd-kit/core";
import { KanbanBoard } from "./features/KanbanBoard";
import { Box, Container, Typography } from "@mui/material";
import { useKanbanStore } from "./store/useKanbanStore";

function App() {
  const boardData = useKanbanStore((s) => s.boardData);
  const addCard = useKanbanStore((s) => s.addCard);
  const nextId = useKanbanStore((s) => s.nextId);
  const moveCard = useKanbanStore((state) => state.moveCard);


  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;
    const [fromColId, cardId] = active.id.split("-").map(Number);
    const toColId = Number(over.id);

    moveCard(cardId, fromColId, toColId);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              textAlign: "center",
              my: 2,
            }}
          >
            My Kanban
          </Typography>
          <KanbanBoard
            nextId={nextId}
            boardData={boardData}
            addCard={addCard}
          />
        </Container>
      </Box>
    </DndContext>
  );
}

export default App;
