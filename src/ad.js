import "./styles.css";

import React from 'react';
import { Card, Button } from 'react-bootstrap';

const HorizonCard = ({ title, text, buttonText }) => {
  return (
   <Card className="gradient">
        <Card.Body className="d-flex align-items-center">
        <div className="float-start">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </div>
        <Button variant="primary" className="ms-auto">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default HorizonCard;

const App = () => {
  return (
    <div>
      <HorizonCard
        title="Discover a New Horizon in Browsing"
        text="With Horizon, you can experience the web like never before. Our lightning-fast browser is designed to help you explore, discover, and connect with ease."
        buttonText="Download Now"
      />
      <HorizonCard
        title="Stay Private and Secure Online"
        text="Horizon is built with your privacy and security in mind. Our browser is designed to keep you safe and secure while you explore the web."
        buttonText="Get Horizon"
      />
      <HorizonCard
        title="Join the Horizon Community"
        text="Horizon is more than just a browser. It's a community of people who are passionate about exploring the web and discovering new things. Join us today!"
        buttonText="Learn More"
      />
    </div>
  );
};

