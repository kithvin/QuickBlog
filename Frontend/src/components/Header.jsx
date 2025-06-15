import React, { useRef } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Header = () => {

   // Get input state and setter from global context

  const { setInput, input } = useAppContext();
  
  // Ref to access the input element directly

  const inputRef = useRef();

  // Handler for form submission

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Set global input state with current input value

    setInput(inputRef.current.value);
  };

  // Handler to clear the search input and reset the global state

  const onClear = ()=>{
    setInput('')
    inputRef.current.value = ''
  }

  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">

    {/* Top notification banner */}

      <div className="text-center mt-20 mb-8">
        <div
          className="inline-flex items-center justify-between gap-4 px-6
        py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full
        text-sm text-primary"
        >
          <p>New: AI feature intefrated</p>
          <img src={assets.star_icon} alt="w-2.5" />
        </div>

      {/* Main heading */}
      
        <h1
          className="text-3xl sm:text-6xl font-semibold sm:leading-16
        text-gray-700 mt-2"
        >
          Your own <span className="text-primary">blogging</span>
          <br />
          platform
        </h1>

        {/* Subheading paragraph */}

        <p
          className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs
        text-gray-500"
        >
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it's one word or a thousand, your story
          starts right here.
        </p>

        {/* Search form */}

        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-lg max-sm:scale-75 mx-auto
        border border-gray-300 bg-white rounded overflow-hidden"
        >

        {/* Search input */}

          <input
            ref={inputRef}
            type="text"
            placeholder="Search for blogs"
            required
            className="w-full pl-4 outline-none"
          />
        
        {/* Submit button */}

          <button
            type="submit"
            className="bg-primary text-white
                px-8 py-2 m-1.5 rounded hover:scale-105 transition-all
                cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>

     {/* Clear search button, only visible if there is input */}

      <div className="text-center">
        {input && <button onClick={onClear}
          className="border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm
        cursor-pointer"
        >
          Clear Search
        </button>}
      </div>

    {/* Decorative background gradient image, positioned absolutely */}
    
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50
      -z-1 opacity-50"
      />
    </div>
  );
};

export default Header;
