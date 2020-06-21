import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Input, Affix, Spin, Button } from 'antd';
import './App.css';
import { TypeBook, TypeShelves } from './lib/types';
import { update, getAll } from './BooksAPI';
import { Shelf } from './sections/Shelf/Shelf';
import {
  GithubOutlined,
  LinkedinFilled,
  PlusOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

function App() {
  const [state, setState] = useState<TypeShelves>({
    currentlyReading: { shelfName: 'Currently Reading', books: null },
    wantToRead: { shelfName: 'Want To Read', books: null },
    read: { shelfName: 'Read', books: null },
    loading: true,
  });

  useEffect(() => {
    getAllBooks();
  }, []);

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

  const moveBook = useCallback(async (book: TypeBook, shelfName: string) => {
    await update(book, shelfName);
    getAllBooks();
  }, []);

  return (
    <Router>
      <Layout className="container layout">
        <Affix>
          <Header className="header">
            <p className="logo">MyReads</p>
            <Search
              className="search"
              placeholder="input search text"
              enterButton="Search"
              size="large"
            ></Search>
          </Header>
        </Affix>
        <Switch>
          <Route exact path="/">
            <Content className="content">
              {state.loading ? (
                <Spin size="large" className="spinner" />
              ) : (
                <div>
                  <Shelf shelf={state.currentlyReading} onMoveBook={moveBook} />
                  <Shelf shelf={state.wantToRead} onMoveBook={moveBook} />
                  <Shelf shelf={state.read} onMoveBook={moveBook} />
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
            <Content className="content">
              <h2>Search</h2>
            </Content>
          </Route>
        </Switch>
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
