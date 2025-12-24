import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <>
      <p className="bold paddingTop">
        <strong>U kunt ons ook rechtstreeks bereiken via:</strong>
      </p>

      <div>
        <div>
          <div className="box-info-normal">
            <div>
              <FaPhoneAlt />
              <p>Telefoon:</p>
            </div>
            <a href="tel:033266003">03/326 60 03</a>
          </div>

          <div className="box-info-normal">
            <div>
              <IoMail />
              <p>Email:</p>
            </div>
            <a href="mailto:info@rdscarcenter.be">
              info@rdscarcenter.be
            </a>
          </div>

          <div>
            <div>
              <FaMapMarkerAlt />
              <p>Locatie:</p>
            </div>
            <a
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c3f7850e6903df:0x44fb91390ea45b54"
              target="_blank"
              rel="noopener noreferrer"
            >
              RDS Carcenter BV<br />
              Merksemsesteenweg 11<br />
              2100 Deurne (Antwerpen)
            </a>
          </div>
        </div>

        <div>
          <p>Openingsuren</p>
          <p>
            Maandag: 9:00 – 18:00<br />
            Dinsdag: 9:00 – 18:00<br />
            Woensdag: 9:00 – 18:00<br />
            Donderdag: 9:00 – 18:00<br />
            Vrijdag: 9:00 – 13:00<br />
            Zaterdag: 10:00 – 16:00<br />
            Zondag en feestdagen gesloten
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;