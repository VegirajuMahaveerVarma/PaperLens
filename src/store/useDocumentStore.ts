import {create} from 'zustand';
import type {DocumentRecord} from '../types/document';

type Store = {
  documents: DocumentRecord[];
  hydrated: boolean;
  setDocuments: (documents: DocumentRecord[]) => void;
  removeDocument: (id: string) => void;
  setHydrated: (value: boolean) => void;
};

export const useDocumentStore = create<Store>(set => ({
  documents: [],
  hydrated: false,
  setDocuments: documents => set({documents}),
  removeDocument: id => set(state => ({
    documents: state.documents.filter(item => item.id !== id),
  })),
  setHydrated: hydrated => set({hydrated}),
}));
