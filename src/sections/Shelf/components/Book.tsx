import React from 'react';
import { Card, Button } from 'antd';
import { UpCircleFilled } from '@ant-design/icons';

const { Meta } = Card;

export const Book = () => {
  return (
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
      <Meta title="Card title" description="something just like this"></Meta>
      <Button
        className="book-card-move-button"
        type="primary"
        shape="circle"
        icon={<UpCircleFilled />}
        size="large"
      ></Button>
    </Card>
  );
};
