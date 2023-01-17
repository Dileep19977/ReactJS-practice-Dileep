import React from "react";
import { CiPhone,CiLinkedin } from "react-icons/ci";
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';

function dashboardui() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>About me</b></Accordion.Header>
        <Accordion.Body>
          
My name is Dileep Kumar Reddy Bodanam. I am a Full Stack Java Developer in developing Web - based Enterprise applications using Java/Java EE technologies.
<l> Front end skills:- Experience in Angular, React, HTML, CSS, JavaScript, Typescript, Bootstrap, REST API, HTTP client, Redux.</l>
<l> Experienced in all stages of SDLC (Software Development Life Cycle) including proposal, process engineering, requirement analysis, design, development, testing, deployment and support.</l>
<l> Experience Java 8 features such as Lambda expressions, Functional Interfaces, Streams to avoid boilerplate code, keep code simple and extensively used core java technologies such as Collections, Multithreading, and Exception Handling.</l>
<l>Experience in developing Server Side Programming using Spring Framework include Spring Boot (Micro Service), Spring IOC, Spring AOP, Spring MVC, Spring Security, Spring Data JPA, Spring Cache, Hibernate etc. Strong hand-on experience in their configuration, integration and implementation.</l>

      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Contact !</b></Accordion.Header>
        <Accordion.Body>
          <div style={{display:"grid"}}>

          <div class="alert alert-info"><CiPhone style={{fontSize:"20px"}}/> Mobile :  +1 417 413 4846 </div>
         <div class="alert alert-info"><CiLinkedin style={{fontSize:"20px",marginRight:'5px'}}/><a href={'//www.linkedin.com/in/dileep1997/'} target="_blank">Click here.!</a> </div> 
          </div>
        
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default dashboardui;