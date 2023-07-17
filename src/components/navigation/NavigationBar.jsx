import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Container,Nav, Navbar, Button} from 'react-bootstrap';
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const NavigationBar = () => {
  useEffect(() => {
    Aos.init({disable: 'phone'})
  }, []);
    return(

  <Navbar className="nav" bg="dark" variant="dark" fixed="top" expand="lg">
  <Container>
    <Navbar.Brand className="body-font-l"  data-aos="fade-down"data-aos-duration='600' href=".?">Carl Mercado</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse  className="justify-content-end">
      <Navbar.Text >
      <Nav className="me-auto">
        <Nav.Link className="body-font-m" data-aos="fade-down" data-aos-duration='800' href="?">Home</Nav.Link>
        <Nav.Link className="body-font-m" data-aos="fade-down" data-aos-duration='1000' href="#about-me">About</Nav.Link>
        <Nav.Link className="body-font-m" data-aos="fade-down" data-aos-duration='1200' href="#experience">Experience</Nav.Link>

        <Button className="body-font-l" data-aos="fade-down" data-aos-duration='1400' variant="outline-light" onClick={()=> window.open("https://drive.google.com/drive/folders/16283naCKhIfxdZwUIlp-eEDF7jdfcnDG?usp=sharing", "_blank")}>Resume</Button>
      </Nav>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
  

    )
}

export default NavigationBar