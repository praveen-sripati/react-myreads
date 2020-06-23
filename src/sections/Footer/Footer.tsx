import React from 'react';
import { Layout } from 'antd';
import {
  GithubOutlined,
  LinkedinFilled,
} from '@ant-design/icons';

const { Footer } = Layout;

export const LayoutFooter = () => {
  return (
    <Footer className="footer-author-description">
      <span>Created by Praveen Sripati </span>
      <a href="https://github.com/praveen-sripati" target="blank">
        <GithubOutlined className="footer-author-description__icon" />
      </a>
      <a href="https://in.linkedin.com/in/praveen-sripati" target="blank">
        <LinkedinFilled className="footer-author-description__icon" />
      </a>
    </Footer>
  );
};
