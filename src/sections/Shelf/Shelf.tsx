import React from 'react';
import { Typography, Divider, Empty } from 'antd';
import { Book } from './components/Book';
import { TypeShelf, TypeBook } from '../../lib/types';

const { Title } = Typography;

interface Props {
  shelf: TypeShelf;
  onMoveBook: (book: TypeBook, shelfName: string) => void;
}

export const Shelf = ({ shelf, onMoveBook }: Props) => {
  return (
    <div className="shelf-content">
      <Title className="shelf-title" level={2}>
        {shelf.shelfName}
      </Title>
      <Divider className="divider" />
      <div className="shelf-books">
        {shelf.books?.map((book) => (
          <Book key={book.id} book={book} onMoveBook={onMoveBook} />
        ))}
      </div>
    </div>
  );
};
