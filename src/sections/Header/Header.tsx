import React from 'react';
import { Layout, Affix } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export const LayoutHeader = () => {
  return (
    <Affix className="header-affix">
      <Header className="header">
        <Link to="/">
          <span className="logo">MyReads</span>
        </Link>
      </Header>
    </Affix>
  );
};
