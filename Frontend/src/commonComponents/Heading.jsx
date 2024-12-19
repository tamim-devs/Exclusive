import React from "react";
const Heading = ({ title,description }) => {
  return (
    <div className="flex flex-col items-start gap-6">
      <div className="flex items-center gap-x-4">
        <span className="w-7 h-12 bg-redDB4444 block rounded"></span>
        <span className="font-popins font-semibold text-base text-redDB4444 capitalize">
          {title = title }
        </span>
      </div>
      <div>
      {description && (
          <h1 className="font-inter font-semibold text-[36px] text-text_black000000 capitalize">
            {description = description}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Heading;
