import React, { useState } from "react";
import { message } from 'antd';  // Import message from Ant Design
import { Form, Input, Button, Modal, Select, Card, Divider } from "antd";
import "antd/dist/reset.css";
import { loanform } from "../userApi/api";

const { Option } = Select;

const LoanForm = () => {
  const [loanData, setLoanData] = useState({});
  const [breakdown, setBreakdown] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [subcategories, setSubcategories] = useState([]);
  const [maxLoanAmount, setMaxLoanAmount] = useState(null);
  const [loanPeriod, setLoanPeriod] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state


  const categories = {
    wedding: {
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: 500000,
      period: 3,
    },
    home: {
      subcategories: ["Structure", "Finishing", "Loan"],
      maxLoan: 1000000,
      period: 5,
    },
    business: {
      subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
      maxLoan: 1000000,
      period: 5,
    },
    education: {
      subcategories: ["University Fees", "Child Fees Loan"],
      maxLoan: "Based on requirement",
      period: 4,
    },
  };

  const handleCategoryChange = (value) => {
    const selectedCategory = categories[value];
    setSubcategories(selectedCategory.subcategories);
    setMaxLoanAmount(selectedCategory.maxLoan);
    setLoanPeriod(selectedCategory.period);
    setLoanData({ ...loanData, loanCategory: value }); // Store selected loan category
    console.log("Category Selected:", value);
    console.log("Subcategories:", selectedCategory.subcategories);
    console.log("Max Loan Amount:", selectedCategory.maxLoan);
    console.log("Loan Period:", selectedCategory.period);
  };

  const calculateLoan = (values) => {
    const loanAmount = parseFloat(values.loanAmount);
    const period = parseFloat(values.loanPeriod);
    const interestRate = 0.1; // 10% interest rate
    const totalPayable = loanAmount * (1 + interestRate * period);
    const monthlyInstallment = totalPayable / (period * 12);
  
    setBreakdown({ loanAmount, totalPayable, monthlyInstallment });
  
    // Store loan amount and period in loanData
    setLoanData({
      ...loanData,
      loanAmount,
      loanPeriod: period,
      subCategory: values.subCategory,
      initialDeposit: values.initialDeposit,
    });
  
    console.log("Loan Calculation Data:", {
      loanAmount,
      totalPayable,
      monthlyInstallment,
      loanData,
    });
  };
  

  const handleProceed = () => {
    setIsModalVisible(true);
  };

  const handleModalSubmit = async (values) => {
    setLoading(true);
    const randomPassword = Math.random().toString(36).slice(-8); // Generates an 8-character random string
    
    // Map frontend form data to backend schema
    const formData = {
      ...values,
      password: randomPassword,
      fullName: loanData.fullName, // Add full name if you have it in your loanData state
      phone: loanData.phone, // Add phone number if you have it in your loanData state
      loanType: loanData.loanCategory, // Map loanCategory to loanType
      loanAmount: loanData.loanAmount, 
      loanPurpose: loanData.subCategory, // Map subCategory to loanPurpose
      guarantorName: loanData.guarantorName, // You'll need to gather this information
      guarantorCnic: loanData.guarantorCnic, // Similarly, gather this
      guarantorPhone: loanData.guarantorPhone, // And this
    };
  
    console.log("Form Data Submitted:", formData);
  
    try {
      const response = await loanform(formData); // Send complete data
      message.success(response.message || "Loan application submitted successfully!");
      console.log("Loan Application Response:", response);
    } catch (error) {
      message.error(error.message || "Loan application failed. Please try again.");
      console.error("Loan Application Error:", error.message);
    } finally {
      setLoading(false);
    }
  
    setIsModalVisible(false); // Close modal after submission
  };

  return (
    <div className="p-4" style={{ maxWidth: "600px", margin: "auto" }}>
      <Card
        style={{ borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
        bodyStyle={{ padding: "20px" }}
      >
        <h2 className="text-lg font-semibold text-center" style={{ color: "#f59e0b" }}>
          Loan Application Form
        </h2>

        <Form layout="vertical" onFinish={calculateLoan}>
          <Form.Item
            label="Loan Category"
            name="loanCategory"
            rules={[{ required: true, message: "Please select a loan category!" }]}
          >
            <Select placeholder="Select a category" onChange={handleCategoryChange}>
              <Option value="wedding">Wedding Loans</Option>
              <Option value="home">Home Construction Loans</Option>
              <Option value="business">Business Startup Loans</Option>
              <Option value="education">Education Loans</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Sub-Category"
            name="subCategory"
            rules={[{ required: true, message: "Please select a sub-category!" }]}
          >
            <Select placeholder="Select a sub-category" disabled={subcategories.length === 0}>
              {subcategories.map((subcategory) => (
                <Option key={subcategory} value={subcategory}>
                  {subcategory}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Initial Deposit (PKR)"
            name="initialDeposit"
            rules={[{ required: true, message: "Please enter an initial deposit!" }]}
          >
            <Input type="number" placeholder="Enter initial deposit" />
          </Form.Item>

          <Form.Item
            label="Loan Amount (PKR)"
            name="loanAmount"
            rules={[{ required: true, message: `Please enter loan amount (Max: ${maxLoanAmount})!` }]}
          >
            <Input type="number" placeholder="Enter loan amount" />
          </Form.Item>

          <Form.Item
            label="Loan Period (Years)"
            name="loanPeriod"
            rules={[{ required: true, message: `Loan period is ${loanPeriod} years!` }]}
          >
            <Input placeholder="Enter loan period in years" />
          </Form.Item>

          <Button type="primary" htmlType="submit" style={{ backgroundColor: "#f59e0b", borderColor: "#f59e0b" }} block>
            Calculate Loan
          </Button>
        </Form>

        {breakdown && (
          <LoanBreakdown breakdown={breakdown} onProceed={handleProceed} />
        )}
      </Card>

      <Modal
        title="Enter Your Details"
        open={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <ModalForm onSubmit={handleModalSubmit} />
      </Modal>
    </div>
  );
};

const LoanBreakdown = ({ breakdown, onProceed }) => {
  return (
    <div className="mt-4">
      <Divider />
      <h3 className="text-lg font-semibold" style={{ color: "#f59e0b" }}>
        Loan Breakdown
      </h3>
      <p>Loan Amount: PKR {breakdown.loanAmount.toFixed(2)}</p>
      <p>Total Payable Amount: PKR {breakdown.totalPayable.toFixed(2)}</p>
      <p>Monthly Installment: PKR {breakdown.monthlyInstallment.toFixed(2)}</p>
      <Button
        type="primary"
        onClick={onProceed}
        style={{ backgroundColor: "#f59e0b", borderColor: "#f59e0b" }}
        block
      >
        Proceed
      </Button>
    </div>
  );
};

const ModalForm = ({ onSubmit }) => {
  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <Form.Item
        label="CNIC"
        name="cnic"
        rules={[{ required: true, message: "Please enter your CNIC!" }]}
      >
        <Input placeholder="Enter your CNIC" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: "email", message: "Please enter a valid email!" }]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        style={{ backgroundColor: "#f59e0b", borderColor: "#f59e0b" }}
        block
      >
        Submit
      </Button>
    </Form>
  );
};

export default LoanForm;
