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
          color: "rgba(235,65,85,0.8)"
        },
        {
          id: 2,
          title: "In Progress",
          cards: [{ id: 2, text: "Work on project" }],
          color: "rgba(78,176,224,0.8)"
        },
        {
          id: 3,
          title: "Done",
          cards: [{ id: 3, text: "Nap" }],
          color: "rgba(170,243,162,0.8)"
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

      deleteCard: (colId, cardId) => {
        const board = get().boardData;
        const updatedBoard = board.map((col) => {
          if (col.id !== colId) return col;
          const updatedCards = col.cards.filter((card) => card.id !== cardId);
          return { ...col, cards: updatedCards };
        });

        set({ boardData: updatedBoard });
      },
      moveCard: (cardId, fromColId, toColId) => {
        const board = get().boardData;
        let movingCard;

        const updatedBoard = board
          .map((col) => {
            if (col.id === fromColId) {
              const newCards = col.cards.filter((card) => {
                if (card.id === cardId) {
                  movingCard = card;
                  return false;
                }
                return true;
              });
              return { ...col, cards: newCards };
            }
            return col;
          })
          .map((col) => {
            if (col.id === toColId && movingCard) {
              return { ...col, cards: [...col.cards, movingCard] };
            }
            return col;
          });

        set({ boardData: updatedBoard });
      },
    }),
    {
      name: "kanban-storage",
    }
  )
);
