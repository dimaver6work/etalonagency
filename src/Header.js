import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <div className="conteiner">
          <div className="row text-center">
            <div className="col-12 header">
              <img
                className="mb-5 header_img"
                src="https://etalon-agency.com/image/logo.png"
                alt="icon"
              />
              <h1 className=" text-uppercase text-white mb-3">
                Бюро переводов Эталон
              </h1>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
