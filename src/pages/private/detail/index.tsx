import { useState } from "react";

import { Button } from "react-bootstrap";

import styled from "styled-components";

import Header from "../../../components/header";
// SVG
import { ReactComponent as Text } from "../../../assets/images/svg/texture.svg";
import { ReactComponent as Write } from "../../../assets/images/svg/write-icon.svg";
import { ReactComponent as Share } from "../../../assets/images/svg/write.svg";
import { ReactComponent as Open } from "../../../assets/images/svg/open.svg";
import { ReactComponent as Group } from "../../../assets/images/svg/group.svg";

import Detail from "./details";
import Activities from "./activities";

const Details = () => {
  const [state, setState] = useState({
    detail: true,
    activities: false,
  });

  return (
    <section>
      <Header />
      <Div>
        <IconDiv>
          <span
            style={{
              position: "relative",
              top: 10,
            }}
          >
            <Text />
          </span>
          <span>
            <Write />
          </span>
        </IconDiv>
      </Div>

      <ShareDiv>
        <span>
          <Share />
        </span>
        <span className="share">Share</span>
      </ShareDiv>

      <DetailedDiv>
        <h1>Docu sign</h1>

        <p>sign smart contracts seamlessly</p>

        <p className="utilities">Utilities</p>

        <div className="button-div">
          <Button className="openBtn">
            <span>Open</span>
            <span style={{ marginLeft: "auto" }}>
              <Open />
            </span>
          </Button>

          <div className="grp-div">
            <span>
              <Group />
            </span>

            <span className="user-span">24,000+ users</span>
          </div>
        </div>
      </DetailedDiv>

      <Links>
        <div className="link-div">
          <div
            onClick={() => setState({ detail: true, activities: false })}
            style={{
              borderBottom: state.detail ? "3px solid #33373B" : 0,
            }}
          >
            <Button
              style={{
                color: state.detail ? "#33373B" : "#6f6e73",
              }}
            >
              Details
            </Button>
          </div>

          <div
            onClick={() => setState({ detail: false, activities: true })}
            style={{
              borderBottom: state.activities ? "3px solid #33373B" : 0,
            }}
          >
            <Button
              style={{
                color: state.activities ? "#33373B" : "#6f6e73",
              }}
            >
              Activities
            </Button>
          </div>
        </div>
      </Links>

      {state.detail ? <Detail /> : <Activities />}
    </section>
  );
};

export default Details;

const Div = styled.div`
  width: 100%;
  height: 60px;
  background: #e5d0ff;
  position: relative;
`;

const IconDiv = styled.div`
  width: 75px;
  height: 75px;
  background: #bb85ff;
  border: 1px solid #cccccc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  position: absolute;
  left: 19px;
  top: 27px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShareDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 19px 15px 0 0;

  .share {
    font-family: ManropeMedium;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #587be0;
    letter-spacing: -0.408px;
    margin-left: 10px;
    cursor: pointer;
    top: 1px;
    position: relative;
  }
`;

const DetailedDiv = styled.div`
  margin-top: 10px;
  margin-left: 20px;

  h1 {
    font-family: ManropeSemibold;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #414047;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    font-family: ManropeMedium;
  }

  .utilities {
    color: #587be0;
    line-height: 22px;
    margin-top: 5px;
    margin-bottom: 18px;
  }

  .button-div {
    display: flex;
  }

  .openBtn {
    margin-right: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 10px 0 15px !important;
    background: #414047;
    border-radius: 10px;
    width: 105px;
    height: 40px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.408px;
    color: #ffffff;
    font-family: ManropeMedium;
    border: none;
    :hover {
      background: #414047 !important;
    }
    :focus {
      background: #414047 !important;
      box-shadow: none;
    }
  }

  .grp-div {
    display: flex;
    align-items: center;

    .user-span {
      font-family: ManropeMedium;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      color: #6f6e73;
      margin-left: 5px;
      margin-top: 8px;
    }
  }
`;

const Links = styled.div`
  border-bottom: 1px solid #dfdfe0;
  cursor: pointer;
  .link-div {
    margin-top: 25px;
    display: flex;
    text-align: center;
    div {
      display: block;
      width: 100%;
    }
  }

  button {
    background: #ffffff !important;
    border: none;
    font-family: ManropeSemibold;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.154px;
    margin-bottom: 20px;
    :hover {
      background: #ffffff !important;
    }
    :focus {
      background: #ffffff !important;
      border: none;
      box-shadow: none;
    }
  }
`;
