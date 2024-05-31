import { create } from "zustand";

interface MainSearchStore {
  isComponentHidden: boolean;
  setHidden: () => void;
  setBlock: () => void;
}

const MainSearchStore = create<MainSearchStore>((set) => ({
  isComponentHidden: true,
  setHidden: () =>set({ isComponentHidden: true }),
  setBlock: () => set({ isComponentHidden: false }),
}));

export default MainSearchStore;
