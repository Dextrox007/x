import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDVHi5EHn4sRlZefZLc9_Wa9uHd91UaNPc",
  authDomain: "portfoliox-2cc02.firebaseapp.com",
  projectId: "portfoliox-2cc02",
  storageBucket: "portfoliox-2cc02.appspot.com",
  messagingSenderId: "932277170836",
  appId: "1:932277170836:web:0197f9ea076ce713a8ba81",
  measurementId: "G-7973JS220Q"
};

export const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Set the button text to "Sending..."
    setButtonText("Sending...");
  
    try {
      // Initialize Firestore
  
      // Get a reference to the contactSubmissions collection.
      const contactSubmissionsCollection = db.collection('contactSubmissions');
  
      // Add a new document to the collection.
      const submissionRef = await contactSubmissionsCollection.add(formDetails);
  
      setButtonText("Send");
      // Handle success
      setStatus({ success: true, message: "Message sent successfully" });
  
      // Optionally, you can retrieve the newly created document's ID.
      console.log('Document ID:', submissionRef.id);
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) => (
              <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
            )}
          </TrackVisibility>
        </Col>
        <Col xs={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.name} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)} />
                    </Col>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                    </Col>
                    <Col xs={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
                {status.message && (
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </Col>
                )}
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
  );
};
export default Contact;