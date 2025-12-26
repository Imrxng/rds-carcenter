import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoTime } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <>
      <p className="bold paddingTop">
        <strong>U kunt ons ook rechtstreeks bereiken via:</strong>
      </p>

      <div id="contact-info-container">
        <div>
          <div className="box-info-normal">
            <div>
              <FaPhoneAlt />
              <p className="bold">Telefoon:</p>
            </div>
            <a href="tel:033266003">03/326 60 03</a>
          </div>

          <div className="box-info-normal">
            <div>
              <IoMail />
              <p className="bold">Email:</p>
            </div>
            <a href="mailto:info@rdscarcenter.be">
              info@rdscarcenter.be
            </a>
          </div>

          <div id="box-info-location">
            <div>
              <FaMapMarkerAlt />
              <p className="bold">Locatie:</p>
            </div>
            <a
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c3f7850e6903df:0x44fb91390ea45b54"
              target="_blank"
              rel="noopener noreferrer"
              className="address-link"
            >
              <address>
                <span className="bold">RDS Carcenter BV</span><br />
                Merksemsesteenweg 11<br />
                2100 Deurne, Antwerpen
              </address>
            </a>
          </div>
        </div>

        <div id="contactInfo-container-openingsuren">
          <div id="container-svg-openingstijden">
            <IoTime />
            <p className="bold">Openingstijden:</p>
          </div>
          <div id="openingsuren-dagen">
            <p><span className="bold">Maandag:</span> 09:00 – 18:00</p>
            <p><span className="bold">Dinsdag:</span> 09:00 – 18:00</p>
            <p><span className="bold">Woensdag:</span> 09:00 – 18:00</p>
            <p><span className="bold">Donderdag:</span> 09:00 – 18:00</p>
            <p><span className="bold">Vrijdag:</span> 09:00 – 13:00</p>
            <p><span className="bold">Zaterdag:</span> 09:00 – 13:00</p>
            <p><span className="bold">Zondag en feestdagen gesloten</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;