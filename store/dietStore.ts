import { create } from "zustand";

import { Diet } from "@/models/diet";

type DietsStore = {
  diets: Diet[];
  setDiets: (diets: Diet[]) => void;
};

export const useDietsStore = create<DietsStore>((set) => ({
  diets: [],
  setDiets: (diets) => set({ diets }),
}));
