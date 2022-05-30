import Container from "../components/Container";
import Section from "../components/Section";
import Title from "../components/Title";
import List from "../components/List";
import worthyData from "../data/worthyData.json";

function SectionWorthyChoise() {
  return (
    <Section className="section-worthy-choise" id="worthy-choise">
      <Container className="title-container">
        <Title>Why are we worthy of your choice?</Title>
      </Container>
      <List
        className="worthy-list"
        list={[
          worthyData.map(({ worthyQuality, description }) => (
            <li className="worthy-item" key={worthyQuality}>
              <Title priority={3} className="item-title">
                {worthyQuality}
              </Title>
              <Container className="description-container">
                <p>{description}</p>
              </Container>
            </li>
          )),
        ]}
      />
    </Section>
  );
}

export default SectionWorthyChoise;
