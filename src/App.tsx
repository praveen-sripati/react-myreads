import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Input, Affix, Spin, Button } from 'antd';
import './App.css';
import { TypeBook, TypeShelves, ShowBookState, SearchState } from './lib/types';
import { update, getAll } from './BooksAPI';
import { Shelf } from './sections/Shelf/Shelf';
import { SearchList } from './sections/Search/SearchList';
import { search } from './BooksAPI';
import { BookPage } from './sections/BookPage/BookPage';
import {
  GithubOutlined,
  LinkedinFilled,
  PlusOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

function App() {
  //App State
  const [state, setState] = useState<TypeShelves>({
    currentlyReading: { shelfName: 'Currently Reading', books: null },
    wantToRead: { shelfName: 'Want To Read', books: null },
    read: { shelfName: 'Read', books: null },
    loading: true,
  });

  //Book Page State
  const [showBookState, setShowBookState] = useState<ShowBookState>({
    book: null,
  });

  //Search State
  const [searchState, setSearchState] = useState<SearchState>({
    query: '',
    books: [],
  });

  const getAllBooks = async () => {
    const books: TypeBook[] = await getAll();

    console.log(books);
    const currentlyReadingData: TypeBook[] = [];
    const wantToReadData: TypeBook[] = [];
    const readData: TypeBook[] = [];

    for (const book of books) {
      if (book.shelf === 'currentlyReading') {
        currentlyReadingData.push(book);
      } else if (book.shelf === 'wantToRead') {
        wantToReadData.push(book);
      } else {
        readData.push(book);
      }
    }

    setState({
      currentlyReading: {
        shelfName: 'Currently Reading',
        books: currentlyReadingData,
      },
      wantToRead: { shelfName: 'Want To Read', books: wantToReadData },
      read: { shelfName: 'Read', books: readData },
      loading: false,
    });
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const moveBook = useCallback(async (book: TypeBook, shelfName: string) => {
    await update(book, shelfName);
    getAllBooks();
  }, []);

  const showBook = (book: TypeBook) => {
    setShowBookState({ book });
  };

  const handleSearch = (event: any) => {
    setSearchState({ query: event.target.value, books: [] });
    searchBooks(searchState.query);
  };

  const searchBooks = async (query: string) => {
    const searchedBooks = await search(query);
    setSearchState({ query: searchState.query, books: searchedBooks });
    console.log(searchedBooks);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout className="container layout">
        <div className="wrapper">
          <Affix className="header-affix">
            <Header className="header">
              <Link to="/">
                <p className="logo">MyReads</p>
              </Link>
              <Link to="/search" className="search-link">
                <Search
                  className="search"
                  placeholder="search books here..."
                  enterButton="Search"
                  size="large"
                  onChange={handleSearch}
                ></Search>
              </Link>
            </Header>
          </Affix>
          <Switch>
            <Route exact path="/">
              <Content className="content">
                {state.loading ? (
                  <Spin size="large" className="spinner" />
                ) : (
                  <div>
                    <Shelf
                      shelf={state.currentlyReading}
                      onMoveBook={moveBook}
                      showBook={showBook}
                    />
                    <Shelf
                      shelf={state.wantToRead}
                      onMoveBook={moveBook}
                      showBook={showBook}
                    />
                    <Shelf
                      shelf={state.read}
                      onMoveBook={moveBook}
                      showBook={showBook}
                    />
                  </div>
                )}
                <Link to="/search">
                  <Button
                    style={{
                      position: 'fixed',
                      right: '25px',
                      bottom: '25px',
                      width: '50px',
                      height: '50px',
                    }}
                    type="primary"
                    shape="circle"
                    icon={<PlusOutlined />}
                    size="large"
                  ></Button>
                </Link>
              </Content>
            </Route>
            <Route exact path="/search">
              <SearchList
                searchState={searchState}
                onMoveBook={moveBook}
                onShowBook={showBook}
              />
            </Route>
            <Route exact path="/book/:id">
              <BookPage book={showBookState.book} />
            </Route>
          </Switch>
        </div>

        <Footer className="footer-author-description">
          <span>Created by Praveen Sripati </span>
          <a href="https://github.com/praveen-sripati" target="blank">
            <GithubOutlined className="footer-author-description__icon" />
          </a>
          <a href="https://in.linkedin.com/in/praveen-sripati" target="blank">
            <LinkedinFilled className="footer-author-description__icon" />
          </a>
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
