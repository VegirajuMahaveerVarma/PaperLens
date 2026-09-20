import AsyncStorage from '@react-native-async-storage/async-storage';
import type {DocumentRecord} from '../types/document';

const KEY = '@paperlens/documents/v1';

export async function loadDocuments(): Promise<DocumentRecord[]> {
  const raw = await AsyncStorage.getItem(KEY);
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed as DocumentRecord[] : [];
  } catch {
    return [];
  }
}

export async function saveDocuments(documents: DocumentRecord[]) {
  await AsyncStorage.setItem(KEY, JSON.stringify(documents));
}
