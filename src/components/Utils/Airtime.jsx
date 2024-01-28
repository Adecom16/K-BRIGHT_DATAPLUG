import React, { useState } from "react";
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
  const { http } = AuthenticationUtility();

  const handlePurchase = async (e) => {
    e.preventDefault();

    if (!phoneNumber || !network || !amount) {
      showAlert("Please fill in all fields", "error");
      return;
    }

    const { value: pin } = await showPinInput();

    if (pin) {
      try {
        const response = await http.post("/user/airtime/airtime-purchase", {
          phone: phoneNumber,
          amount: amount,
          network: network,
          transaction_pin: pin,
        });
        console.log(response.data);
        showAlert("Airtime purchase successful!", "success");
      } catch (err) {
        handleRequestError(err);
      }
    }
  };

  const showAlert = (text, icon) => {
    Swal.fire({
      icon: icon,
      title: icon === "error" ? "Error" : "Success",
      text: text,
    });
  };

  const showPinInput = async () => {
    return Swal.fire({
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
  };

  const handleRequestError = (err) => {
    showAlert(err.response?.data?.message || "An error occurred", "error");
    console.error(err);
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
            <option value="glo">Glo</option>

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
