import Container from "../components/Container";
import Button from "../components/Button";
import Title from "../components/Title";

function HeroSection() {
  return (
    <Container tag="section" className="hero-section">
      <Container tag="div" className="container">
        <Title priority={1} className="hero-title">
          Find Remote Virtual <span>Employee</span>
        </Title>
        <Button type="button" className="hero-btn">
          <p>Contact Us</p>
        </Button>
      </Container>
    </Container>
  );
}

export default HeroSection;
