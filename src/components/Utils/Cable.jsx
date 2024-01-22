import React, { useState, useEffect } from "react";
import styled from "styled-components";
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

const CableTVPage = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [plan, setPlan] = useState("");
  const [showPinInput, setShowPinInput] = useState(false);
  const [transactionPin, setTransactionPin] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("kbrightdataplug_token");
    if (token) {
      fetchServices(token);
    }
  }, []); 

  const fetchServices = async (token) => {
    try {
      const response = await fetch(
        "https://wirelesspay.ng/user/cable-tv/get-service?service=dstv",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setServices(data.services);
    } catch (error) {
      console.error("Error fetching cable TV services:", error);
    }
  };

  const handlePurchase = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!selectedService || !cardNumber || !plan) {
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
      const token = localStorage.getItem("kbrightdataplug");
      if (!token) {
        console.error("Token not found in localStorage");
        return;
      }

      const response = await fetch(
        "https://wirelesspay.ng/user/cable-tv/purchase",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            plan,
            card_number: cardNumber,
            service: selectedService,
            debit_from: "wallet", // Assuming debit_from is constant for now
            transaction_pin: transactionPin,
          }),
        }
      );

      const data = await response.json();
      console.log("Cable TV purchase successful:", data);

      // Display success alert
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Cable TV purchase successful!",
      });
    } catch (error) {
      // Display error alert
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "An error occurred",
      });
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>Cable TV Purchase Page</Title>
      <Form onSubmit={handlePurchase}>
        <FormGroup>
          <label htmlFor="service">Select Service:</label>
          <select
            id="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </FormGroup>
        <FormGroup>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="plan">Select Plan:</label>
          <select
            id="plan"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          >
            <option value="">Select a plan</option>
            {selectedService &&
              services[selectedService]?.plans.map((planOption) => (
                <option key={planOption} value={planOption}>
                  {planOption}
                </option>
              ))}
          </select>
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
        <Button type="submit">Purchase Cable TV</Button>
        {/* Conditionally render Confirm Purchase button */}
        {showPinInput && (
          <Button onClick={handleConfirmPurchase}>
            Confirm Purchase
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default CableTVPage;
