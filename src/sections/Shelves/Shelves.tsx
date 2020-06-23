import React from 'react';
import { Shelf } from './Shelf/Shelf';
import { TypeBook, TypeShelves } from '../../lib/types';


interface Props {
  state: TypeShelves;
  onMoveBook: (book: TypeBook, shelfName: string) => void;
  showBook: (book: TypeBook) => void;
}


export const Shelves = ({state, onMoveBook, showBook}: Props) => {
  return (
    <div>
      <Shelf
        shelf={state.currentlyReading}
        onMoveBook={onMoveBook}
        showBook={showBook}
      />
      <Shelf
        shelf={state.wantToRead}
        onMoveBook={onMoveBook}
        showBook={showBook}
      />
      <Shelf shelf={state.read} onMoveBook={onMoveBook} showBook={showBook} />
    </div>
  );
};
