import React, { useState, useEffect } from 'react';
import { Layout, Input, Affix } from 'antd';
import './App.css';
import { TypeBook, TypeShelf, TypeShelves } from './lib/types';
import { update, getAll } from './BooksAPI';
import { Shelf } from './sections/Shelf/Shelf';
import { GithubOutlined, LinkedinFilled } from '@ant-design/icons';
import { Book } from './sections/Shelf/components/Book';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

function App() {
  const [state, setState] = useState<TypeShelves>({
    currentlyReading: { shelfName: 'Currently Reading', books: null },
    wantToRead: { shelfName: 'Want To Read', books: null },
    read: { shelfName: 'Read', books: null },
  });

  const onMoveBook = (book: TypeBook, shelfName: string) => {
    update({ book }, shelfName);
  };

  useEffect(() => {
    const onGetAll = async () => {
      const data: TypeBook[] = await getAll();

      const currentlyReadingData: TypeBook[] = [];
      const wantToReadData: TypeBook[] = [];
      const readData: TypeBook[] = [];

      for (const book of data) {
        console.log(book.shelf);
        if (book.shelf === "currentlyReading") {
          currentlyReadingData.push(book);
        } else if (book.shelf === "wantToRead") {
          wantToReadData.push(book);
        } else {
          readData.push(book);
        }
      }

      console.log(currentlyReadingData);
      console.log(wantToReadData);
      console.log(readData);

      setState({
        currentlyReading: {
          shelfName: 'Currently Reading',
          books: currentlyReadingData,
        },
        wantToRead: { shelfName: 'Want To Read', books: wantToReadData },
        read: { shelfName: 'Read', books: readData },
      });
    };
    onGetAll();
  }, []);

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
        <Shelf shelf={state.currentlyReading} />
        <Shelf shelf={state.wantToRead} />
        <Shelf shelf={state.read} />
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
