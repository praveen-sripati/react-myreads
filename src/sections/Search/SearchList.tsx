import React, { useState } from 'react';
import { Layout, Button, Affix } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import noSearchEmptyState from '../../icons/searchEmptyState.png';
import { SearchState, TypeBook, FilteredBooks } from '../../lib/types';
import { Book } from '../Shelves/Shelf/components/Book';
import { search } from '../../BooksAPI';

const { Header, Content } = Layout;

interface Props {
  onMoveBook: (book: TypeBook, shelfName: string) => void;
  onShowBook: (book: TypeBook) => void;
}

export const SearchList = ({ onShowBook, onMoveBook }: Props) => {
  //Search State
  const [searchState, setSearchState] = useState<SearchState>({
    query: '',
  });

  const [filteredBooks, setFilteredBooks] = useState<FilteredBooks>({
    books: [],
  });

  const handleSearch = (event: any) => {
    setSearchState({ query: event.target.value });
    searchBooks(searchState.query);
  };

  const searchBooks = async (query: string) => {
    const searchedBooks = await search(searchState.query);
    setFilteredBooks({
      books: searchedBooks,
    });
  };

  const emptyState = (
    <div className="empty-state__no-search">
      <img alt="Empty State Holder" src={noSearchEmptyState} />
    </div>
  );

  return (
    <div>
      <Affix className="header-affix">
        <Header className="search-header header">
          <Link to="/search" className="search-link">
            <input
              className="search"
              type="text"
              name="search"
              placeholder="Search books here.."
              onChange={handleSearch}
            />
          </Link>
        </Header>
      </Affix>
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
            {Array.isArray(filteredBooks.books)
              ? filteredBooks.books.map((book) => {
                  return (
                    <Book
                      key={book.id}
                      book={book}
                      onMoveBook={onMoveBook}
                      showBook={onShowBook}
                    />
                  );
                })
              : emptyState}
          </div>
        )}
      </Content>
    </div>
  );
};
