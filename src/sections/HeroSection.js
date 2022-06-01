import { useContext } from "react";
import Section from "../components/Section";
import Button from "../components/Button";
import Title from "../components/Title";
import Link from "../components/Link";
import ScrollHint from "../components/ScrollHint";
import { btnContext } from "../App";

function HeroSection() {
  const { handleBtnChange } = useContext(btnContext);

  const handleLinkClick = () => handleBtnChange("get-consult-btn");

  return (
    <>
      <Section className="hero-section" id="home">
        <Title priority={1} className="hero-title">
          Find Remote Virtual<span> Employee</span>
        </Title>
        <Link href="#contact-form">
          <Button className="hero-btn" onClick={handleLinkClick}>
            <p>Contact Us</p>
          </Button>
        </Link>
      </Section>
      <ScrollHint />
    </>
  );
}

export default HeroSection;