import { Button } from "react-bootstrap";

import styled from "styled-components";

import { ReactComponent as Right } from "../assets/images/svg/light-right.svg";

const LoginButton = () => {
  return (
    <CustomButton>
      <span>Log in with NEAR</span>
      <span style={{ marginLeft: 22, position: "relative", top: -2 }}>
        <Right />
      </span>
    </CustomButton>
  );
};

export default LoginButton;

const CustomButton = styled(Button)`
  padding: 0px 10px !important;
  background: #414047 !important;
  border-radius: 10px;
  width: 186px !important;
  height: 40px !important;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  font-family: ManropeSemibold;
  color: #ffffff;
`;
