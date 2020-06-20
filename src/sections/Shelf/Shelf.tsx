import React from 'react';
import { Layout, Typography, Divider } from 'antd';
import { Book } from './components/Book';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export const Shelf = () => {
  return (
    <div className="currently-reading-content">
      <Title className="currently-reading-title" level={2}>
        Currently Reading
      </Title>
      <Divider className="divider" />
      <div className="currently-reading-books">
        <Book />
        <h2>Book</h2>
        <h2>Book</h2>
      </div>
    </div>
  );
};
