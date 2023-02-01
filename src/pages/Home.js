import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { orderAPI } from "../Api/order/Order";
import { Excel } from "antd-table-saveas-excel";
import Title from "antd/es/typography/Title";
const Home = () => {
  const [order, setOrder] = useState([]);
  const dataSource = [
    {
      key: "1",
      usernameId: "#1265622353",
      byDate: "31/12/2023",
      phoneNumber: "0976031652",
      address: "Cầu giấy , hà nội",
      status: "đã giao hàng",
      total: "1900000",
    },
    {
      key: "2",
      usernameId: "#12656223234",
      byDate: "31/12/2023",
      phoneNumber: "0976031651",
      address: "Cầu giấy , hà nội",
      status: "đã giao hàng",
      total: "1800000",
    },
    {
      key: "3",
      usernameId: "#1265622329",
      byDate: "31/12/2023",
      phoneNumber: "0976031653",
      address: "Cầu giấy , hà nội",
      status: "đã hủy bỏ",
      total: "1400000",
    },
    {
      key: "4",
      usernameId: "#1265622373",
      byDate: "31/12/2023",
      phoneNumber: "0976031658",
      address: "Cầu giấy , hà nội",
      status: "Chưa được giao hàng",
      total: "1600000",
    },
  ];

  const columns = [
    {
      title: "usernameId",
      dataIndex: "usernameId",
      key: "username",
    },
    {
      title: "Ngày mua",
      dataIndex: "byDate",
      key: "byDate",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Địa chỉ ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Trạng thái đơn hàng",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Tổng tiền",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Chi tiết đơn hàng",
      key: "action",
      render: (_, record) => (
        <>
          <Space size="middle">
            <p>Xem Chi tiết</p>
          </Space>
        </>
      ),
    },
  ];

  const getOrder = async () => {
    try {
      const res = await orderAPI();
      console.log("res");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div>
      <Row gutter={[24, 12]}>
        <Title level={2}>Danh sách đơn hàng người dùng đã đặt hàng</Title>
        <Col xs={24} md={24}>
          <Button
            style={{
              marginBottom: 20,
            }}
            type="primary"
            onClick={() => {
              const excel = new Excel();
              excel
                .addSheet("test")
                .addColumns(columns)
                .addDataSource(dataSource)
                .saveAs("Đơn_đặt_hàng.xlsx");
            }}
          >
            Xuất Excel
          </Button>
          <Card>
            <Table dataSource={dataSource} columns={columns} />;
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
