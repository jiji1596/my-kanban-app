import { Stack, Typography } from "@mui/material";
import { Column } from "../components/Column";

export const KanbanBoard = ({ boardData, nextId, addCard }) => {

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        width: "100%",
        maxWidth: "1200px", // limit max width of board
        height: "70vh",
        alignItems: "stretch" // give the board a vertical presence
      }}
    >
      {Array.isArray(boardData) && boardData.map((col) => {
        return (
          <Column
          nextId={nextId}
          key={col.id}
          col={col}
          addCard={addCard} />

        );
      })}
    </Stack>
  );
};
