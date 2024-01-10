import React, { useState, useEffect } from "react";
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

const AirtimePurchaseForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [network, setNetwork] = useState("mtn");
  const [amount, setAmount] = useState("");

  useEffect(() => {
   
    const token = localStorage.getItem("kbrightdataplug");
    if (token) {
      fetchAirtime(token);
    }
  }, []); 

  const fetchAirtime = async (token) => {
    try {
      const response = await fetch(
        "https://wirelesspay.ng/airtime/airtime-purchase",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            phoneNumber,
            network,
            amount,
          }),
        }
      );

      console.log("Response:", response);

      const data = await response.json();
      console.log("Airtime purchase successful:", data);
    } catch (error) {
  
      console.error("Error purchasing airtime:", error);
    }
  };

  const handlePurchase = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("kbrightdataplug");
    if (token) {
      fetchAirtime(token);
    } else {
      console.error("Token not found in localStorage");
    }
  };

  return (
    <Container>
      <Title>Airtime Purchase</Title>
      <Form onSubmit={handlePurchase}>
        <FormGroup>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="network">Network:</label>
          <select
            id="network"
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
          >
            <option value="mtn">MTN</option>
            <option value="airtel">Airtel</option>
            {/* Add more networks as needed */}
          </select>
        </FormGroup>
        <FormGroup>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </FormGroup>
        <Button type="submit">Purchase Airtime</Button>
      </Form>
    </Container>
  );
};

export default AirtimePurchaseForm;
