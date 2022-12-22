import React from "react";

const Partners = () => {
  return (
    <div className="conteiner">
      <div className="row partners">
        <div className="col-9">
          <h2 className="text-center">Наши партнеры</h2>
          <div
            id="carouselExampleControls"
            class="carousel  carousel-dark slide "
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://etalon-agency.com/image/4098.jpeg"
                  class=" w-24"
                  alt="..."
                />
                <img
                  src="https://etalon-agency.com/image/4138.jpeg"
                  class=" w-24"
                  alt="..."
                />
                <img
                  src="https://etalon-agency.com/image/2013.jpeg"
                  class=" w-24"
                  alt="..."
                />
                <img
                  src="https://etalon-agency.com/image/2014.jpeg"
                  class=" w-24"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://etalon-agency.com/image/4138.jpeg"
                  class=" w-24"
                  alt="..."
                />
                <img
                  src="https://etalon-agency.com/image/2012.jpeg"
                  class=" w-24"
                  alt="..."
                />
                <img
                  src="https://etalon-agency.com/image/2015.jpeg"
                  class=" w-24"
                  alt="..."
                />
                <img
                  src="https://etalon-agency.com/image/4119.jpeg"
                  class=" w-24"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://etalon-agency.com/image/2017.jpeg"
                  class=" w-24"
                  alt="..."
                />
                <img
                  src="https://etalon-agency.com/image/4093.jpeg"
                  class=" w-24"
                  alt="..."
                />
                <img
                  src="https://etalon-agency.com/image/2012.jpeg"
                  class=" w-24"
                  alt="..."
                />
                <img
                  src="https://etalon-agency.com/image/2013.jpeg"
                  class=" w-24"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
