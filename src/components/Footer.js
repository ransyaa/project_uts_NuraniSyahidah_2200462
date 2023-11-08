import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="SocialMedia">
        <a href="https://www.instagram.com/rannsyaa_">
          <InstagramIcon className="icon"/>
        </a>
        <a href="https://wa.me/089531926746">
          <WhatsAppIcon className="icon"/>
        </a>
        <a href="https://www.linkedin.com/in/nurani-syahidah-0a4b10246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <LinkedInIcon className="icon"/>
        </a>
      </div>
      <p>&copy; 2023</p>
    </div>
  );
}

export default Footer;
