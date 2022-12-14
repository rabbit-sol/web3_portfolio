import React from "react";
import SectionTitle from "./SectionTitle";
import { testimonials } from "./hometest";
import yay from "../../Assets/yay.svg"
import squiggle2 from "../../Assets/squiggle2.svg"

function Testimonials() {
  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="Why people love my work!" />
      <div className="max-w-5xl m-auto md:max-h-[200px] grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-3 items-start">
        {testimonials.map((item, index) => {
          return (
            <div
              key={index}
              className="relative bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full flex flex-col justify-between"
            >
              {index === 0 && (
                <>
                  <img
                              className="sqD top-[-50px] left-0 bottom-auto right-auto md:bottom-[-50px] md:top-auto md:right-[-25px] md:left-auto w-20 z-[-100]"
                              src={yay}
                  />
                </>
              )}
                  <h6 className=" italic relative testimonialQuote text-fun-gray font-monospace">
                "{item.quote}"
              </h6>
              <h5 className="mt-4  text-fun-gray">
                <b className="text-fun-pink font-monospace">{item.name}</b> -{" "}
                {item.job}
              </h5>
              {index === 2 && (
                <img
                  className="sqD top-[-30px] right-[-15px] w-11"
                          src={squiggle2}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
