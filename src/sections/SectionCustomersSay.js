import Section from "../components/Section";
import Container from "../components/Container";
import Title from "../components/Title";
import List from "../components/List";
import feedbackData from "../data/feedbackData.json";

function SectionCustomersSay() {
  return (
    <Section className="section-customers-say" id="customers-say">
      <Container className="title-container">
        <Title>
          What do <span>our customers say about us?</span>
        </Title>
      </Container>
      <List
        className="feedback-list"
        list={[
          feedbackData.map(({ name, comment }) => (
            <li key={name} className="feedback-item">
              <Title priority={3} className="item-title">
                {name}
              </Title>
              <p className="description">{comment}</p>
            </li>
          )),
        ]}
      />
    </Section>
  );
}

export default SectionCustomersSay;
