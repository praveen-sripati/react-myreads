import React, { useState, useEffect } from 'react';
import { Layout, Input, Affix } from 'antd';
import './App.css';
import { TypeBook, TypeShelves } from './lib/types';
import { update, getAll } from './BooksAPI';
import { Shelf } from './sections/Shelf/Shelf';
import { GithubOutlined, LinkedinFilled } from '@ant-design/icons';
import { stat } from 'fs';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

function App() {
  const [state, setState] = useState<TypeShelves>({
    currentlyReading: { shelfName: 'Currently Reading', books: null },
    wantToRead: { shelfName: 'Want To Read', books: null },
    read: { shelfName: 'Read', books: null },
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
    });
  };

  const moveBook = async (book: TypeBook, shelfName: string) => {
    await update( book , shelfName);
  };

  useEffect(() => {
    getAllBooks();
  }, [state]);

  return (
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
      <Content className="content">
        <Shelf shelf={state.currentlyReading} onMoveBook={moveBook} />
        <Shelf shelf={state.wantToRead} onMoveBook={moveBook} />
        <Shelf shelf={state.read} onMoveBook={moveBook} />
      </Content>
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
  );
}

export default App;
