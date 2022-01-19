import { Accordion, Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import styled from "styled-components";

import { ReactComponent as UpArrow } from "../../../../assets/images/svg/up-arrow.svg";
import { ReactComponent as Round } from "../../../../assets/images/svg/round.svg";

const Details = () => {
  type Props = {
    children: string;
    eventKey: string;
  };

  const CustomToggle: React.FC<Props> = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button type="button" onClick={decoratedOnClick}>
        <span>{children}</span>

        <UpArrow />
      </button>
    );
  };

  return (
    <Section>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <CustomToggle eventKey="0">Overview</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              it is easy to electronically sign, manage and distribute all your
              contracts and documents safely, securely, anywhere, anytime-
              paperlessly.
              <div style={{ marginTop: 10 }}>
                <button className="btn">
                  <span style={{ marginRight: 10 }}>
                    <Round />
                  </span>
                  <span>https://docusignn.io</span>
                </button>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Section>
  );
};

export default Details;

const Section = styled.section`
  margin-top: 20px;
  .card {
    border: none;

    .card-header {
      background-color: #ffffff;
      border: none;

      button {
        width: 100%;
        background-color: #ffffff;
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: ManropeSemibold;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.154px;
        color: #414047;
      }
    }

    .btn {
      border: none;
      color: #587be0;
      font-family: ManropeMedium;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
    }
  }
`;
