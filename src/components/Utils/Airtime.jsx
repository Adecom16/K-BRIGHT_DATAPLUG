import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AuthenticationUtility from "./AuthenticationUtility";
import Swal from "sweetalert2";

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
  const [showPinInput, setShowPinInput] = useState(false);
  const [transactionPin, setTransactionPin] = useState("");
  const { http } = AuthenticationUtility();

  const handlePurchase = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!phoneNumber || !network || !amount) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill in all fields",
      });
      return;
    }

    // Show SweetAlert to input transaction pin
    const { value: pin } = await Swal.fire({
      title: "Enter Transaction Pin",
      input: "password",
      inputPlaceholder: "Enter your transaction pin",
      inputAttributes: {
        maxlength: 4,
        autocapitalize: "off",
        autocorrect: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    });

    // Check if the user confirmed and entered a pin
    if (pin) {
      setTransactionPin(pin);
      setShowPinInput(true);
    }
  };

  const handleConfirmPurchase = async () => {
    // Validate transaction pin
    if (!transactionPin) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please enter your transaction pin",
      });
      return;
    }

    try {
      const response = await http.post("/user/airtime/airtime-purchase", {
        phone: phoneNumber,
        amount: amount,
        network: network,
        transaction_pin: transactionPin,
      });
      const data = response.data;
      console.log(data);

      // Display success alert
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Airtime purchase successful!",
      });
    } catch (err) {
      // Display error alert
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.response?.data?.message || "An error occurred",
      });
      console.error(err);
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
        {/* Conditionally render pin input based on showPinInput */}
        {showPinInput && (
          <FormGroup>
            <label htmlFor="transactionPin">Transaction Pin:</label>
            <input
              type="password"
              id="transactionPin"
              value={transactionPin}
              onChange={(e) => setTransactionPin(e.target.value)}
              placeholder="Enter transaction pin"
              required
            />
          </FormGroup>
        )}
        <Button type="submit">Purchase Airtime</Button>
        {/* Conditionally render Confirm Purchase button */}
        {showPinInput && (
          <Button onClick={handleConfirmPurchase}>Confirm Purchase</Button>
        )}
      </Form>
    </Container>
  );
};

export default AirtimePurchaseForm;
