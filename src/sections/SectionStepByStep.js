import Container from "../components/Container";
import List from "../components/List";
import Section from "../components/Section";
import Title from "../components/Title";
import stepData from "../data/stepData.json";

function SectionStepByStep() {
  let count = 0;
  return (
    <Section className="section-step-by-step">
      <Container className="title-container">
        <Title>Step-by-step</Title>
      </Container>
      <Container className="step-list-container">
        <Title priority={3} className="step-list-title">
          How to hire an employee
        </Title>
        <List
          className="step-list"
          list={[
            stepData.map(({ step, descriptions }) => (
              <li className="step-item" key={step}>
                <Container className="item-number-container">
                  <p>{++count}</p>
                </Container>
                <Title priority={4} className="item-title">
                  {step}
                </Title>
                <Container className="item-descr-container">
                  {descriptions.map(item => (
                    <p key={item}>{item}</p>
                  ))}
                </Container>
              </li>
            )),
          ]}
        />
      </Container>
    </Section>
  );
}

export default SectionStepByStep;
