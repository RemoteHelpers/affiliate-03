import Section from "../components/Section";
import Container from "../components/Container";
import Title from "../components/Title";
import List from "../components/List";
import Button from "../components/Button";
import dedicatedStaffData from "../data/dedicatedStaffData.json";

function SectionDedicatedStaff() {
  let count = 0;
  return (
    <Section className="section-dedicated-staff">
      <Container className="title-container">
        <Title>Dedicated staff for your project</Title>
      </Container>
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
      <Button>
        <p>Contact Us</p>
      </Button>
    </Section>
  );
}

export default SectionDedicatedStaff;
