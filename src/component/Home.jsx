import React from "react";
import { Row, Col, Card, Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div style={{ padding: "32px", backgroundColor: "#fef3c7" /* Light matching background */ }}>
      {/* Hero Section */}
      <Row
        justify="center"
        align="middle"
        style={{
          backgroundColor: "#ffffff",
          padding: "48px 24px",
          borderRadius: "16px",
          marginBottom: "48px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Col xs={24} md={12} style={{ padding: "16px" }}>
          <Title level={1} style={{ color: "#f59e0b" }}>
            Welcome to Saylani Microfinance
          </Title>
          <Paragraph style={{ fontSize: "16px", color: "#404040" }}>
            Apply for loans and manage your finances with ease. Our mission is
            to provide financial solutions that empower individuals and
            businesses.
          </Paragraph>
          <Button
            type="primary"
            size="large"
            style={{
              marginTop: "16px",
              backgroundColor: "#f59e0b",
              borderColor: "#f59e0b",
            }}
          >
            Apply Now
          </Button>
        </Col>
        <Col xs={24} md={12} style={{ textAlign: "center" }}>
          <img
            src="https://previews.123rf.com/images/varijanta/varijanta1601/varijanta160100032/51306191-thin-line-flat-design-banner-of-business-finance-and-banking-modern-vector-illustration-concept-of.jpg" // Replace with your image URL
            alt="Finance"
            style={{ width: "100%", maxWidth: "450px", borderRadius: "12px" }}
          />
        </Col>
      </Row>

      {/* Features Section */}
      <Row gutter={[24, 24]} style={{ marginBottom: "48px" }}>
        <Col xs={24} md={8}>
          <Card
            bordered={false}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <Title level={4} style={{ color: "#f59e0b" }}>
              Easy Application
            </Title>
            <Paragraph style={{ color: "#404040" }}>
              Apply for loans online with a simple and straightforward process.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card
            bordered={false}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <Title level={4} style={{ color: "#f59e0b" }}>
              Quick Approval
            </Title>
            <Paragraph style={{ color: "#404040" }}>
              Get your loan approved quickly and start using the funds right
              away.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card
            bordered={false}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <Title level={4} style={{ color: "#f59e0b" }}>
              Flexible Repayment
            </Title>
            <Paragraph style={{ color: "#404040" }}>
              Choose repayment plans that suit your financial situation.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Call to Action Section */}
      <Row justify="center" align="middle" style={{ textAlign: "center" }}>
        <Col
          xs={24}
          md={16}
          style={{
            backgroundColor: "#ffffff",
            padding: "48px 24px",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Title level={2} style={{ color: "#f59e0b" }}>
            Ready to Get Started?
          </Title>
          <Paragraph style={{ fontSize: "16px", color: "#404040" }}>
            Join thousands of satisfied customers who have benefited from our
            services.
          </Paragraph>
          <Button
            type="primary"
            size="large"
            style={{
              marginTop: "16px",
              backgroundColor: "#f59e0b",
              borderColor: "#f59e0b",
            }}
          >
            Sign Up Now
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
