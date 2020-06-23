import React from 'react';
import { Layout, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import noSearchEmptyState from '../../icons/searchEmptyState.png';
import { SearchState, TypeBook } from '../../lib/types';
import { Book } from '../Shelf/components/Book';

const { Content } = Layout;

interface Props {
  searchState: SearchState;
  onMoveBook: (book: TypeBook, shelfName: string) => void;
  onShowBook: (book: TypeBook) => void;
}

export const SearchList = ({
  searchState,
  onShowBook,
  onMoveBook,
}: Props) => {
  const emptyState = (
    <div className="empty-state__no-search">
      <img src={noSearchEmptyState} />
    </div>
  );

  return (
    <Content className="content search-content">
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
      {searchState.query === '' ? (
        emptyState
      ) : (
        <div className="shelf-books">
          {Array.isArray(searchState.books) ? (
            searchState.books.map((book) => {
              return (
                <Book
                  key={book.id}
                  book={book}
                  onMoveBook={onMoveBook}
                  showBook={onShowBook}
                />
              );
            })
          ) : (
            emptyState
          )}
          {/* {typeof(searchState.books) === typeof({}) || searchState.books === undefined ? <h2>No Results</h2> : <h2>Results</h2>} */}
        </div>
      )}
    </Content>
  );
};
