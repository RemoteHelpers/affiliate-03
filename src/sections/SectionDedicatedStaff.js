import { useContext } from "react";
import Section from "../components/Section";
import Container from "../components/Container";
import Title from "../components/Title";
import List from "../components/List";
import Button from "../components/Button";
import { Link } from "react-scroll/modules";
import dedicatedStaffData from "../data/dedicatedStaffData.json";
import { btnContext } from "../App";

function SectionDedicatedStaff() {
  const { handleSelector } = useContext(btnContext);

  return (
    <Section className="section-dedicated-staff" id="dedicated-staff">
      <Container className="title-container">
        <Title>Dedicated staff for your project</Title>
      </Container>
      <Container className="content-container">
        <List
          className="dedicated-staff-list"
          list={[
            dedicatedStaffData.map((item, index) => (
              <li className="dedicated-staff-item" key={item}>
                <Container tag="div" className="number-container">
                  <p>{++index}</p>
                </Container>
                <Container tag="div" className="description-container">
                  <p>{item}</p>
                </Container>
              </li>
            )),
          ]}
        />
        <Container className="btn-container">
          <Link
            to="contact-form"
            spy={true}
            smooth={true}
            duration={600}
            onClick={() => handleSelector(8)}
          >
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
