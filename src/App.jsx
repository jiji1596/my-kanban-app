import "./App.css";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { KanbanBoard } from "./features/KanbanBoard";
import { Box, Container, Typography } from "@mui/material";
import { useKanbanStore } from "./store/useKanbanStore";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import { Navbar } from "./components/Navbar";

function App() {
  const boardData = useKanbanStore((s) => s.boardData);
  const addCard = useKanbanStore((s) => s.addCard);
  const nextId = useKanbanStore((s) => s.nextId);
  const moveCard = useKanbanStore((state) => state.moveCard);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;
    const [fromColId, cardId] = active.id.split("-").map(Number);
    const toColId = Number(over.id);

    moveCard(cardId, fromColId, toColId);
  };

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <DndContext onDragEnd={handleDragEnd}>
        <Navbar handleTheme={handleTheme} isDarkMode={isDarkMode}/>
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
            <KanbanBoard
              nextId={nextId}
              boardData={boardData}
              addCard={addCard}
            />
          </Container>
        </Box>
      </DndContext>
    </ThemeProvider>
  );
}

export default App;
