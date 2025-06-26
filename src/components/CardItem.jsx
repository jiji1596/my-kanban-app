import {
  Card,
  CardContent,
  Typography,
  IconButton,
  TextField,
  Box,
  Stack,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useKanbanStore } from "../store/useKanbanStore"; // adjust the path if needed

export const CardItem = ({ id, text, colId }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const onUpdate = useKanbanStore((s) => s.updateCard);
  const onDelete = useKanbanStore((s) => s.deleteCard);

  const handleSave = () => {
    if (editText.trim() !== "") {
      onUpdate(colId, id, editText); // call parent to update card
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(text);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(colId, id)
  }

  return (
    <Card
      elevation={2}
      sx={{
        mb: 2,
        borderRadius: 2,
        transition: "0.2s ease",
        ":hover": { transform: "scale(1.02)", boxShadow: 6 },
      }}
    >
      <CardContent>
        {isEditing ? (
          <Stack direction="row" spacing={1} alignItems="center">
            <TextField
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              size="small"
              fullWidth
            />
            <IconButton onClick={handleSave}>
              <SaveIcon />
            </IconButton>
            <IconButton onClick={handleCancel}>
              <CancelIcon />
            </IconButton>
          </Stack>
        ) : (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1">{text}</Typography>
            <IconButton onClick={() => setIsEditing(true)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete()}>
              X
            </IconButton>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};
