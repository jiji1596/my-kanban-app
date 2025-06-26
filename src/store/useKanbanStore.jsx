import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useKanbanStore = create(
  persist(
    (set, get) => ({
      boardData: [
        {
          id: 1,
          title: "To Do",
          cards: [{ id: 1, text: "Buy milk" }],
        },
        {
          id: 2,
          title: "In Progress",
          cards: [{ id: 2, text: "Work on project" }],
        },
        {
          id: 3,
          title: "Done",
          cards: [{ id: 3, text: "Nap" }],
        },
      ],
      nextId: 4,

      addCard: (text, colId) => {
        const board = get().boardData;
        const newCard = { id: get().nextId, text };
        const updatedBoard = board.map((col) =>
          col.id === colId ? { ...col, cards: [...col.cards, newCard] } : col
        );

        set({ boardData: updatedBoard, nextId: get().nextId + 1 });
      },

      updateCard: (colId, cardId, newText) => {
        const board = get().boardData;
        const updatedBoard = board.map((col) => {
          if (col.id !== colId) return col;
          const updatedCards = col.cards.map((card) =>
            card.id === cardId ? { ...card, text: newText } : card
          );
          return { ...col, cards: updatedCards };
        });

        set({ boardData: updatedBoard });
      },
    }),
    {
      name: "kanban-storage",
    }
  )
);
