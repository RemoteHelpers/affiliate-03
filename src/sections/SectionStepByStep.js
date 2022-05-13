import Container from "../components/Container";
import List from "../components/List";
import Section from "../components/Section";
import Title from "../components/Title";

function SectionStepByStep() {
  return (
    <Section tag="section" className="section-step-by-step">
      <Container tag="div" className="title-container">
        <Title priority={2} className="title">
          Step-by-step
        </Title>
      </Container>
      <Container tag="div" className="step-list-container">
        <Title priority={3} className="step-list-title">
          How to hire an employee
        </Title>
        <List
          className="step-list"
          list={[
            <li className="step-item">
              <Container tag="div" className="item-number-container">
                <p>1</p>
              </Container>
              <Title priority={4} className="item-title">
                Fill the contact form
              </Title>
              <Container tag="div" className="item-descr-container">
                <p>Tell us about your project and needs</p>
              </Container>
            </li>,
            <li className="step-item">
              <Container tag="div" className="item-number-container">
                <p>2</p>
              </Container>
              <Title priority={4} className="item-title">
                Choose candidates
              </Title>
              <Container tag="div" className="item-descr-container">
                <p>Get the CVs list to fit you</p>
              </Container>
            </li>,
            <li className="step-item">
              <Container tag="div" className="item-number-container">
                <p>3</p>
              </Container>
              <Title priority={4} className="item-title">
                Hold an interview
              </Title>
              <Container tag="div" className="item-descr-container">
                <p>
                  Meet the candidates<span> Google Meet</span>
                  <span> Zoom</span>
                  <span> Skype</span>
                </p>
              </Container>
            </li>,
            <li className="step-item">
              <Container tag="div" className="item-number-container">
                <p>4</p>
              </Container>
              <Title priority={4} className="item-title">
                Sign the contract
              </Title>
              <Container tag="div" className="item-descr-container">
                <p>Start onboarding ASAP</p>
              </Container>
            </li>,
          ]}
        />
      </Container>
    </Section>
  );
}

export default SectionStepByStep;
