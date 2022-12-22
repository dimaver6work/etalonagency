import React from "react";
import telegram from "./accets/telegram.png";
import whatsapp from "./accets/whatsapp.png";
import viber from "./accets/viber.png";

const Contact = () => {
  return (
    <div className="contact row" id="footer">
      <h2 className="text-center">Контакты</h2>
      <div className="col-5">
        <p>E-mail: info@etalon-agency.com</p>
        <p>Телефон: +38 095 114 21 12</p>
        <p>Мессенджеры</p>
        <div className="messengers">
          <div className="messenger">
            <a href="https://t.me/dimaver6" target="_blank">
              <img src={telegram} />
              <p>Telegram</p>
            </a>
          </div>
          <div className="messenger">
            <a href="https://wa.me/+380953050947" target="_blank">
              <img src={whatsapp} />
              <p>WhatsApp</p>
            </a>
          </div>
          <div className="messenger">
            <a href="viber://chat?number=%2B380953050947">
              <img src={viber} />
              <p>Viber</p>
            </a>
          </div>
        </div>
      </div>
      <div className="col-5">
        <h3>Адрес:</h3>
        <a href="https://goo.gl/maps/YQL5Gts9MCue3qrY6" target="_blank">
          вулиця Сумська, 47, Харків, Харківська область, Украина, 61000
        </a>
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.240870685403!2d36.23463281571539!3d50.006840379416566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0e78881e8cb%3A0x7d054294decae777!2z0JHRjtGA0L4g0L_QtdGA0LXQstC-0LTQvtCyINCt0YLQsNC70L7QvQ!5e0!3m2!1sru!2spt!4v1671720072738!5m2!1sru!2spt"
            className="google"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
