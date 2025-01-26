import React from "react";
import { Layout, Card, Table, Avatar } from "antd";
import {
  MoneyCollectOutlined,
  FileDoneOutlined,
  PieChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Content } = Layout;

const Dashboard = () => {
  // Table columns
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Loan Type",
      dataIndex: "loanType",
      key: "loanType",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          style={{
            color:
              status === "Approved"
                ? "#3f8600"
                : status === "Pending"
                ? "#faad14"
                : "#ff4d4f",
          }}
        >
          {status}
        </span>
      ),
    },
  ];

  // Table data
  const data = [
    {
      key: "1",
      id: "101",
      name: "John Doe",
      loanType: "Wedding Loan",
      amount: "PKR 200,000",
      status: "Approved",
    },
    {
      key: "2",
      id: "102",
      name: "Jane Smith",
      loanType: "Business Loan",
      amount: "PKR 500,000",
      status: "Pending",
    },
    {
      key: "3",
      id: "103",
      name: "Ali Khan",
      loanType: "Education Loan",
      amount: "PKR 300,000",
      status: "Rejected",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#fff7e6" }}>
      {/* Main Content */}
      <Content style={{ padding: "24px" }}>
        {/* Cards for Key Metrics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <Card
            style={{
              borderLeft: "4px solid #f59e0b",
              backgroundColor: "#fff8e1",
            }}
          >
            <h3 style={{ color: "#f59e0b" }}>
              <MoneyCollectOutlined /> Total Loans
            </h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>1,234</p>
          </Card>
          <Card
            style={{
              borderLeft: "4px solid #f59e0b",
              backgroundColor: "#fff8e1",
            }}
          >
            <h3 style={{ color: "#f59e0b" }}>
              <FileDoneOutlined /> Pending Requests
            </h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>56</p>
          </Card>
          <Card
            style={{
              borderLeft: "4px solid #f59e0b",
              backgroundColor: "#fff8e1",
            }}
          >
            <h3 style={{ color: "#f59e0b" }}>
              <PieChartOutlined /> Approved Loans
            </h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>1,000</p>
          </Card>
          <Card
            style={{
              borderLeft: "4px solid #f59e0b",
              backgroundColor: "#fff8e1",
            }}
          >
            <h3 style={{ color: "#f59e0b" }}>
              <SettingOutlined /> Rejected Loans
            </h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>178</p>
          </Card>
        </div>

        {/* Table for Recent Applications */}
        <Card
          style={{
            backgroundColor: "#fff8e1",
            border: "1px solid #f59e0b",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ color: "#f59e0b" }}>
            <FileDoneOutlined /> Recent Loan Applications
          </h2>
          <Table columns={columns} dataSource={data} />
        </Card>
      </Content>
    </Layout>
  );
};

export default Dashboard;
