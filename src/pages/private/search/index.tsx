import { Fragment } from "react";

import { InputGroup, FormControl } from "react-bootstrap";

import styled from "styled-components";

import { ReactComponent as Search } from "../../../assets/images/svg/search.svg";
import { ReactComponent as Filter } from "../../../assets/images/svg/filter.svg";
import { ReactComponent as Right } from "../../../assets/images/svg/colored-right.svg";
import { ReactComponent as Exchange } from "../../../assets/images/svg/exchange.svg";
import { ReactComponent as Games } from "../../../assets/images/svg/game.svg";
import { ReactComponent as Market } from "../../../assets/images/svg/marketplace.svg";
import { ReactComponent as Defi } from "../../../assets/images/svg/defi.svg";
import { ReactComponent as Collectible } from "../../../assets/images/svg/collectible.svg";
import { ReactComponent as Utilities } from "../../../assets/images/svg/utilities.svg";
import { ReactComponent as Smallight } from "../../../assets/images/svg/small-right.svg";
import Header from "../../../components/header";

const Searchig = () => {
  return (
    <Fragment>
      <Header />

      <Section>
        <div className="input-div">
          <InputGroup>
            <span id="basic-addon2">
              <Search />
            </span>
            <FormControl
              placeholder="Search Experiences"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <div>
            <Filter />
          </div>
        </div>

        <Main>
          <div className="heading-div">
            <h1>Popular Categories</h1>

            <div>
              <span>See All</span>

              <span>
                <Right />
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              padding: "0 19px",
              marginTop: 16,
            }}
          >
            <Common
              style={{
                background: "#eaefff",
              }}
            >
              <div>
                <Exchange />
              </div>

              <div className="inner-div">
                <p>Exchange</p>

                <span>
                  <Smallight />
                </span>
              </div>
            </Common>

            <Common
              style={{
                background: "#F5F5F5",
              }}
            >
              <div>
                <Games />
              </div>

              <div className="inner-div">
                <p>Games</p>

                <span>
                  <Smallight />
                </span>
              </div>
            </Common>

            <Common
              style={{
                background: "#E2F9F3",
              }}
            >
              <div>
                <Market />
              </div>

              <div className="inner-div">
                <p>Marketplaces</p>

                <span>
                  <Smallight />
                </span>
              </div>
            </Common>

            <Common
              style={{
                background: "#FFF3EC",
              }}
            >
              <div>
                <Defi />
              </div>

              <div className="inner-div">
                <p>Defi</p>

                <span>
                  <Smallight />
                </span>
              </div>
            </Common>

            <Common
              style={{
                background: "#EBF5FF",
              }}
            >
              <div>
                <Collectible />
              </div>

              <div className="inner-div">
                <p>Collectibles</p>

                <span>
                  <Smallight />
                </span>
              </div>
            </Common>

            <Common
              style={{
                background: "#F0EBFF",
              }}
            >
              <div>
                <Utilities />
              </div>

              <div className="inner-div">
                <p>Utilities</p>

                <span>
                  <Smallight />
                </span>
              </div>
            </Common>
          </div>

          <div className="heading-div">
            <h1>Trending Experiences</h1>

            <div>
              <span>See All</span>

              <span>
                <Right />
              </span>
            </div>
          </div>
        </Main>
      </Section>
    </Fragment>
  );
};

export default Searchig;

const Section = styled.section`
  .input-div {
    display: flex;
    padding: 11px 34px 0 16px;
    align-items: baseline;

    span {
      position: absolute;
      top: 6px;
      z-index: 10;
      left: 8px;
    }

    .input-group {
      width: 269px;
      margin-right: 25px;
    }

    input {
      letter-spacing: -0.154px;
      font-family: ManropeMedium;
      padding-left: 35px;
      background: #f5f5f5;
      border-radius: 8px;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      width: 100%;
      height: 40px;
      border-top-left-radius: 8px !important;
      border-bottom-left-radius: 8px !important;

      ::placeholder {
        color: #bebec2;
      }
    }
  }
`;

const Main = styled.main`
  .heading-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 19px;
    margin-top: 22px;

    h1 {
      font-family: ManropeSemibold;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.154px;
      color: #414047;
    }

    span {
      font-family: ManropeSemibold;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -0.408px;
      color: #885fff;

      svg {
        margin-left: 11px;
      }
    }
  }
`;

const Common = styled.div`
  width: 150px;
  height: 94px;
  border-radius: 6px;
  padding: 12px 0 0 12px;
  margin-bottom: 13px;

  .inner-div {
    display: flex;
    color: rgba(51, 55, 59, 0.7);
    font-family: ManropeSemibold;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    justify-content: space-between;
    padding-right: 16px;
    margin-top: 16px;
  }
`;
