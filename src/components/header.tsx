import React from "react";

import styled from "styled-components";

import { Button } from "react-bootstrap";

import { ReactComponent as Back } from "../assets/images/svg/left-arrow.svg";
import { ReactComponent as Home } from "../assets/images/svg/home.svg";
import { ReactComponent as HomeDesign } from "../assets/images/svg/home-design.svg";
import { ReactComponent as Down } from "../assets/images/svg/down.svg";
import { ReactComponent as Notifications } from "../assets/images/svg/notification.svg";
import { ReactComponent as Setting } from "../assets/images/svg/settings.svg";

const Header = () => {
  return (
    <Section>
      <div className="first-child">
        <div>
          <Back />
        </div>

        <div>
          <Home />
        </div>

        <Button>
          <span style={{ marginRight: 8 }}>
            <HomeDesign />
          </span>
          <span>Johndoe.near</span>
          <span style={{ marginLeft: 15 }}>
            <Down />
          </span>
        </Button>

        <div>
          <Notifications />
        </div>

        <div>
          <Setting />
        </div>
      </div>
    </Section>
  );
};

export default Header;

const Section = styled.section`
  background-color: #f5f5f5;
  padding: 13px 20px;
  .first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      cursor: pointer;
      background: #ffffff;
      border: 1px solid #dfdfe0;
      box-sizing: border-box;
      border-radius: 30px;
      width: 174px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #33373b;
      font-family: ManropeMedium;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: -0.154px;
    }
  }
`;
