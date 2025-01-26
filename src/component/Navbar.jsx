import React, { useState } from "react";
import { Layout, Menu, Avatar, Button, Drawer } from "antd";
import {
  HomeOutlined,
  FormOutlined,
  DashboardOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#f59e0b", // Custom color
          padding: "0 24px",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <div style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>
          Saylani Microfinance
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            flex: 1,
            justifyContent: "flex-end",
            background: "transparent",
            display: window.innerWidth > 768 ? "flex" : "none", // Hide on mobile
          }}
          selectedKeys={[]}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <a href="/">Home</a>
          </Menu.Item>
          <Menu.Item key="apply" icon={<FormOutlined />}>
            <a href="/apply">Apply for Loan</a>
          </Menu.Item>
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            <a href="/dashboard">Dashboard</a>
          </Menu.Item>
          <Menu.Item key="auth" icon={<UserOutlined />}>
            <a href="/auth">Login</a>
          </Menu.Item>
        </Menu>

        {/* User Profile (Hidden on Mobile) */}
        <div
          style={{
            display: window.innerWidth > 768 ? "flex" : "none", // Hide on mobile
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ color: "white" }}>Welcome, Admin</span>
          <Avatar icon={<UserOutlined />} />
        </div>

        {/* Mobile Menu Button (Visible on Mobile) */}
        <Button
          type="primary"
          icon={<MenuOutlined />}
          onClick={toggleMobileMenu}
          style={{
            display: window.innerWidth <= 768 ? "block" : "none", // Show on mobile
            background: "transparent",
            border: "none",
            color: "white",
          }}
        />
      </Header>

      {/* Mobile Menu (Drawer) */}
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={toggleMobileMenu}
        open={isMobileMenuOpen}
        style={{ padding: 0 }}
        width="250px" // Adjust drawer width for mobile
      >
        <Menu
          theme="light"
          mode="inline"
          style={{ background: "#f59e0b", height: "100%" }}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <a href="/">Home</a>
          </Menu.Item>
          <Menu.Item key="apply" icon={<FormOutlined />}>
            <a href="/apply">Apply for Loan</a>
          </Menu.Item>
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            <a href="/dashboard">Dashboard</a>
          </Menu.Item>
          <Menu.Item key="login" icon={<UserOutlined />}>
            <a href="/login">Login</a>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Layout>
  );
};

export default Navbar;