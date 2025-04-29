import React, { useEffect ,useState} from "react";
import mics from "../../../assets/exprience.png";

const Experience = ({duration}) => {
  // days > hours > minute > second > milisecond
  const [time, setTime] = useState(duration * 24 * 60 * 60 * 1000 || 0);
  //javascript web worker
  useEffect(() => {
    const worker = new Worker(
      new URL("../../../worker/countDownWorker2.js", import.meta.url)
    );
    worker.postMessage(time);
    worker.onmessage = (e) => {
      setTime(e.data);
    };
  }, []);

  const formatTime = (milisecond) => {
    //total time
    const total_second = parseInt(Math.floor(milisecond / 1000));
    const total_minute = parseInt(Math.floor(total_second / 60));
    const total_hours = parseInt(Math.floor(total_minute / 60));
    //actual time
    const days = parseInt(Math.floor(total_hours / 24));
    const second = parseInt(Math.floor(total_second % 60));
    const minute = parseInt(Math.floor(total_minute % 60));
    const hours = parseInt(Math.floor(total_hours % 60));
    return { days, hours, minute, second };
  };
  const { days, hours, minute, second } = formatTime(time);
  return (
    <section className="Experience mt-[140px] mb-[71px] ">
      <div className="container">
        <div className="main_wrapper flex ">
          <div className="Experience_text_part bg-button-black w-1/2 h-full text-primary-fff py-[70px] pl-[50px] flex flex-col gap-8 items-start">
            <h5 className="text-button-green font-poppins text-lg font-semibold leading-5 capitalize">
              categories
            </h5>
            <h1 className="text-primary-fff font-inter text-5xl font-semibold leading-[60px] tracking-[1.92px]">
              Enhance Your Music Experience
            </h1>
            <div className="time flex gap-x-6">
              <div className="h-[62px] w-[62px] bg-primary-fff rounded-full text-button-black flex flex-col items-center justify-center capitalize py-[14px] px-[15px]">
                <p className="text-text2-black font-poppins text-lg font-semibold leading-6">
                  {days}
                </p>
                <p className="text-text2-black font-poppins text-xs font-medium leading-[18px]">
                  days
                </p>
              </div>
              <div className="h-[62px] w-[62px] bg-primary-fff rounded-full text-button-black flex flex-col items-center justify-center capitalize py-[14px] px-[15px]">
                <p className="text-text2-black font-poppins text-lg font-semibold leading-6">
                  {hours}
                </p>
                <p className="text-text2-black font-poppins text-xs font-medium leading-[18px]">
                  hours
                </p>
              </div>
              <div className="h-[62px] w-[62px] bg-primary-fff rounded-full text-button-black flex flex-col items-center justify-center capitalize py-[14px] px-[15px]">
                <p className="text-text2-black font-poppins text-lg font-semibold leading-6">
                  {minute}
                </p>
                <p className="text-text2-black font-poppins text-xs font-medium leading-[18px]">
                  minute
                </p>
              </div>
              <div className="h-[62px] w-[62px] bg-primary-fff rounded-full text-button-black flex flex-col items-center justify-center capitalize py-[14px] px-[15px]">
                <p className="text-text2-black font-poppins text-lg font-semibold leading-6">
                  {second}
                </p>
                <p className="text-text2-black font-poppins text-xs font-medium leading-[18px]">
                  second
                </p>
              </div>
            </div>
            <div>
              <button className="common_btn bg-button-green border-2 border-solid border-button-green ">
                buy now!
              </button>
            </div>
          </div>
          <div className="Experience_img_part  w-1/2 h-fulloverflow-hidden flex items-center justify-center imagShadow bg-button-black">
            <div className="w-[450px] h-full py-11 px-4 overflow-hidden object-cover">
              <img
                src={mics}
                alt="not found"
                className="w-[568px] h-[327px] bg-no-repeat bg-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
