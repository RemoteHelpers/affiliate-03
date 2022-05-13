import Section from "./Section";
import Container from "./Container";
import Button from "./Button";
import { ReactComponent as Logo } from "../svg/logo-hover.svg";
import { ReactComponent as Skype } from "../svg/skype.svg";
import { ReactComponent as Telegram } from "../svg/telegram.svg";
import { ReactComponent as Viber } from "../svg/viber.svg";
import { ReactComponent as WhatsApp } from "../svg/whatsapp.svg";
import { ReactComponent as Email } from "../svg/email.svg";
import { ReactComponent as BurgerMenu } from "../svg/burger-menu.svg";

function AppBar() {
  return (
    <Section tag="header" className="header">
      <Container tag="div" className="logo-container">
        <Logo className="logo" width={97} height={23} />
      </Container>
      <Container tag="div" className="support-ua-container">
        <Button type="button" className="support-ua-btn">
          <p>Support Ukrainians</p>
        </Button>
      </Container>
      <Container tag="div" className="social-links-container">
        <Skype className="skype-svg" width={40} height={40} />
        <Telegram className="telegram-svg" width={40} height={40} />
        <Viber className="viber-svg" width={40} height={40} />
        <WhatsApp className="whatsapp-svg" width={40} height={40} />
        <Email className="email-svg" width={40} height={40} />
      </Container>
      <Container tag="div" className="get-consult-container">
        <Button type="button" className="get-consult-btn">
          <p>Get Free Consultation</p>
        </Button>
      </Container>
      <Container tag="div" className="burger-menu-container">
        <Button type="button" className="burger-menu-btn">
          <BurgerMenu className="burger-menu-svg" width={35} height={24} />
        </Button>
      </Container>
    </Section>
  );
}

export default AppBar;
