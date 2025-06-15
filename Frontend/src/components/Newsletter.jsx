import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 my-12 sm:my-20 md:my-24 lg:my-32 px-4">
      
      {/* Heading */}

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
        Never Miss a Blog!
      </h1>

      {/* Subtext / Description */}

      <p className="text-sm sm:text-base md:text-lg text-gray-500/70 pb-4 sm:pb-6 md:pb-8 mt-1">
        Subscribe to get the latest blogs, new tech, and exclusive news.
      </p>

      {/* Newsletter form */}
      
      <form className="flex flex-col sm:flex-row w-full max-w-xs sm:max-w-md md:max-w-2xl gap-2 sm:gap-0">
        
        {/* Email input field */}

        <input
          className="border border-gray-300 rounded-md h-12 sm:h-[52px] sm:border-r-0 outline-none w-full rounded-r-none sm:rounded-r-none px-3 text-gray-500 text-sm sm:text-base"
          type="email"
          placeholder="Enter your email id"
          required
        />

         {/* Subscribe button */}
         
        <button
          type="submit"
          className="h-12 sm:h-[52px] text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md sm:rounded-l-none text-sm sm:text-base px-4 sm:px-6 md:px-8 lg:px-12"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
