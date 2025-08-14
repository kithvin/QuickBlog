import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter an email.");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:5000/api/subscribe", {
        email,
      });

      if (data?.message === "This email is already subscribed.") {
        toast.error(data.message);
      } else {
        toast.success("You are subscribed to our page!");
        setEmail("");
      }
    } catch (error) {
      console.error("Subscription failed:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 my-12 sm:my-20 md:my-24 lg:my-32 px-4">
      {/* Toast notifications */}
      <Toaster
        toastOptions={{
          style: {
            background: "white",
            color: "#5044e5",
            border: "1px solid #5044e5",
          },
          success: {
            iconTheme: {
              primary: "#5044e5",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "#5044e5",
              secondary: "white",
            },
          },
        }}
      />

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
        Never Miss a Blog!
      </h1>

      {/* Subtext */}
      <p className="text-sm sm:text-base md:text-lg text-gray-500/70 pb-4 sm:pb-6 md:pb-8 mt-1">
        Subscribe to get the latest blogs, new tech, and exclusive news.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row w-full max-w-xs sm:max-w-md md:max-w-2xl gap-2 sm:gap-0"
      >
        <input
          className="border border-gray-300 rounded-md h-12 sm:h-[52px] sm:border-r-0 outline-none w-full rounded-r-none sm:rounded-r-none px-3 text-gray-500 text-sm sm:text-base"
          type="email"
          placeholder="Enter your email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

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

