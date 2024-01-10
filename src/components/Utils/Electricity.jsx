import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #555;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ElectricityBillingPage = () => {
  const [type, setType] = useState("prepaid");
  const [companyCode, setCompanyCode] = useState("");
  const [meterNumber, setMeterNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionPin, setTransactionPin] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("kbrightdataplug");
      if (!token) {
        console.error("Token not found in localStorage");
        return;
      }

      const formData = new FormData();
      formData.append("type", type);
      formData.append("company_code", companyCode);
      formData.append("meter_number", meterNumber);

      const response = await fetch(
        "https://wirelesspay.ng/user/electricity/verify",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await response.json();
      console.log("Electricity verification successful:", data);
    } catch (error) {
      console.error("Error verifying electricity:", error);
    }
  };

  const handlePurchase = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("kbrightdataplug");
      if (!token) {
        console.error("Token not found in localStorage");
        return;
      }

      const formData = new FormData();
      formData.append("type", type);
      formData.append("company_code", companyCode);
      formData.append("meter_number", meterNumber);
      formData.append("amount", amount);
      formData.append("transaction_pin", transactionPin);
      formData.append("debit_from", "");

      const response = await fetch(
        "https://wirelesspay.ng/user/electricity/purchase",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await response.json();
      console.log("Electricity purchase successful:", data);
    } catch (error) {
      console.error("Error purchasing electricity:", error);
    }
  };

  return (
    <Container>
      <Title>Electricity Billing </Title>
      <Form>
        <FormGroup>
          <label>Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="prepaid">Prepaid</option>
            <option value="postpaid">Postpaid</option>
          </select>
        </FormGroup>
        <FormGroup>
          <label>Company Code:</label>
          <input
            type="text"
            value={companyCode}
            onChange={(e) => setCompanyCode(e.target.value)}
            placeholder="Enter company code"
            required
          />
        </FormGroup>
        <FormGroup>
          <label>Meter Number:</label>
          <input
            type="text"
            value={meterNumber}
            onChange={(e) => setMeterNumber(e.target.value)}
            placeholder="Enter meter number"
            required
          />
        </FormGroup>
        <Button onClick={handleVerify}>Verify</Button>
        <FormGroup>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </FormGroup>
        <FormGroup>
          <label>Transaction Pin:</label>
          <input
            type="password"
            value={transactionPin}
            onChange={(e) => setTransactionPin(e.target.value)}
            placeholder="Enter transaction pin"
            required
          />
        </FormGroup>
        <Button onClick={handlePurchase}>Purchase Electricity</Button>
      </Form>
    </Container>
  );
};

export default ElectricityBillingPage;
