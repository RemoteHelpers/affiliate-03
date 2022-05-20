import Section from "../components/Section";
import Button from "../components/Button";
import Title from "../components/Title";

function HeroSection() {
  return (
    <Section className="hero-section">
      <Title priority={1} className="hero-title">
        Find Remote Virtual <span>Employee</span>
      </Title>
      <Button className="hero-btn">
        <p>Contact Us</p>
      </Button>
    </Section>
  );
}

export default HeroSection;
