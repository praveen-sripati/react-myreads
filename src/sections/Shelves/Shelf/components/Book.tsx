import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Button, Menu, Dropdown } from 'antd';
import { DownCircleFilled } from '@ant-design/icons';
import { TypeBook } from '../../../../lib/types';

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
  const [clickCard, setClickCard] = useState({ isClicked: false });

  const handleCardClick = (event: any) => {
    event.persist();
    if (
      !(
        event.target.localName === 'button' ||
        event.target.localName === 'path' ||
        event.target.localName === 'li'
      )
    ) {
      setClickCard({ isClicked: true });
      showBook(book);
    }
  };

  const handleMenuClick = (event: EventObject) => {
    setClickCard({ isClicked: false });
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
      <Menu.Item key="0" disabled style={{fontWeight: "bolder"}}>Move To <span role="img" aria-label="Down hand emoji">👇</span></Menu.Item>
      <Menu.Item key="1">Currently Reading</Menu.Item>
      <Menu.Item key="2">Want to Read</Menu.Item>
      <Menu.Item key="3">Read</Menu.Item>
      <Menu.Item key="4">None</Menu.Item>
    </Menu>
  );

  const card = (
    <div className="shelf-books__book" onClick={handleCardClick}>
      <Card
        bordered
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={book.imageLinks ? book.imageLinks.thumbnail:"https://via.placeholder.com/240x300"} />}
      >
        <Meta
          className="book-title-bottom book-description"
          title={book.title}
          description={
            book.subtitle
              ? book.subtitle.length >= 50 ? book.subtitle.slice(0, 45).concat("...") : book.subtitle
              : book.description
              ? book.description.slice(0, 45).concat("...")
              : null
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
  );

  return (
    <div>
      {clickCard.isClicked ? (
        <Redirect push to={`/book/${book.id}`}>
          {card}
        </Redirect>
      ) : (
        card
      )}
    </div>
  );
};
