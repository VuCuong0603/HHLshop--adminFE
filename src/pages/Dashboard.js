import { Card, Col, Row, Table, Typography } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { revenueApi } from "../Api/revenue";
const { Title } = Typography;
const Dashboard = () => {
  const [home, setHome] = useState();
  const gethome = async () => {
    try {
      const res = await revenueApi();
      const a = res.result;
      setHome(a);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(home);
  useEffect(() => {
    gethome();
  }, []);
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

  return (
    <div>
      <Row gutter={[24, 12]}>
        <Col xs={24} md={24}>
          <Title level={2}>Thông tin chi tiết về doanh thu và đơn hàng</Title>
          <Card>
            <Table columns={columns} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
