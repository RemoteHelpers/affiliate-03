import { useContext } from "react";
import Section from "../components/Section";
import Container from "../components/Container";
import Button from "../components/Button";
import List from "../components/List";
import Link from "../components/Link";
import { btnContext } from "../App";
import { ReactComponent as Logo } from "../svg/logo-hover.svg";
import { ReactComponent as Skype } from "../svg/skype.svg";
import { ReactComponent as Telegram } from "../svg/telegram.svg";
import { ReactComponent as Viber } from "../svg/viber.svg";
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
        <Link href="/">
          <Logo className="logo" width={97} height={23} />
        </Link>
      </Container>
      <Container tag="div" className="support-ua-container">
        <Link href="#support-ua" dataIndex={1} onClick={handleLinkClick}>
          <Button type="button" className="support-ua-btn">
            <p>Support Ukrainians</p>
          </Button>
        </Link>
      </Container>
      <List
        className="social-link-list"
        list={[
          <li key="app-bar-skype" className="social-link-item">
            <Link>
              <Skype className="skype-svg" width={40} height={40} />
            </Link>
          </li>,
          <li key="app-bar-telegram" className="social-link-item">
            <Link>
              <Telegram className="telegram-svg" width={40} height={40} />
            </Link>
          </li>,
          <li key="app-bar-viber" className="social-link-item">
            <Link>
              <Viber className="viber-svg" width={40} height={40} />
            </Link>
          </li>,
          <li key="app-bar-whatsapp" className="social-link-item">
            <Link>
              <WhatsApp className="whatsapp-svg" width={40} height={40} />
            </Link>
          </li>,
          <li key="app-bar-email" className="social-link-item">
            <Link>
              <Email className="email-svg" width={40} height={40} />
            </Link>
          </li>,
        ]}
      />
      <Container tag="div" className="get-consult-container">
        <Link href="#contact-form" dataIndex={8} onClick={handleLinkClick}>
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
    </Section>
  );
}

export default AppBar;
