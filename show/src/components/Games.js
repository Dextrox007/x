import React from "react";
import colorSharp from "../assets/img/color-sharp.png";

export const Games = () => {
  return (
    <section className="game" id="games">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="game-bx wow zoomIn">
              <h2>Games</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                <br />
                Lorem Ipsum has been the industry's standard dummy text.
              </p>
              <div className="button-container">
                <button className="vvd button-style-1">
                  <span>Button 1</span>
                </button>
                <button className="vvd button-style-2">
                  <span>Button 2</span>
                </button>
                <button className="vvd button-style-3">
                  <span>Button 3</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background Image Description" />
    </section>
  );
};
