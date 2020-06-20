import React, { useState } from 'react';
import { Layout, Input, Affix } from 'antd';
import './App.css';
import { Shelves, Book } from './lib/types';
import { update, getAll } from './BooksAPI';
import { Shelf } from './sections/Shelf/Shelf';
import { GithubOutlined, LinkedinFilled } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

function App() {
  const [state, setState] = useState<Shelves>({
    shelves: [ { shelfName: 'Currently Reading', books:[] }, { shelfName: 'Want To Read', books:[] }, { shelfName: 'Read', books:[] } ]
  });

  const onMoveBook = (book: Book, shelfName: string) => {
    update({ book }, shelfName);
  };

  const onGetAll = async () => {
    const data = await getAll();
    console.log(data[0])
  }

  onGetAll();

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
        {state.shelves.map( shelf => (
          <Shelf shelf={shelf} />
        ))}
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
