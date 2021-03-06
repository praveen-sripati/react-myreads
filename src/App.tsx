import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Spin, Button } from 'antd';
import './App.css';
import { TypeBook, TypeShelves, ShowBookState } from './lib/types';
import { update, getAll } from './BooksAPI';
import { LayoutHeader } from './sections/Header/Header';
import { LayoutFooter } from './sections/Footer/Footer';
import { SearchList } from './sections/Search/SearchList';
import { BookPage } from './sections/BookPage/BookPage';
import { NotFound } from './sections/NotFound/NotFound';
import { PlusOutlined } from '@ant-design/icons';
import { Shelves } from './sections/Shelves/Shelves';

const { Content } = Layout;

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

  const getAllBooks = async () => {
    const books: TypeBook[] = await getAll();
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

  return (
    <Router>
      <Layout className="container layout">
        <div className="wrapper">
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
              <LayoutHeader />
              <Content className="content">
                {state.loading ? (
                  <Spin size="large" className="spinner" />
                ) : (
                  <Shelves
                    state={state}
                    onMoveBook={moveBook}
                    showBook={showBook}
                  />
                )}
                <Link to={`${process.env.PUBLIC_URL}/search`}>
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
            <Route exact path={`${process.env.PUBLIC_URL}/search`}>
              <SearchList onMoveBook={moveBook} onShowBook={showBook} />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/book/:id`}>
              <LayoutHeader />
              <BookPage book={showBookState.book} />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
        <LayoutFooter />
      </Layout>
    </Router>
  );
}

export default App;
