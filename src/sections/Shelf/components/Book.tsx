import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Card, Button, Menu, Dropdown } from 'antd';
import { DownCircleFilled } from '@ant-design/icons';
import { TypeBook } from '../../../lib/types';

interface Props {
  book: TypeBook;
  onMoveBook: (book: TypeBook, shelfName: string) => void;
  showBook: (book: TypeBook) => void;
}

interface EventObject {
  key: string;
}

const { Meta } = Card;

export const Book = ({ book, onMoveBook, showBook }: Props) => {
  const handleCardClick = (event: any) => {
    event.persist();
    if (
      event.target.localName === 'button' ||
      event.target.localName === 'path' ||
      event.target.localName === 'li'
    ) {
      return;
    } else {
      showBook(book);
    }
  };

  const handleMenuClick = (event: EventObject) => {
    switch (event.key) {
      case '1':
        onMoveBook(book, 'currentlyReading');
        break;
      case '2':
        onMoveBook(book, 'wantToRead');
        break;
      case '3':
        onMoveBook(book, 'read');
        break;
      default:
        break;
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
    <Link to="/book">
      <div className="shelf-books__book" onClick={handleCardClick}>
        <Card
          bordered
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={book.imageLinks.thumbnail} />}
        >
          <Meta
            className="book-title-bottom book-description"
            title={book.title}
            description={
              book.subtitle ? book.subtitle : book.description.slice(0, 50)
            }
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
    </Link>
  );
};
