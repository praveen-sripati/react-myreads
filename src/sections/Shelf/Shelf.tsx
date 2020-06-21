import React from 'react';
import { Typography, Divider, Empty } from 'antd';
import { Book } from './components/Book';
import { TypeShelf, TypeBook } from '../../lib/types';
import NoBooksPlaceholder from '../../icons/No_books.png';

const { Title, Text } = Typography;

interface Props {
  shelf: TypeShelf;
  onMoveBook: (book: TypeBook, shelfName: string) => void;
}

export const Shelf = ({ shelf, onMoveBook }: Props) => {
  let noReadData = null;
  let noWantToReadData = null;
  let noCurrentlyReadingData = null;

  const emptyDescription = (
    <div>
      <Title level={4}>Whoops!</Title>
      <Text style={{ display: 'block' }} type="secondary">
        We can't find any books in this Shelf.
      </Text>
      <Text type="secondary"> Add some books to see them.</Text>
    </div>
  );

  if (shelf.books?.length === 0) {
    noReadData =
      shelf.shelfName === 'Read' ? (
        <Empty
          image={NoBooksPlaceholder}
          imageStyle={{ height: 120 }}
          description={emptyDescription}
        />
      ) : null;
    noWantToReadData =
      shelf.shelfName === 'Want To Read' ? (
        <Empty
          image={NoBooksPlaceholder}
          imageStyle={{ height: 120 }}
          description={emptyDescription}
        />
      ) : null;
    noCurrentlyReadingData =
      shelf.shelfName === 'Currently Reading' ? (
        <Empty
          image={NoBooksPlaceholder}
          imageStyle={{ height: 120 }}
          description={emptyDescription}
        />
      ) : null;
  }
  return (
    <div className="shelf-content">
      <Title className="shelf-title" level={2}>
        {shelf.shelfName}
      </Title>
      <Divider className="divider" />
      <div className="shelf-books">
        {noReadData}
        {noWantToReadData}
        {noCurrentlyReadingData}
        {shelf.books?.map((book) => (
          <Book key={book.id} book={book} onMoveBook={onMoveBook} />
        ))}
      </div>
    </div>
  );
};
