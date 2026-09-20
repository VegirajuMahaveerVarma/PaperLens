export type DocumentKind = 'scan' | 'pdf' | 'image';

export type DocumentRecord = {
  id: string;
  title: string;
  kind: DocumentKind;
  uri: string;
  pageCount: number;
  createdAt: string;
  mimeType: string;
};
