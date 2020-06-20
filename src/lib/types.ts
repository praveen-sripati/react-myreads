export interface Book {
  book: Object;
}

export interface Shelf {
  shelfName: string;
  books: Book[];
}

export interface Shelves {
  currentlyReading: Shelf;
  wantToRead: Shelf;
  read: Shelf;
}