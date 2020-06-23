export interface ImageObject {
  smallThumbnail: string;
  thumbnail: string;
}

export interface TypeBook {
  allowAnonLogging: boolean;
  authors: string[];
  averageRating: number;
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  description: string;
  id: string;
  imageLinks: ImageObject;
  industryIdentifiers: Object[];
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: Object;
  previewLink: string;
  printType: string;
  publishedDate: string;
  publisher: string;
  ratingsCount: number;
  readingModes: Object;
  shelf: string;
  subtitle: string;
  title: string;
}

export interface TypeShelf {
  shelfName: string;
  books: TypeBook[] | null;
}

export interface TypeShelves {
  currentlyReading: TypeShelf;
  wantToRead: TypeShelf;
  read: TypeShelf;
  loading: boolean;
}

export interface ShowBookState {
  book: TypeBook | null;
}

export interface SearchState{
  query: string;
}

export interface FilteredBooks{
  books: TypeBook[];
}
