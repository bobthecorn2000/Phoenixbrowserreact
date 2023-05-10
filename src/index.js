import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import App from "./App";
import Banner from "./Banner"
import HorizonCard from './ad';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
        <App />
    <Banner/>
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
    
  </StrictMode>
);
