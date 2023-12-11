import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Input, Form, Table, Space } from 'antd';
import { getRedBlackList } from '@/api/foodRedBlack';

const TableList: React.FC = () => {
  const [tableList, setTableList] = useState([]);
  const [pagination, setpagination] = useState({ page: 1, total: 0 });

  const [form] = Form.useForm();

  const columns: any = [
    {
      title: '序号',
      render: (text: any, record: any, index: number) => {
        return `${(pagination.page - 1) * 10 + index + 1}`;
      },
    },
    {
      title: '店铺名',
      dataIndex: 'storeName',
      key: 'storeName',
    },
    {
      title: '公司名',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '城市',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: '省份',
      dataIndex: 'region',
      key: 'region',
    },
    {
      title: '发布时间',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: '操作',
      key: 'operation',
      render: () => (
        <Space className="operation">
          <Button type="primary">查看</Button>
          <Button style={{ marginLeft: '6px' }}>编辑</Button>
        </Space>
      ),
    },
  ];

  const getList = (page?: number) => {
    const query: any = form.getFieldsValue(true);
    query.page = page || pagination.page;
    query.pageSize = 10;
    getRedBlackList(query).then((res) => {
      setTableList(res?.list);
      setpagination({ page: query.page, total: res?.count });
    });
  };

  const onFinish = () => {
    getList(1);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <PageContainer>
      <Form name="form" layout="inline" onFinish={onFinish} form={form}>
        <Form.Item label="店铺名" name="storeName">
          <Input placeholder="请输入店铺名" />
        </Form.Item>
        <Form.Item label="公司名" name="company">
          <Input placeholder="请输入公司名" />
        </Form.Item>
        <Form.Item label="城市" name="city">
          <Input placeholder="请输入城市名" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
          <Button
            style={{ marginLeft: '20px' }}
            onClick={() => {
              form.resetFields();
              onFinish();
            }}
          >
            重置
          </Button>
        </Form.Item>
      </Form>
      <Table
        style={{ marginTop: '20px' }}
        rowKey="id"
        columns={columns}
        dataSource={tableList}
        pagination={{
          showSizeChanger: false,
          current: pagination.page,
          total: pagination.total,
          showTotal: () => `共${pagination.total}条`,
          onChange: (val) => {
            setpagination({ ...pagination, page: val });
            getList(val);
          },
        }}
      />
    </PageContainer>
  );
};

export default TableList;
