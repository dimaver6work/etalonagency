import React from "react";

const Reviews = () => {
  return (
    <div className="conteiner">
      <div className="row reviews">
        <div className="col-3">
          <h3 className="">Отзывы</h3>
          <h4>
            Обязательно сообщите, если перевод не понравился. Наша установка —
            сделать все для того, чтобы вы остались довольны нашей работой.
          </h4>
          <p>
            Посмотреть, что думают наши клиенты, можно в гугл картах, а также в
            социальных сетях.
          </p>
        </div>
        <div className=" col-4">
          <div className="m1  row">
            <div className="message">
              <p>
                Мне кажется, что перевод неправильный, я встречал другие
                термины.
              </p>
            </div>
            <div className="answer">
              <p>
                Какие фрагменты перевода вам показались неправильными? Мы
                поясним свои решения и ответим на любые вопросы.
              </p>
            </div>
          </div>
          <div className="m1 row">
            <div className="message">
              <p>Вот. Я отметил все в документе.</p>
            </div>
            <div className="answer">
              <p>
                Спасибо. В ближайшее время пришлем детальный разбор и предложим
                другие варианты перевода, где это возможно.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
