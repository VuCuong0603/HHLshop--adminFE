import { Card, Col, Row, Table, Typography } from "antd";
import React from "react";
const { Title } = Typography;
const Dashboard = () => {
  const columns = [
    {
      title: "số đơn hàng đã giao",
      dataIndex: "orderDelivered",
      key: "orderDelivered",
    },
    {
      title: "Số đơn hàng đã đặt hàng",
      dataIndex: "orderPlaced",
      key: "orderPlaced",
    },
    {
      title: "Tổng doanh thu",
      dataIndex: "revenue",
      key: "revenue",
    },
  ];
  const data = [
    {
      key: "1",
      orderDelivered: 320,
      orderPlaced: 300,
      revenue: 10000000,
    },
  ];
  return (
    <div>
      <Row gutter={[24, 12]}>
        <Col xs={24} md={24}>
          <Title level={2}>Thông tin chi tiết về doanh thu và đơn hàng</Title>
          <Card>
            <Table columns={columns} dataSource={data} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
