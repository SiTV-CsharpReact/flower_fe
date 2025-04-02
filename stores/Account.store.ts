import { create } from 'zustand';



type AccountStore = {
  isName: string;
  setIsName: (params: string) => void; 
};

export const useAccountStore = create<AccountStore>((set) => ({
   isName: '',
   setIsName: (isName: string) => set({ isName }),
}));
