import { create } from "zustand";

type DayStore = {
  days: string[];
};

export const useDayStore = create<DayStore>((set) => ({
  days: [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ],
}));
