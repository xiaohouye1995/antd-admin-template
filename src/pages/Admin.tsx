import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Typography } from 'antd';
import React from 'react';

const Admin: React.FC = () => {
  return (
    <PageContainer content="这个页面只有 admin 权限才能查看">
      <Card>
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          <SmileTwoTone /> antd-admin-template <HeartTwoTone twoToneColor="#eb2f96" /> You
        </Typography.Title>
      </Card>
    </PageContainer>
  );
};

export default Admin;
