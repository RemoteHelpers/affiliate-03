import { useState } from "react";
import classNames from "classnames";
import Section from "../components/Section";
import Container from "../components/Container";
import Switch from "../components/Switch";
import Title from "../components/Title";
import List from "../components/List";
import priceData from "../data/priceData.json";

function SectionPrices() {
  const [fullTimeMode, setFullTimeMode] = useState(true);
  const addClass = {
    fullTime: classNames({
      title: true,
      "is-active": fullTimeMode,
    }),
    partTime: classNames({
      title: true,
      "is-active": !fullTimeMode,
    }),
  };
  const onToggleChange = e => {
    setFullTimeMode(e.target.checked);
  };
  return (
    <Section className="section-prices">
      <Container className="title-container">
        <Title className={addClass.fullTime}>Full-time</Title>
        <Switch onChange={onToggleChange} value={fullTimeMode} />
        <Title className={addClass.partTime}>Part-time</Title>
      </Container>
      <List
        className="price-list"
        list={[
          priceData.map(
            ({ title, description, fullTimePrice, partTimePrice }) => (
              <li className="price-item" key={title + "-price"}>
                <Title priority={3} className="item-title">
                  {title}
                </Title>
                <p className="description">{description}</p>
                <p className="price">
                  {fullTimeMode ? fullTimePrice : partTimePrice} &#8364;
                </p>
              </li>
            ),
          ),
        ]}
      />
    </Section>
  );
}

export default SectionPrices;
