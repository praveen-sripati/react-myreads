import React from 'react';
import { Typography, Divider } from 'antd';
import { Book } from './components/Book';
import { TypeShelf } from '../../lib/types';

const { Title, Paragraph, Text } = Typography;

interface Props {
  shelf: TypeShelf;
}

export const Shelf = ( { shelf }: Props) => {
  return (
    <div className="shelf-content">
      <Title className="shelf-title" level={2}>
        {shelf.shelfName}
      </Title>
      <Divider className="divider" />
      <div className="shelf-books">
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
};
