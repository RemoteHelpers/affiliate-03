import { useInterval } from "usehooks-ts";
import { useContext, useCallback, useState } from "react";
import Section from "../components/Section";
import Button from "../components/Button";
import Title from "../components/Title";
import { Link } from "react-scroll/modules";
import ScrollHint from "../components/ScrollHint";
import { btnContext } from "../App";
import { heroTitleData } from "../data/heroTitleData";

function HeroSection() {
  const [indexTitle, setIndexTitle] = useState(0);
  const { handleSelector, width } = useContext(btnContext);

  useInterval(
    useCallback(() => {
      if (width >= 1200) {
        if (indexTitle !== heroTitleData.length - 1) {
          setIndexTitle(indexTitle + 1);
        } else {
          setIndexTitle(0);
        }
      } else {
        setIndexTitle(0);
      }
    }, [width, indexTitle]),
    3000,
  );

  return (
    <>
      <Section className="hero-section" id="home">
        <Title priority={1} className="hero-title">
          Find Remote Virtual <span>{heroTitleData[indexTitle]}</span>
        </Title>
        <Link
          to="contact-form"
          spy={true}
          smooth={true}
          duration={1500}
          onClick={() => handleSelector(8)}
        >
          <Button className="hero-btn">
            <p>Contact Us</p>
          </Button>
        </Link>
      </Section>
      <ScrollHint />
    </>
  );
}

export default HeroSection;
