import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Typography, Rate, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { TypeBook } from '../../lib/types';

const { Content } = Layout;

const { Title, Text } = Typography;

interface Props {
  book: TypeBook | null;
}

export const BookPage = ({ book }: Props) => {
  const notGiven = <span>Not Given</span>;

  return (
    <Content className="book-page-content ">
      {book ? (
        <div className="book-page-layout">
          <Link to="/">
            <Button
              style={{
                position: 'fixed',
                left: '20px',
                top: '85px',
                width: '50px',
                height: '50px',
              }}
              type="primary"
              shape="circle"
              icon={<ArrowLeftOutlined />}
              size="large"
            ></Button>
          </Link>
          <img
            className="book-page-content-img"
            src={book?.imageLinks.smallThumbnail}
            alt="book-image"
          />
          <div className="book-page-details">
            <Title level={2}>{book?.title}</Title>
            <div>
              <h3>{book?.subtitle}</h3>
              {book.authors[0] ? (
                <Text type="secondary">By {book?.authors[0]}</Text>
              ) : null}
            </div>
            <p>{book?.description.slice(0, 200).concat('...')}</p>
            <p>
              <span className="book-page-details-label">Shelf Name: </span>
              {book.shelf ? book.shelf : notGiven}
            </p>
            <p>
              <span className="book-page-details-label">Published Date: </span>
              {book.publishedDate ? book.publishedDate : notGiven}
            </p>
            <div style={{ marginBottom: '14px' }}>
              <span className="book-page-details-label">Average Rating: </span>
              {book.averageRating ? (
                <Rate
                  disabled
                  defaultValue={Math.round(book?.averageRating)}
                ></Rate>
              ) : (
                notGiven
              )}
            </div>
            <p>
              <span className="book-page-details-label">Ratings Count: </span>
              {book.ratingsCount ? book.ratingsCount : notGiven}
            </p>
            <p>
              <span className="book-page-details-label">Info Link: </span>
              {book.infoLink ? (
                <a href={book.infoLink} target="blank">
                  {' '}
                  {book.infoLink.slice(0, 40).concat('...')}{' '}
                </a>
              ) : (
                notGiven
              )}
            </p>
          </div>
        </div>
      ) : null}
    </Content>
  );
};
