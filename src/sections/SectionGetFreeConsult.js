import Container from "../components/Container";
import List from "../components/List";
import Section from "../components/Section";
import Title from "../components/Title";
import { ReactComponent as Arrow } from "../svg/arrow.svg";
import specialityData from "../data/specialityData.json";

function SectionGetFreeConsult() {
  return (
    <Section className="section-get-consult" id="get-consult">
      <Container className="title-container">
        <Title>Get free consultation</Title>
        <Arrow width={43.5} height={41} className="arrow-svg" />
      </Container>
      <List
        className="speciality-list"
        list={[
          specialityData.map(({ speciality, types }) => (
            <li className="speciality-item" key={speciality}>
              <Title priority={3} className="item-title">
                {speciality}
              </Title>
              <List
                className="speciality-diversity-list"
                list={[
                  types.map(item => (
                    <li key={item}>
                      <p>{item}</p>
                    </li>
                  )),
                ]}
              />
            </li>
          )),
        ]}
      />
    </Section>
  );
}

export default SectionGetFreeConsult;
