import { useContext } from "react";
import Section from "../components/Section";
import Button from "../components/Button";
import Title from "../components/Title";
import { Link } from "react-scroll/modules";
import ScrollHint from "../components/ScrollHint";
import { btnContext } from "../App";

function HeroSection() {
  const { handleSelector } = useContext(btnContext);

  return (
    <>
      <Section className="hero-section" id="home">
        <Title priority={1} className="hero-title">
          Find Remote Virtual<span> Employee</span>
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
