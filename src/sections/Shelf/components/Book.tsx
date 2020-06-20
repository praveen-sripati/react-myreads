import React from 'react';
import { Card, Button, Menu, Dropdown } from 'antd';
import { DownCircleFilled } from '@ant-design/icons';

const { Meta } = Card;

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item>None</Menu.Item>
  </Menu>
);

export const Book = () => {
  return (
    <div className="shelf-books__book">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta className="book-title-bottom book-description" title="Card title" description="something just like this"></Meta>
        <span className="book-author-text-color">by Authon Name</span>
        <Dropdown overlay={menu}>
          <Button
            className="book-card-move-button"
            type="primary"
            shape="circle"
            icon={<DownCircleFilled />}
            size="large"
          ></Button>
        </Dropdown>
      </Card>
    </div>
  );
};
