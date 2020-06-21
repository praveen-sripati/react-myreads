import React from 'react';
import { Card, Button, Menu, Dropdown } from 'antd';
import { DownCircleFilled } from '@ant-design/icons';
import { TypeBook } from '../../../lib/types';

interface Props {
  book: TypeBook;
  onMoveBook: (book: TypeBook, shelfName: string) => void;
}

interface EventObject {
  key: string;
}

const { Meta } = Card;

export const Book = ({ book, onMoveBook }: Props) => {
  const handleMenuClick = (event: EventObject) => {
    if (event.key === '1') {
      onMoveBook(book, 'currentlyReading');
    } else if(event.key === '2') {
      onMoveBook(book, 'wantToRead');
    } else {
      onMoveBook(book, 'read');
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Currently Reading</Menu.Item>
      <Menu.Item key="2">Want to Reading</Menu.Item>
      <Menu.Item key="3">Read</Menu.Item>
      <Menu.Item key="4">None</Menu.Item>
    </Menu>
  );

  return (
    <div className="shelf-books__book">
      <Card
        bordered
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={book.imageLinks.thumbnail} />}
      >
        <Meta
          className="book-title-bottom book-description"
          title={book.title}
          description={book.subtitle}
        ></Meta>
        {/* <span className="book-author-text-color">{book.authors[0]}</span> */}
        <Dropdown overlay={menu}>
          <Button
            className="book-card-move-button"
            type="primary"
            shape="circle"
            icon={<DownCircleFilled />}
            size="large"
          ></Button>
        </Dropdown>
      </Card>
    </div>
  );
};
