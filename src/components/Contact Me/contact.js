// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// import {
//     AiFillGithub,
//     AiOutlineTwitter,
//     AiFillInstagram,
//     AiFillFacebook
//   } from "react-icons/ai";
//   import { FaLinkedinIn,
//     FaHackerrank
//   } from "react-icons/fa";
  
// const ContactForm = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//     };
//     return (
//         <Container style={{height:"105vh"}}>
//             <Row>
//                 <Col style={{alignItems:'center',display:'flex',flexDirection:'column'}}>
//                     <Form.Label style={{ marginTop: '100px' }}></Form.Label>
//                     <Form onSubmit={handleSubmit} style={{width:'65%',border:'1px solid white',padding:'5%',borderRadius:'20px'}}>
//                         <Form.Group controlId="name" style={{ marginBottom: '20px',textAlign:'left' }}>
//                             <Form.Label style={{color:'white'}}>Name</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 id="name"required
//                                 placeholder="Enter your name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 style={{ width: '100%', margin: '0 auto' }}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="email" style={{ marginBottom: '20px',textAlign:'left' }}>
//                         <Form.Label style={{color:'white'}}>Email</Form.Label>
//                             <Form.Control
//                                 type="email"
//                                 id="email"required
//                                 placeholder="Enter your email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 style={{ width: '100%', margin: '0 auto' }}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="message" style={{ marginBottom: '20px',textAlign:'left' }}>
//                         <Form.Label style={{color:'white'}}>Ask Something</Form.Label>
//                             <Form.Control
//                                 as="textarea"
//                                 id="message"required
//                                 rows={3}
//                                 placeholder="Enter your message here"
//                                 value={message}
//                                 onChange={(e) => setMessage(e.target.value)}
//                                 style={{ width: '100%', margin: '0 auto' }} // Adjust the width here
//                             />
//                         </Form.Group>
//                         <Button variant="primary" type="submit" >
//                             Submit
//                         </Button>
//                         <Row>
//                           <Col style={{ marginBottom: '20px' }}></Col>
//                        </Row>
//                         <Row>
//                           <Col>
//              <ul className="home-about-social-links">
//               <li className="social-icons">
//                 <a
//                   href="https://github.com/Surya01122002"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <AiFillGithub />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.hackerrank.com/profile/Surya20021201"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <FaHackerrank />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://twitter.com/SuryaPitchaiyan"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <AiOutlineTwitter />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.linkedin.com/in/surya--p/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.instagram.com/sur_ya.01/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiFillInstagram />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.facebook.com/surya.vaduvur/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiFillFacebook />
//                 </a>
//               </li>
//             </ul>
//             </Col>
//           </Row>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };
// export default ContactForm;

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillFacebook
  } from "react-icons/ai";
  import { FaLinkedinIn,
    FaHackerrank
  } from "react-icons/fa";
  
const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const serviceId = "service_y1kba6h";
    const templateId = "template_7ro3zho";
    

    function sendEmail(e) {
      e.preventDefault();
      console.log(e.target);
      emailjs.sendForm("service_y1kba6h", "template_7ro3zho",e.target,"eyTJfjOZhSwlTX8dq")
          .then((result) => {
              console.log(result.text);
              setEmail('');
              setName('');
              setMessage('');
          }, (error) => {
              console.log(error);
          });
      e.target.reset()
  }
    
    return (
        <Container style={{height:"105vh"}}>
            <Row>
                <Col style={{alignItems:'center',display:'flex',flexDirection:'column'}}>
                    <Form.Label style={{ marginTop: '100px' }}></Form.Label>
                    <Form onSubmit={sendEmail} style={{width:'65%',border:'1px solid white',padding:'5%',borderRadius:'20px'}}>
                        <Form.Group controlId="name" style={{ marginBottom: '20px',textAlign:'left' }}>
                            <Form.Label style={{color:'white'}}>Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="name"required
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{ width: '100%', margin: '0 auto' }}
                            />
                        </Form.Group>
                        <Form.Group controlId="email" style={{ marginBottom: '20px',textAlign:'left' }}>
                        <Form.Label style={{color:'white'}}>Email</Form.Label>
                            <Form.Control
                                type="email"
                                id="email"required
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ width: '100%', margin: '0 auto' }}
                            />
                        </Form.Group>
                        <Form.Group controlId="message" style={{ marginBottom: '20px',textAlign:'left' }}>
                        <Form.Label style={{color:'white'}}>Ask Something</Form.Label>
                            <Form.Control
                                as="textarea"
                                id="message"required
                                rows={3}
                                placeholder="Enter your message here"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                style={{ width: '100%', margin: '0 auto' }} // Adjust the width here
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                        <Row>
                          <Col style={{ marginBottom: '20px' }}></Col>
                       </Row>
                        <Row>
                          <Col>
             <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Surya01122002"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.hackerrank.com/profile/Surya20021201"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaHackerrank />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/SuryaPitchaiyan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/surya--p/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sur_ya.01/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/surya.vaduvur/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
            </Col>
          </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactForm;

// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// const ContactForm = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//     };

//     return (
//         <Container style={{height:"85vh"}}>
//             <Row>
//                 <Col style={{alignItems:'center',display:'flex',flexDirection:'column'}}>
//                     <Form.Label style={{ marginTop: '100px' }}></Form.Label>
//                     <Form onSubmit={handleSubmit} style={{width:'65%',border:'1px solid white',padding:'5%',borderRadius:'20px'}}>
//                         <Form.Group controlId="name" style={{ marginBottom: '20px',textAlign:'left' }}>
//                             <Form.Label style={{color:'white'}}>Name</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Enter your name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 style={{ width: '100%', margin: '0 auto' }}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="email" style={{ marginBottom: '20px',textAlign:'left' }}>
//                         <Form.Label style={{color:'white'}}>Email</Form.Label>
//                             <Form.Control
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 style={{ width: '100%', margin: '0 auto' }}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="message" style={{ marginBottom: '20px',textAlign:'left' }}>
//                         <Form.Label style={{color:'white'}}>Ask Something</Form.Label>
//                             <Form.Control
//                                 as="textarea"
//                                 rows={3}
//                                 placeholder="Enter your message here"
//                                 value={message}
//                                 onChange={(e) => setMessage(e.target.value)}
//                                 style={{ width: '100%', margin: '0 auto' }} // Adjust the width here
//                             />
//                         </Form.Group>

//                         <Button variant="primary" type="submit">
//                             Submit
//                         </Button>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default ContactForm;