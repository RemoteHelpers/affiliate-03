import Container from "../components/Container";
import List from "../components/List";
import Section from "../components/Section";
import Title from "../components/Title";
import { ReactComponent as Arrow } from "../svg/arrow.svg";

function SectionGetFreeConsult() {
  return (
    <Section tag="section" className="section-get-consult">
      <Container tag="div" className="title-container">
        <Title priority={2} className="title">
          Get free consultation
        </Title>
        <Arrow width={43.5} height={41} className="arrow-svg" />
      </Container>
      <List
        className="speciality-list"
        list={[
          <li className="speciality-item">
            <Title priority={3} className="item-title">
              Assistant
            </Title>
            <List
              className="speciality-diversity-list"
              list={[
                <li>
                  <p>Accountant</p>
                </li>,
                <li>
                  <p>Personal assistant</p>
                </li>,
                <li>
                  <p>Customer support</p>
                </li>,
              ]}
            />
          </li>,
          <li className="speciality-item">
            <Title priority={3} className="item-title">
              Sales
            </Title>
            <List
              className="speciality-diversity-list"
              list={[
                <li>
                  <p>Data entry</p>
                </li>,
                <li>
                  <p>Sales manager</p>
                </li>,
                <li>
                  <p>Lead generator</p>
                </li>,
              ]}
            />
          </li>,
          <li className="speciality-item">
            <Title priority={3} className="item-title">
              Marketer
            </Title>
            <List
              className="speciality-diversity-list"
              list={[
                <li>
                  <p>Project Manager</p>
                </li>,
                <li>
                  <p>Content Manager</p>
                </li>,
                <li>
                  <p>SEO/ SMM/ PPC</p>
                </li>,
                <li>
                  <p>Influencer Manager</p>
                </li>,
                <li>
                  <p>Copywriter</p>
                </li>,
                <li>
                  <p>Email marketer</p>
                </li>,
              ]}
            />
          </li>,
          <li className="speciality-item">
            <Title priority={3} className="item-title">
              Designer
            </Title>
            <List
              className="speciality-diversity-list"
              list={[
                <li>
                  <p>UI/UX designer</p>
                </li>,
                <li>
                  <p>Graphic designer</p>
                </li>,
                <li>
                  <p>Web designer</p>
                </li>,
                <li>
                  <p>Illustrator</p>
                </li>,
                <li>
                  <p>Video editor</p>
                </li>,
              ]}
            />
          </li>,
          <li className="speciality-item">
            <Title priority={3} className="item-title">
              Developer
            </Title>
            <List
              className="speciality-diversity-list"
              list={[
                <li>
                  <p>Full stack developer</p>
                </li>,
                <li>
                  <p>Frontend developer</p>
                </li>,
                <li>
                  <p>Backend developer</p>
                </li>,
                <li>
                  <p>QA tester</p>
                </li>,
              ]}
            />
          </li>,
        ]}
      />
    </Section>
  );
}

export default SectionGetFreeConsult;
