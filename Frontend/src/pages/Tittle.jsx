import React from "react";

// Title component that displays a heading and a subtitle with optional alignment and font customization

const Title = ({ title, subTitle, align, font }) => {
  return (
  // Container div with conditional alignment styles
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" && "md:items-start md:text-left"}`}>

      {/* Main title (heading) with optional custom font */}

      <h1 className={`text-4xl md:text-[40px] mb-4 ${font || "font-playfair"}`}>
        {title}
      </h1>

      {/* Subtitle with responsive text size and max width */}
      <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
