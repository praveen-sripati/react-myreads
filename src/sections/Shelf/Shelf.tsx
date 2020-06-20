import React from 'react';
import { Layout, Typography, Divider } from 'antd';
import { Book } from './components/Book';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export const Shelf = () => {
  return (
    <div className="shelf-content">
      <Title className="shelf-title" level={2}>
        Currently Reading
      </Title>
      <Divider className="divider" />
      <div className="shelf-books">
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
};
