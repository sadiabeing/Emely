import { FormEvent, useState } from "react";

import { Form, Button } from "react-bootstrap";

import styled from "styled-components";

// Import SVG's as a React Component
import { ReactComponent as Closed } from "../../../../assets/images/svg/cross.svg";
import { ReactComponent as Info } from "../../../../assets/images/svg/info.svg";
import { ReactComponent as Right } from "../../../../assets/images/svg/light-right.svg";

// Import Component
import Login from "../../../../components/button";

const Signup = () => {
  const [state, setState] = useState({
    fullName: "",
    accountId: "",
  });

  const inputChangeHandler = (key: string, value: string) => {
    setState({ ...state, [key]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Section>
      <div className="heading">
        <div className="flex-div">
          <h1>Create NEAR account</h1>

          <div style={{ display: "block", marginLeft: "auto" }}>
            <div className="svg">
              <Closed />
            </div>
          </div>
        </div>
      </div>

      <p className="top-para">
        Enter an Account ID to use with your NEAR account. Your Account ID will
        be used for all NEAR operations, including sending and receiving assets.
      </p>

      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex. John doe"
            value={state.fullName}
            onChange={(e) => inputChangeHandler("fullName", e.target.value)}
          />
        </Form.Group>

        <Form.Group style={{ marginTop: 10 }} controlId="accountId">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Form.Label style={{ marginRight: "15px" }}>Account ID</Form.Label>
            <Info />
          </div>
          <div style={{ position: "relative" }}>
            <Form.Control
              style={{ paddingRight: 100 }}
              type="text"
              placeholder="yourname"
              value={state.accountId}
              onChange={(e) => inputChangeHandler("accountId", e.target.value)}
            />
            <div className="border" />

            <span className="near">.near</span>
          </div>
        </Form.Group>

        <Button
          type="submit"
          style={{
            background:
              state.fullName && state.accountId !== null
                ? "#885fff"
                : "#bebec2",
          }}
        >
          <span>Continue</span>
          <span style={{ marginLeft: 12, position: "relative", top: -1 }}>
            <Right />
          </span>
        </Button>
      </Form>

      <p className="terms-para">
        By creating a NEAR account, you agree to the NEAR Wallet{" "}
        <a href="!#">Terms of Service</a> and <a href="!#">Privacy Policy.</a>
      </p>

      <div className="border-bottom" />

      <div>
        <p className="login-text">Already have NEAR account?</p>
        <Login />
      </div>
    </Section>
  );
};

export default Signup;

const Section = styled.section`
  .heading {
    background-color: #f5f5f5;

    .flex-div {
      display: flex;
      padding: 14px 25px 14px 0;
    }

    h1 {
      font-family: ManropeSemibold;

      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.408px;
      color: #000000;
      flex-grow: 1;
      text-align: center;
    }

    .svg {
      background: rgba(111, 110, 115, 0.22);
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .top-para {
    font-family: ManropeRegular;

    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #808080;
    padding: 26px 25px;
  }

  form {
    padding: 0 25px;
  }

  label {
    font-family: ManropeRegular;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #6f6e73;
    display: block;
    margin: 10px 0px;
  }

  .border {
    position: absolute;
    right: 90px;
    top: 0px;
    height: 100%;
    width: 1px;
    background: rgb(190, 190, 194);
  }

  .near {
    position: absolute;
    right: 28px;
    top: 17px;
    font-family: ManropeSemibold;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }

  input {
    padding: 16px 20px;
    background: #fcfcfc;
    border: 1px solid #bebec2;
    border-radius: 8px;
    width: 100%;
    color: #33373b;
    font-family: ManropeSemibold;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }

  button {
    border-radius: 10px;
    padding: 0px 10px 0px 20px;
    border: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    font-family: ManropeSemibold;
    text-align: center;
    letter-spacing: -0.408px;
    color: #ffffff;
    width: 124px;
    height: 40px;
    display: block;
    margin: 30px auto;

    :focus {
      border: none;
      box-shadow: none;
    }
  }

  .terms-para {
    font-family: ManropeRegular;
    color: #6f6e73;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
    padding: 0 42px;
    margin-bottom: 19px;
    margin-top: 20px;
    a {
      color: #885fff;
      text-decoration: none;
    }
  }

  .border-bottom {
    border: 1px solid #dfdfe0;
  }

  .login-text {
    font-family: ManropeMedium;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    margin-top: 17px;
    text-align: center;
  }
`;
