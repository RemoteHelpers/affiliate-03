import axios from "axios";
import { useContext } from "react";
import { btnContext } from "../App";
import Section from "../components/Section";
import Container from "../components/Container";
import Title from "../components/Title";
import Form from "../components/Form";
import List from "../components/List";
import { ReactComponent as WhatsApp } from "../svg/whatsapp.svg";
import { ReactComponent as Email } from "../svg/email.svg";
import contactFormTemplate from "../data/contactFormTemplate.json";

function SectionContactForm() {
  const { handleToggleModal, handleStatusForm } = useContext(btnContext);

  const handleSubmit = e => {
    e.preventDefault();
    handleToggleModal();
    handleStatusForm(0);
    const formData = new FormData(e.currentTarget);
    formData.set("global_company_name", "Remote Helpers");
    formData.set("project_company", "1.rh-s.com");
    formData.set("promocode", "MVO1Z1W21WOS");
    if (!formData.get("note")) formData.set("note", "-");

    axios
      .post("https://crm-s.com/api/v1/leads-public", formData)
      .then(response => {
        console.log(response.data);
        handleStatusForm(1);
      })
      .catch(error => {
        console.log(error.message);
        handleStatusForm(2);
      });
  };

  return (
    <Section className="section-contact-form" id="contact-form">
      <Container className="title-container">
        <Title>Let's have a chat</Title>
      </Container>
      <Container className="contact-form-container">
        <Title priority={3} className="form-title">
          How can we contact you?
        </Title>
        <Form
          className="contact-form"
          formFields={contactFormTemplate}
          onSubmit={handleSubmit}
        />
      </Container>
      <Container className="social-link-container">
        <Title priority={3} className="social-link-title">
          Contacts
        </Title>
        <List
          className="social-link-list"
          list={[
            <li className="social-link-item" key="social-link-email">
              <a href="mailto:sales@rh-s.com">
                <Email className="email-svg" width={40} height={40} />
                <p>sales@rh-s.com</p>
              </a>
            </li>,
            <li className="social-link-item" key="social-link-viber">
              <a href="mailto:finance@rh-s.com">
                <Email className="email-svg" width={40} height={40} />
                <p>finance@rh-s.com</p>
              </a>
            </li>,
            <li className="social-link-item" key="social-link-whatsapp">
              <a href="https://api.whatsapp.com/send?phone=380666146468">
                <WhatsApp className="whatsapp-svg" width={40} height={40} />
                <p>+380 (66) 614-6468</p>
              </a>
            </li>,
          ]}
        />
      </Container>
    </Section>
  );
}

export default SectionContactForm;
