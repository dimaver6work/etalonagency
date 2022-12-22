import React from "react";

const Accordion = () => {
  return (
    <div>
      <div className="conteiner">
        <div className="row acc_conteiner ">
          <div className="col-xl-4 col-sm-12">
            <h3 className="text-center">ДЛЯ ЧАСТНЫХ ЛИЦ</h3>
            <div className="line"></div>
            <div class="accordion" id="accordionL">
              <div class="accordion-item">
                <h2 class="accordion-header acc_header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOneL"
                    aria-expanded="true"
                    aria-controls="collapseOneL"
                  >
                    Перевод личных документов
                  </button>
                </h2>
                <div
                  id="collapseOneL"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOneL"
                  data-bs-parent="#accordionL"
                >
                  <div class="accordion-body">
                    <p>
                      <strong>К личным документам относятся:</strong>{" "}
                    </p>
                    <ul>
                      <li>паспорт</li>
                      <li>
                        свидетельства (о рождении, о браке, о разводе и др.)
                      </li>

                      <li> диплом и приложение к диплому</li>
                      <li>аттестат и приложение к аттестату</li>
                      <li>
                        справки (о присвоении идентификационного кода, об
                        отсутствии судимости, с работы, из банка, из ЖЭКа и др.)
                      </li>
                      <li> пенсионное удостоверение</li>
                      <li>трудовая книжка</li>

                      <li>водительские права</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwoL">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwoL"
                    aria-expanded="false"
                    aria-controls="collapseTwoL"
                  >
                    Нотариальное заверение переводов
                  </button>
                </h2>
                <div
                  id="collapseTwoL"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwoL"
                  data-bs-parent="#accordionL"
                >
                  <div class="accordion-body">
                    <p>
                      <strong>
                        Нотариально заверенный перевод может понадобиться для:
                      </strong>
                    </p>
                    <ul>
                      <li>
                        подачи документов в органы ЗАГС для оформления брака с
                        иностранцем или регистрации новорожденного
                      </li>
                      <li>
                        оформления постоянного или временного вида на жительство
                        в Украине
                      </li>

                      <li> подачи документов в налоговую или банк</li>
                      <li>
                        оформления справки о несудимости для иностранного
                        гражданина
                      </li>
                      <li>подачи документов в органы социальной защиты</li>
                      <li>
                        проведения нотариальных действий при участии
                        иностранного гражданина и др.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThreeL">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThreeL"
                    aria-expanded="false"
                    aria-controls="collapseThreeL"
                  >
                    Апостиль и легализация документов
                  </button>
                </h2>
                <div
                  id="collapseThreeL"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThreeL"
                  data-bs-parent="#accordionL"
                >
                  <div class="accordion-body">
                    <p>
                      В процессе подготовки документов для обучения в другой
                      стране, работы или для переезда на постоянное проживание
                      за рубеж, вам понадобится подготовить необходимые
                      документы для получения разрешений на пребывание,
                      обучение, работу. Документы необходимо легализовать в
                      зависимости от страны и целей подачи документов. Проще и
                      менее затратно это сделать в Украине.
                    </p>
                    <p>
                      Поставьте апостиль в Харькове и возьмите с собой идеально
                      оформленные документы при выезде из Украины. Штамп
                      Апостиль подтверждает подлинность ваших документов,
                      выданных каким-либо министерством Украины. Министерство
                      проверяет подлинность подписи лица, подписавшего документ,
                      и аутентичность печатей. Апостиль проставляется на
                      отдельном листе, который прошивается с оригиналом
                      документа, или на оригинале документа. Какие инстанции
                      могут проставить апостиль в Украине?
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFourL">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFourL"
                    aria-expanded="false"
                    aria-controls="collapseFourL"
                  >
                    Cправка о несудимости
                  </button>
                </h2>
                <div
                  id="collapseFourL"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFourL"
                  data-bs-parent="#accordionL"
                >
                  <div class="accordion-body">
                    <p>
                      <strong>Для чего нужна справка о несудимости?</strong>
                    </p>
                    <ul>
                      <li>для оформления гражданства или вида на жительство</li>
                      <li>для оформления паспортных документов</li>

                      <li> для оформления визы</li>
                      <li>для трудоустройства за рубежом</li>
                      <li>
                        для подачи документов в учреждения иностранных
                        государств
                      </li>
                      <li>для участия в тендере</li>
                      <li>при работе со взрывными веществами</li>

                      <li>
                        для усыновления, опекунства, создания приемной семьи,
                        открытия детского дома семейного типа
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFiveL">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFiveL"
                    aria-expanded="false"
                    aria-controls="collapseFiveL"
                  >
                    Нострификация
                  </button>
                </h2>
                <div
                  id="collapseFiveL"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFiveL"
                  data-bs-parent="#accordionL"
                >
                  <div class="accordion-body">
                    <p>
                      <strong>НОСТРИФИКАЦИЯ ДОКУМЕНТОВ ОБ ОБРАЗОВАНИИ</strong>
                    </p>
                    <p>
                      Если вы причисляете себя к категории людей, планирующих
                      свое будущее за рубежом, то вы наверняка сталкивались с
                      такими понятиями как легализация и нострификация диплома в
                      Украине.
                    </p>
                    <p>
                      Это определенного рода заверение образовательного
                      документа, которое подтверждает вашу квалификацию в других
                      странах. Это работает и в обратном порядке, так как
                      некоторые иностранцы приезжают продолжать получать
                      образование в Украину и им требуется узаконивание, то есть
                      нострификация дипломов своих предыдущих достижений.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second */}
          <div className="col-xl-4 col-sm-12">
            <h3 className="text-center">ДЛЯ БИЗНЕСА</h3>
            <div className="line"></div>
            <div class="accordion" id="accordionR">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOneR">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOneR"
                    aria-expanded="true"
                    aria-controls="collapseOneR"
                  >
                    Юридический перевод
                  </button>
                </h2>
                <div
                  id="collapseOneR"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOneR"
                  data-bs-parent="#accordionR"
                >
                  <div class="accordion-body">
                    <strong>
                      Перевод юридической документации включает в себя перевод:
                    </strong>{" "}
                    <ul>
                      <li>
                        Соглашений, контрактов, договоров международного уровня
                      </li>
                      <li>
                        Уставов, учредительных документов, свидетельств,
                        доверенностей.
                      </li>

                      <li>
                        {" "}
                        Меморандумов, законодательных и нормативно-правовых
                        актов.
                      </li>
                      <li>Судебных документов.</li>
                      <li>Нотариальных документов и апостилей.</li>
                      <li>Текстов гражданского и международного права.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwoR">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwoR"
                    aria-expanded="false"
                    aria-controls="collapseTwoR"
                  >
                    Перевод технической документации
                  </button>
                </h2>
                <div
                  id="collapseTwoR"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwoR"
                  data-bs-parent="#accordionR"
                >
                  <div class="accordion-body">
                    <strong>Какие технические тексты мы переводим?</strong>
                    <ul>
                      <li>Инструкции по эксплуатации к оборудованию</li>
                      <li>
                        Чертежи в форматах Word, jpeg, ppt, pdf, dwg, dxf, indd
                        и других.
                      </li>

                      <li>Технические условия к продукции</li>
                      <li>Спецификации</li>
                      <li>Справочники и пособия</li>
                      <li>Научные технические статьи и многое другое</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThreeR">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThreeR"
                    aria-expanded="false"
                    aria-controls="collapseThreeR"
                  >
                    Финансовый перевод
                  </button>
                </h2>
                <div
                  id="collapseThreeR"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThreeR"
                  data-bs-parent="#accordionR"
                >
                  <div class="accordion-body">
                    <strong>
                      Нашему бюро Вы можете доверить перевод таких финансовых
                      документов:
                    </strong>
                    <ul>
                      <li>бизнес-планы</li>
                      <li>годовые и аудиторские отчеты</li>

                      <li>прогнозы продаж</li>
                      <li>информация для акционеров</li>
                      <li>бухгалтерская отчетность и прочие документы</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFourR">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFourR"
                    aria-expanded="false"
                    aria-controls="collapseFourR"
                  >
                    Нотариальное заверение переводов
                  </button>
                </h2>
                <div
                  id="collapseFourR"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFourR"
                  data-bs-parent="#accordionR"
                >
                  <div class="accordion-body">
                    <p>
                      Иногда при оформлении пакета официальных документов для
                      бизнеса вам необходимо предоставить нотариально заверенный
                      перевод. В этом случае печатью и подписью нотариуса
                      подтверждается правильность перевода и наличие
                      соответствующего диплома у переводчика.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFiveR">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFiveR"
                    aria-expanded="false"
                    aria-controls="collapseFiveR"
                  >
                    Апостиль и легализация документов
                  </button>
                </h2>
                <div
                  id="collapseFiveR"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFiveR"
                  data-bs-parent="#accordionR"
                >
                  <div class="accordion-body">
                    <p>
                      В Украине существует несколько видов легализации
                      документов — нотариальное заверение, присяжный перевод,
                      апостиль и консульская легализация. Какой вид легализации
                      выбрать в каждом конкретном случае зависит от страны
                      назначения, в официальные органы которой будет
                      предоставляться документ.
                    </p>
                    <p>
                      Если между нашими странами было заключено соглашение об
                      упрощении процедуры легализации, то в этом вам достаточно
                      сделать нотариально заверенный перевод или перевод у
                      присяжного переводчика. В случае нотарильного заверения
                      нотариус подтверждает подпись переводчика. В отличие от
                      нотариуса, который удостоверяет только подпись обычного
                      переводчика, присяжный переводчик удостоверяет точность
                      перевода как такового.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
