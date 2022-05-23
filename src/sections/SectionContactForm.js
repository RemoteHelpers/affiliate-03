import { useState } from "react";
import Section from "../components/Section";
import Container from "../components/Container";
import Title from "../components/Title";
import Form from "../components/Form";
import List from "../components/List";
import { ReactComponent as Skype } from "../svg/skype.svg";
import { ReactComponent as Telegram } from "../svg/telegram.svg";
import { ReactComponent as Viber } from "../svg/viber.svg";
import { ReactComponent as WhatsApp } from "../svg/whatsapp.svg";
import { ReactComponent as Email } from "../svg/email.svg";
import contactFormTemplate from "../data/contactFormTemplate.json";

function SectionContactForm() {
  const [data, setData] = useState({});

  const handleSubmit = () => {
    console.log(data);
  };
  return (
    <Section className="section-contact-form">
      <Container className="title-container">
        <Title>Let's have a chat</Title>
      </Container>
      <Title priority={3} className="form-title">
        How can we contact you?
      </Title>
      <Form
        className="contact-form"
        formFields={contactFormTemplate}
        onSubmit={handleSubmit}
      />
      <Container className="social-link-container">
        <List
          className="social-link-list"
          list={[
            <li className="social-link-item" key="social-link-skype">
              <a href="https://join.skype.com/invite/gdwXqMoD0kYo">
                <Skype className="skype-svg" width={40} height={40} />
                <p>youisrael</p>
              </a>
            </li>,
            <li className="social-link-item" key="social-link-telegram">
              <a href="#">
                <Telegram className="telegram-svg" width={40} height={40} />
                <p>@nikokardc</p>
              </a>
            </li>,
            <li className="social-link-item" key="social-link-email">
              <a href="#">
                <Email className="email-svg" width={40} height={40} />
                <p>@sales@rh-s.com</p>
              </a>
            </li>,
            <li className="social-link-item" key="social-link-viber">
              <a href="#">
                <Viber className="viber-svg" width={40} height={40} />
                <p>+38 099 710 10 33</p>
              </a>
            </li>,
            <li className="social-link-item" key="social-link-whatsapp">
              <a href="#">
                <WhatsApp className="whatsapp-svg" width={40} height={40} />
                <p>+97 250 901 4509</p>
              </a>
            </li>,
          ]}
        />
      </Container>
    </Section>
  );
}

export default SectionContactForm;
