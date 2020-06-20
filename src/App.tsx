import React, { useState } from 'react';
import { Layout, Input, Affix } from 'antd';
import './App.css';
import { Shelves, Book } from './lib/types';
import { update } from './BooksAPI';
import { Shelf } from './sections/Shelf/Shelf';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

function App() {
  const [state, setState] = useState<Shelves>({
    currentlyReading: { shelfName: 'currentlyReading', books: [] },
    wantToRead: { shelfName: 'wantToRead', books: [] },
    read: { shelfName: 'read', books: [] },
  });

  const onMoveBook = (book: Book, shelfName: string) => {
    setState({
      currentlyReading:
        shelfName === state.currentlyReading.shelfName
          ? {
              ...state.currentlyReading,
              books: [...state.currentlyReading.books, book],
            }
          : { ...state.currentlyReading },
      wantToRead:
        shelfName === state.wantToRead.shelfName
          ? {
              ...state.wantToRead,
              books: [...state.wantToRead.books, book],
            }
          : { ...state.wantToRead },
      read:
        shelfName === state.read.shelfName
          ? {
              ...state.read,
              books: [...state.read.books],
            }
          : { ...state.read },
    });
    update({ book }, shelfName);
  };

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
        <Shelf />
      </Content>
    </Layout>
  );
}

export default App;
