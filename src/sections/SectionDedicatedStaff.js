import { useContext } from "react";
import Section from "../components/Section";
import Container from "../components/Container";
import Title from "../components/Title";
import List from "../components/List";
import Button from "../components/Button";
import Link from "../components/Link";
import dedicatedStaffData from "../data/dedicatedStaffData.json";
import { btnContext } from "../App";

function SectionDedicatedStaff() {
  const { handleSelector } = useContext(btnContext);
  let count = 0;

  return (
    <Section className="section-dedicated-staff" id="dedicated-staff">
      <Container className="title-container">
        <Title>Dedicated staff for your project</Title>
      </Container>
      <Container className="content-container">
        <List
          className="dedicated-staff-list"
          list={[
            dedicatedStaffData.map(item => (
              <li className="dedicated-staff-item" key={item}>
                <Container tag="div" className="number-container">
                  <p>{++count}</p>
                </Container>
                <Container tag="div" className="description-container">
                  <p>{item}</p>
                </Container>
              </li>
            )),
          ]}
        />
        <Container className="btn-container">
          <Link href="#contact-form" onClick={() => handleSelector(8)}>
            <Button>
              <p>Contact Us</p>
            </Button>
          </Link>
        </Container>
      </Container>
    </Section>
  );
}

export default SectionDedicatedStaff;
