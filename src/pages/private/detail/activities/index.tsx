import styled from "styled-components";

import { ReactComponent as First } from "../../../../assets/images/svg/john.svg";
import { ReactComponent as Second } from "../../../../assets/images/svg/crypto.svg";

const Activities = () => {
  return (
    <Section>
      <div className="first-div">
        <p>12 activity found </p>
      </div>

      <div className="child-div">
        <div style={{ marginRight: 17 }}>
          <Second />
        </div>

        <div>
          <p>
            <a href="!#">johndoe.near</a> signed the contract successfully
          </p>

          <span>2 days ago</span>
        </div>
      </div>

      <div className="child-div">
        <div style={{ marginRight: 17 }}>
          <First />
        </div>

        <div>
          <p>
            <a href="!#">CryptoKing.near</a> requested to sign the contract
          </p>

          <span>3 days ago</span>
        </div>
      </div>

      <div className="child-div">
        <div style={{ marginRight: 17 }}>
          <Second />
        </div>

        <div>
          <p>
            <a href="!#">maxwell.near</a> signed the contract successfully
          </p>

          <span>2 days ago</span>
        </div>
      </div>
    </Section>
  );
};

export default Activities;

const Section = styled.section`
  margin-left: 22px;
  margin-right: 33px;
  .first-div {
    background: #f5f5f5;
    border-radius: 20px;
    width: 121px;
    height: 22px;
    text-align: center;
    margin: 19px auto;

    p {
      font-family: ManropeMedium;
      font-weight: 500;
      font-size: 13px;
      line-height: 18px;
      color: #6f6e73;
    }
  }

  .child-div {
    display: flex;
    margin-bottom: 20px;
    p {
      font-family: ManropeMedium;
      font-weight: 500;
      font-size: 15px;
      line-height: 20px;
      margin-bottom: 0;

      a {
        color: #885fff;
        text-decoration: none;
      }
    }

    span {
      font-size: 13px;
      line-height: 18px;
      font-family: ManropeMedium;
    }
  }
`;
