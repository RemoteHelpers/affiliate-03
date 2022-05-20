import Section from "../components/Section";
import Container from "../components/Container";
import Button from "../components/Button";
import Title from "../components/Title";

function SectionSupportUA() {
  return (
    <Section className="section-support-ua">
      <Container className="title-container">
        <Title>
          Let`s help each other in the current situation
        </Title>
      </Container>
      <Container className="description-container">
        <p>
          Hiring Ukrainians, you help each family save their incomes in such a
          terrible military environment that appears now in a beautiful country.
          People need a job to keep their families and children, and our
          specialists move to different cities and countries to work without
          threatening their lives. Enormous amounts of various organizations now
          help Ukraine in general and support the army. However, Remote Helpers
          is a company that takes care of people, providing them with the
          working places, allowing them to work from any part of the world.
          Among our specialists are developers, illustrators, designers, lead
          managers, marketers, and video editors. <br />
          <br />
          If you have any tasks that could be done remotely, we'll be glad to
          take them further. Let's help each other: you can provide us with the
          work, and we'll free you from routine issues. Each person hired on the
          project allows us to provide more people with the job, and addressing
          us is the right option if you intend to join this mission and help.
        </p>
      </Container>
      <Button>
        <p>Become Helper</p>
      </Button>
    </Section>
  );
}

export default SectionSupportUA;
