import React from "react";

const About = () => {
  return (
    <div>
      <section className="about">
        <div className="conteiner">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center mb-5">Почему мы </h1>
            </div>
          </div>
          <div className="circles row">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className=" about_cirle">
                <i className="icon-mail"></i>
              </div>
              <h5 className="text-center">Перевод личных документов</h5>
              <div className="line"></div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="about_cirle">
                <i className="icon-ok"></i>
              </div>
              <h5 className="text-center">Нотариальное заверение</h5>
              <div className="line"></div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="about_cirle">
                <i className="icon-paper-plane"></i>
              </div>
              <h5 className="text-center">Апостили и нострификация</h5>
              <div className="line"></div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="about_cirle">
                <i className="icon-move"></i>
              </div>
              <h5 className="text-center">Оправка в любую точку мира</h5>
              <div className="line"></div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="about_cirle">
                <i className="icon-money"></i>
              </div>
              <h5 className="text-center">Привлекательные цены</h5>
              <div className="line"></div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="about_cirle">
                <i className="icon-mail"></i>
              </div>
              <h5 className="text-center">Справки о несудимости</h5>
              <div className="line"></div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="about_cirle">
                <i className="icon-plus"></i>
              </div>
              <h5 className="text-center">Медицинские переводы</h5>
              <div className="line"></div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="about_cirle">
                <i className="icon-police"></i>
              </div>
              <h5 className="text-center">Технические переводы</h5>
              <div className="line"></div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="about_cirle">
                <i className="icon-mic"></i>
              </div>
              <h5 className="text-center">Устные переводы</h5>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
