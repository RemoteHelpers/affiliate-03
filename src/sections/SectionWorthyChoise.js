import { useContext, useState } from "react";
import { btnContext } from "../App";
import Marquee from "react-easy-marquee";
import Container from "../components/Container";
import Section from "../components/Section";
import Title from "../components/Title";
import List from "../components/List";
import worthyData from "../data/worthyData.json";

const mobile_styles = {
  position: "absolute",
  width: "100vw",
  bottom: "7em",
  left: 0,
  display: "flex",
  alignItems: "end",
};
const desktop_styles = {
  position: "static",
  width: "100%",
  display: "flex",
  alignItems: "end",
};

function SectionWorthyChoise() {
  // const { width } = useContext(btnContext);
  // const [styles, setStyles] = useState(mobile_styles);
  // const [speed, setSpeed] = useState(0.04);

  // useEffect(
  //   useCallback(() => {
  //     if (width >= 1200) {
  //       setSpeed(0.12);
  //       setStyles(desktop_styles);
  //     } else {
  //       setStyles(mobile_styles);
  //       setSpeed(0.04);
  //     }
  //   }, [width]),
  //   [width],
  // );

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
      <Marquee
        duration={20000}
        reverse={true}
        className="running-string-container"
        height="250px"
      >
        <p className="running-string-text">Remote Helpers-</p>
        <p className="running-string-text">Remote Helpers-</p>
        <p className="running-string-text">Remote Helpers-</p>
        <p className="running-string-text">Remote Helpers-</p>
        <p className="running-string-text">Remote Helpers-</p>
        <p className="running-string-text">Remote Helpers-</p>
      </Marquee>
    </Section>
  );
}

export default SectionWorthyChoise;
