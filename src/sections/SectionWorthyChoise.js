import Container from "../components/Container";
import Section from "../components/Section";
import Title from "../components/Title";
import List from "../components/List";

function SectionWorthyChoise() {
  return (
    <Section tag="section" className="section-worthy-choise">
      <Container tag="div" className="title-container">
        <Title priority={2} className="title">
          Why are we worthy of your choice?
        </Title>
      </Container>
      <List
        className="worthy-list"
        list={[
          <li className="worthy-item">
            <Title priority={3} className="item-title">
              Flexible <span>schedule</span>
            </Title>
            <Container tag="div" className="description-container">
              <p>
                Our employees work remotely in your convenient time zone. You
                can choose either a full-time format or part-time employment.
              </p>
            </Container>
          </li>,
          <li className="worthy-item">
            <Title priority={3} className="item-title">
              Wide range <span>of candidates</span>
            </Title>
            <Container tag="div" className="description-container">
              <p>
                We select our best candidates from Ukraine and beyond it
                worldwide without loss of quality.
              </p>
            </Container>
          </li>,
          <li className="worthy-item">
            <Title priority={3} className="item-title">
              High level <span>qualification</span>
            </Title>
            <Container tag="div" className="description-container">
              <p>
                At the beginning of work, our employees undergo our training and
                internship, our staff has more than 150+ specialists.
              </p>
            </Container>
          </li>,
          <li className="worthy-item">
            <Title priority={3} className="item-title">
              Recruitment <span>and savings</span>
            </Title>
            <Container tag="div" className="description-container">
              <p>
                Our HR will provide you with a list of suitable specialists,
                significantly saving time and money.
              </p>
            </Container>
          </li>,
          <li className="worthy-item">
            <Title priority={3} className="item-title">
              Convenient <span>interview</span>
            </Title>
            <Container tag="div" className="description-container">
              <p>You can choose a suitable time and place for an interview.</p>
            </Container>
          </li>,
        ]}
      />
    </Section>
  );
}

export default SectionWorthyChoise;
