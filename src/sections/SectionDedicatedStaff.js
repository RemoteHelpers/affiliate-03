import Section from "../components/Section";
import Container from "../components/Container";
import Title from "../components/Title";
import List from "../components/List";

function SectionDedicatedStaff() {
  return (
    <Section tag="section" className="section-dedicated-staff">
      <Container tag="div" className="title-container">
        <Title priority={2} className="title">
          Dedicated staff for your project
        </Title>
      </Container>
      <List
        className="dedicated-staff-list"
        list={[
          <li className="dedicated-staff-item">
            <Container tag="div" className="number-container">
              <p>1</p>
            </Container>
            <Container tag="div" className="description-container">
              <p>Reducing time for searching candidates</p>
            </Container>
          </li>,
          <li className="dedicated-staff-item">
            <Container tag="div" className="number-container">
              <p>2</p>
            </Container>
            <Container tag="div" className="description-container">
              <p>Providing well-trained specialists</p>
            </Container>
          </li>,
          <li className="dedicated-staff-item">
            <Container tag="div" className="number-container">
              <p>3</p>
            </Container>
            <Container tag="div" className="description-container">
              <p>Choosing the employees to your requirements</p>
            </Container>
          </li>,
          <li className="dedicated-staff-item">
            <Container tag="div" className="number-container">
              <p>4</p>
            </Container>
            <Container tag="div" className="description-container">
              <p>Getting controlled workers</p>
            </Container>
          </li>,
          <li className="dedicated-staff-item">
            <Container tag="div" className="number-container">
              <p>5</p>
            </Container>
            <Container tag="div" className="description-container">
              <p>
                Saving your time not dealing with
                <br />
                the various documentation
              </p>
            </Container>
          </li>,
        ]}
      />
    </Section>
  );
}

export default SectionDedicatedStaff;
