export type NoteTag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export interface Note {
  id: number;
  title: string;
  content: string;
  tag: string;
  createdAt: string;
  updatedAt: NoteTag;
}

export interface NewNoteContent {
  title: string;
  content?: string;
  tag: NoteTag;
}
