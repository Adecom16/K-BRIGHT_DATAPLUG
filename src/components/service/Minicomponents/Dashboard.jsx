import React from "react";
import styled from "styled-components";
import ApexChart from "../Minicomponents/Apexchart";
import Stat from "../Minicomponents/Stat";
import AuthenticationUtility from "../../Utils/AuthenticationUtility";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  flex: 0 0 48%;

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const AccountInfo = styled.div`
  h6 {
    text-transform: uppercase;
    color: gray;
  }

  h2 {
    text-transform: uppercase;
    width: 200px;
    line-height: 50px;
  }

  p {
    margin-bottom: 20px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const BalanceInfo = styled.div`
  color: gray;

  h3 {
    span {
      font-size: 20px;
    }
  }

  p {
    display: flex;
    align-items: center;
    font-size: 14px;

    span {
      margin-right: 5px;
    }

    .fa-arrow-up {
      color: green;
    }

    .fa-arrow-down {
      color: red;
    }
  }
`;

const MoneyOutInfo = styled.div`
  color: gray;

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  span {
    font-size: 16px;
  }

  hr {
    margin-top: 20px;
    color: gray;
    width: 100%;
    height: 3px;
    border: none;
    background-color: gray;
    opacity: 0.5;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: blue;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    text-decoration: underline;
    margin-top: 10px;
    display: inline-block;
  }
`;

const Dashboard = () => {
  const { auth } = useAuthUser();
  const { profile } = AuthenticationUtility();

  return (
    <Container>
      <Row>
        <Col>
          <AccountInfo>
            <h6>{auth?.username}</h6>
            <h2>{auth?.name} 👋</h2>
            <p>
              Everything seems ok and up-to-date with your account since your
              last visit. Would you like to fund it?
            </p>
            <a href="https://">
              <button>Fund Account</button>
            </a>
          </AccountInfo>
        </Col>
        <Col>
          <BalanceInfo>
            <p>ACCOUNT BALANCE FROM 9183106080</p>
            <h3>
              <span>₦</span>3,400.00
            </h3>
            <p>
              <span className="fa fa-arrow-up"></span> ₦0.00 Dec 30, 2023,
              2:38:56 PM <span className="fa fa-arrow-down"></span> ₦0.00
            </p>
            <ApexChart />
          </BalanceInfo>
        </Col>
      </Row>

      <Row>
        <Col>
          <MoneyOutInfo>
            <p>MONEY OUT LAST 30 DAYS</p>
            <h2>
              <span>₦</span>494.00
            </h2>
            <span>No outgoing transactions yet</span>
            <hr />
            <a href="">
              <span>
                view more <span className="fa fa-arrow-right"></span>
              </span>
            </a>
          </MoneyOutInfo>
        </Col>
        <Col>
          <MoneyOutInfo>
            <p>MONEY IN LAST 30 DAYS</p>
            <h2>
              <span>₦</span>0.00
            </h2>
            <span>No incoming transactions yet</span>
            <hr />
            <a href="">
              <span>
                view more <span className="fa fa-arrow-right"></span>
              </span>
            </a>
          </MoneyOutInfo>
        </Col>
      </Row>

      <div className="container mt-5">
        <Stat />
      </div>
    </Container>
  );
};

export default Dashboard;
