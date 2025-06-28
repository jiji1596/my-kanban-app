import {
  Card,
  CardContent,
  Typography,
  IconButton,
  TextField,
  Box,
  Stack,
} from "@mui/material";
import { useDraggable } from "@dnd-kit/core";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Close";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { useState } from "react";
import { useKanbanStore } from "../store/useKanbanStore"; // adjust the path if needed

export const CardItem = ({ id, text, colId, color}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const onUpdate = useKanbanStore((s) => s.updateCard);
  const onDelete = useKanbanStore((s) => s.deleteCard);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${colId}-${id}`,
  });

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
    onDelete(colId, id);
  };

  return (
    <Card
      elevation={2}
      sx={{
        mb: 2,
        borderRadius: 2,
        bgcolor: color,
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : undefined,
      }}
      ref={setNodeRef}
      {...attributes}
    >
      <CardContent>
        {isEditing ? (
          <Stack direction="row" spacing={1} alignItems="center">
            <TextField
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              size="small"
              sx={{
                width: "100%",
              }}
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
            <Box {...listeners} sx={{ cursor: "grab", pr: 1, display: "flex", alignItems: "center" }}>
              <DragIndicatorIcon />
            </Box>
            <Typography
              variant="body1"
              sx={{
                width: "100%",
                wordWrap: "break-word",
                wordBreak: "break-word", // ensures breaking inside long words
                whiteSpace: "pre-wrap", // preserves spaces and breaks
              }}
            >
              {text}
            </Typography>
            <IconButton onClick={() => setIsEditing(true)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete()}>X</IconButton>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};
