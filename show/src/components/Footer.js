import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://twitter.com/yourTwitterProfile"><img src={navIcon1} alt="Twitter Icon" /></a>
            <a href="https://facebook.com/yourFacebookProfile"><img src={navIcon2} alt="Facebook Icon" /></a>
            <a href="https://linkedin.com/yourLinkedInProfile"><img src={navIcon3} alt="LinkedIn Icon" /></a>
            </div>
            <p>&#169; {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
