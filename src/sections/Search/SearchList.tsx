import React from 'react';
import { Layout, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Content } = Layout;

export const SearchList = () => {
  return (
    <Content className="content search-content">
      <Link to="/">
        <Button
          style={{
            position: 'fixed',
            left: '20px',
            top: '85px',
            width: '50px',
            height: '50px',
          }}
          type="primary"
          shape="circle"
          icon={<ArrowLeftOutlined />}
          size="large"
        ></Button>
      </Link>
    </Content>
  );
};
