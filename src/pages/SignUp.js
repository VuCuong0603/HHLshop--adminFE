import {
  DeleteOutlined,
  EditOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  Input,
  message,
  Row,
  Space,
  Table,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { blogAPI, DeleteblogAPI, getblogApi } from "../Api/blog/Blog";

const Blog = () => {
  const columns = [
    {
      title: "Tiêu đề bài viết",
      dataIndex: "title",
      key: "title",
      width: 150,
      ellipsis: true,
    },
    {
      title: "Nội dung bài viết",
      dataIndex: "detail",
      key: "detail",
      width: 300,
      ellipsis: true,
    },
    {
      title: "Ngày tạo tài khoản",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, e) => (
        <Image
          src={e.image?.url}
          key={e.image?._id}
          width={90}
          height={100}
          style={{ borderRadius: "5px", padding: "5px" }}
        />
      ),
    },

    {
      title: "Ngày tạo bài viết",
      dataIndex: "createdAt",
      key: "cre<atedAt",
      render: (createdAt) => (
        <div>{moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}</div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Space size="middle">
            <EditOutlined onClick={() => Editdata(record)} />
            <DeleteOutlined
              style={{ color: "red" }}
              onClick={() => DeleteUser(record)}
            />
          </Space>
        </>
      ),
    },
  ];
  const [img, setImg] = useState({ file: null, base64URL: "" });
  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };
  const handleFileInputChange = (e) => {
    console.log("a", e.target.files[0]);
    let { file } = img;

    file = e.target.files[0];

    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        form.setFieldValue("upload", file.base64);
        setImg({
          base64URL: result,
          file,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    setImg({
      file: e.target.files[0],
    });
  };
  const Editdata = () => {
    console.log("aaaa");
  };
  const DeleteUser = async (record) => {
    try {
      const data = await DeleteblogAPI(record._id);
      message.success("bạn đã xóa thành công");
      getBlog();
    } catch (error) {
      message.warning(error.message);
    }
  };
  const [form] = Form.useForm();
  const [data, setData] = useState([]);

  const getBlog = async () => {
    try {
      const res = await getblogApi();
      setData(res.result.blogs);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinish = async (values) => {
    try {
      const res = await blogAPI(values.title, values.detail, values.upload);
      console.log(res);
      getBlog();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div>
      <Row gutter={[24, 12]}>
        <Col xs={24} md={24}>
          <Title level={2}>Thêm tin tức</Title>
          <Card>
            <Form
              onFinish={onFinish}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
              initialValues={{ remember: true }}
              autoComplete="off"
              form={form}
            >
              <Form.Item label="Tên tiêu đề" name="title">
                <Input />
              </Form.Item>
              <Form.Item label="Nội dung bài viết" name="detail">
                <TextArea />
              </Form.Item>
              <Form.Item
                name="upload"
                label="Thêm ảnh cho sản phẩm"
                valuePropName="fileList"
                rules={[
                  {
                    required: true,
                    message: "Bạn cần phải thêm ảnh ",
                  },
                ]}
              >
                <input
                  type="file"
                  name="file"
                  onChange={handleFileInputChange}
                />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Thêm
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={24} md={24}>
          <Title level={2}>Danh sách tin tức</Title>
          <Card>
            <Table columns={columns} dataSource={data} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Blog;
