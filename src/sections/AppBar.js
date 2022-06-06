import { useContext } from "react";
import { Link } from "react-scroll/modules";
import Section from "../components/Section";
import Container from "../components/Container";
import Button from "../components/Button";
import List from "../components/List";
import { btnContext } from "../App";
import { ReactComponent as Logo } from "../svg/logo-hover.svg";
import { ReactComponent as WhatsApp } from "../svg/whatsapp.svg";
import { ReactComponent as Email } from "../svg/email.svg";
import { ReactComponent as BurgerMenu } from "../svg/burger-menu.svg";

function AppBar() {
  const { handleToggleModal, handleSelector } = useContext(btnContext);

  const handleLinkClick = e => {
    const { index } = e.currentTarget.dataset;
    handleSelector(Number(index));
  };
  return (
    <Section tag="header" className="header">
      <Container tag="div" className="logo-container">
        <a href="/">
          <Logo className="logo" width={97} height={23} />
        </a>
      </Container>
      <Container className="inner-flex-container">
        <Container tag="div" className="support-ua-container">
          <a href="#support-ua" data-index={1} onClick={handleLinkClick}>
            <Button type="button" className="support-ua-btn">
              <p>Support Ukrainians</p>
            </Button>
          </a>
        </Container>
        <List
          className="social-link-list"
          list={[
            <li key="app-bar-viber" className="social-link-item">
              <a href="mailto:sales@rh-s.com">
                <Email className="email-svg" width={40} height={40} />
              </a>
            </li>,
            <li key="app-bar-email" className="social-link-item">
              <a href="mailto:finance@rh-s.com">
                <Email className="email-svg" width={40} height={40} />
              </a>
            </li>,
            <li key="app-bar-whatsapp" className="social-link-item">
              <a href="https://api.whatsapp.com/send?phone=380666146468">
                <WhatsApp className="whatsapp-svg" width={40} height={40} />
              </a>
            </li>,
          ]}
        />
        <Container tag="div" className="get-consult-container">
          <Link
            to="contact-form"
            data-index={8}
            onClick={handleLinkClick}
            spy={true}
            smooth={true}
            duration={1600}
          >
            <Button type="button" className="get-consult-btn">
              <p>Get Free Consultation</p>
            </Button>
          </Link>
        </Container>
        <Container tag="div" className="burger-menu-container">
          <Button
            type="button"
            className="burger-menu-btn"
            onClick={() => handleToggleModal()}
          >
            <BurgerMenu className="burger-menu-svg" width={35} height={24} />
          </Button>
        </Container>
      </Container>
    </Section>
  );
}

export default AppBar;
