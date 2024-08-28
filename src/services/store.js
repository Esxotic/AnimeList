import { create } from "zustand";

export const usePaginationStore = create((set) => ({
  Page: 1,
  TotalPage: 0,
  setPage: (newPage) => set({ Page: newPage }),
  setTotalPage: (newTotalPage) => set({ TotalPage: newTotalPage }),
}));
