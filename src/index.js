import React from 'react';
import reactDom from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import facePic from './img/face.jpg';
import {Container,Nav, Navbar} from 'react-bootstrap';


function App(){
return(
<>
<NavigationBar/>
<IntroductionSelf/>
<AboutMe/>
</>
);
}

function NavigationBar(){
  return(
  <>
  <Navbar className="top-nav" bg="dark" variant="dark" fixed="top" expand="sm">
  <Container>
    <Navbar.Brand href="#home">Carl Mercado</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse  className="justify-content-end">
      <Navbar.Text >
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </>
  );
  }
function IntroductionSelf(){
  return(
    <section className="desc-container">
      <div className="desc-card">
        <div className="desc-flex">
           <p className="d-f-col">
              <br/><h2>Hi! Hello there! My name is Carl Mercado.</h2> 
              <br/> I am currently taking up my 3rd Year of Computer Science Majoring in Software Engineering at iACADEMY. I like tech, I like learning about new tech, I like discovering new tech.
              <br/><br/>I currently work on personal projects like this website while learning new tools to add to my skillset. </p>
               <img className="face-pic d-f-col" src={facePic} alt="Face"/>
        </div>
      </div>
    </section>
  );
}

function AboutMe(){
  return(
    <div className="about-container">
  <div className="about-card">
  
<div className="about-flex">
      <p className="a-f-col"><h1>About Me</h1>
      <br/><br/>I am an aspiring software engineer from the Philippines. In my free time, I often start pet projects while learning new languages and frameworks so I have a goal while I'm studying, this website being one of them.  
      <br/><br/>I started programming in 2016 back in my 4th year of highschool, I enjoyed solving problems and learning about new concepts that are entirely foreign to me.
      So I kept dabbling into different technologies and tools, made some basic Java Apps for my some student clients for their projects. Now we're here!
      
      <br/><br/>Currently, my skillsets are web design, HTML, CSS, JS, PHP, MySQL, MSSQL, Java, Boostrap, ReactJS, and React-Boostrap.</p>
      </div>
      </div>
      </div>
  );

}

reactDom.render(<App/>, document.getElementById('root'));