import React from "react";
import Heading from "../../common/commonComponet/Heading";
import playStation from "../../../assets/playStation.png";
import womenFashion from "../../../assets/womenFashion.png";
import perfume from "../../../assets/perfume.png";
import speaker from "../../../assets/speaker.png";
const NewArrival = () => {
  return (
    <section className="my-[150px]">
      <div className="container">
        <div className="head">
          <Heading title=" featured" description="new arrival" />
        </div>
        <div className="body flex items-center justify-center gap-[4%] mt-14">
          <div className="part1 w-[48%] h-[600px]">
            <img
              src={playStation}
              alt="not found"
              className="h-full w-full object-fill"
            />
          </div>
          <div className="part2 w-[48%] h-full flex flex-col gap-[30px] ">
            <div className="child_part1 w-full h-[284px]">
              <img
                src={womenFashion}
                alt="not found"
                className="h-full w-full object-fill"
              />
            </div>
            <div className="child_part2 flex gap-[30px]">
              <div className="img1 w-1/2 h-[284px]">
                <img
                  src={speaker}
                  alt="not found"
                  className="h-full w-full object-fill"
                />
              </div>
              <div className="img2 w-1/2 h-[284px]">
                <img
                  src={perfume}
                  alt="not found"
                  className="h-full w-full object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
