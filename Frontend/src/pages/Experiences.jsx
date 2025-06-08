import React from "react";
import Title from "../pages/Tittle";
import { assets } from "../assets/assets";
import StarRating from "../components/StarRating";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Experiences = () => {
  const navigate = useNavigate();

  // Experience categories data

  const categories = [
    {
      id: 1,
      name: "Tech Trends",
      icon: assets.techIcon,
      description: "Latest updates and insights in technology and innovation.",
    },
    {
      id: 2,
      name: "Health & Wellness",
      icon: assets.healthIcon,
      description: "Tips, guides, and stories for a healthy lifestyle.",
    },
    {
      id: 3,
      name: "Travel Diaries",
      icon: assets.travelIcon,
      description: "Explore places, cultures, and personal travel experiences.",
    },
    {
      id: 4,
      name: "Food & Recipes",
      icon: assets.foodIcon,
      description: "Delicious dishes, cooking tips, and foodie reviews.",
    },
  ];

  return (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-10 opacity-50 w-full"
      />

      <Navbar />

      <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 min-h-screen">
        {/* Hero Section */}

        <div className="relative h-100 rounded-xl overflow-hidden mb-16">
          <img
            src={assets.expHero}
            alt="Travel experiences"
            className="w-full h-full object-fit"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-center">
              Inspiring Stories & Insights
            </h1>
            <p className="text-lg max-w-2xl text-center">
              Explore fresh perspectives and creative ideas shared by our
              community of bloggers
            </p>
          </div>
        </div>

        {/* Categories Section */}

        <section className="mb-20">
          <Title
            title="Blog Categories"
            subTitle="Catch up on the latest stories and ideas from our talented writers on QuickBlog."
            align="center"
          />

          {/* Grid layout for categories */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 ">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-rose-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="font-playfair text-xl mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}

        <section className="mb-20">
          <Title
            title="Latest Blog Posts"
            subTitle="Catch up on the latest stories, insights, and ideas our amazing writers are sharing today."
            align="center"
          />

          {/* Testimonials grid */}

          {/* testimonial cards follow the same pattern */}

          {/* Each card contains:
               - User avatar
               - User name and experience type
               - Star rating
               - Review text */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="bg-primary/5 p-6 rounded-xl shadow mt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200">
                  <img
                    src={assets.testimonials1}
                    alt=""
                    className="w-12 h-12 rounded-full object-fit"
                  />
                </div>
                <div>
                  <p className="font-playfair text-lg">James Wilson</p>
                  <p className="text-gray-500 text-sm">On Easy Blogging</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <StarRating rating={5} />
              </div>
              <p className="text-gray-600">
                "QuickBlog made publishing my thoughts simple and fun. The
                interface is smooth and intuitive!"
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl shadow mt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200">
                  <img
                    src={assets.testimonials2}
                    alt=""
                    className="w-12 h-12 rounded-full object-fit"
                  />
                </div>
                <div>
                  <p className="font-playfair text-lg">Sophia Chen</p>
                  <p className="text-gray-500 text-sm">On Community</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <StarRating rating={5} />
              </div>
              <p className="text-gray-600">
                "I love how QuickBlog connects me with readers who genuinely
                engage with my posts."
              </p>
            </div>

            {/* More testimonial cards... */}
            {/* Note: In a production app, these would likely be mapped from an array of testimonials */}

            <div className="bg-primary/5 p-6 rounded-xl shadow mt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200">
                  <img
                    src={assets.testimonials3}
                    alt=""
                    className="w-12 h-12 rounded-full object-fit"
                  />
                </div>
                <div>
                  <p className="font-playfair text-lg">Ethan Patel</p>
                  <p className="text-gray-500 text-sm">On Features</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <StarRating rating={4} />
              </div>

              <p className="text-gray-600">
                "The customization options in QuickBlog let me make my blog
                truly mine."
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl shadow mt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200">
                  <img
                    src={assets.testimonials4}
                    alt=""
                    className="w-12 h-12 rounded-full object-fit"
                  />
                </div>
                <div>
                  <p className="font-playfair text-lg">Sophia Lee</p>
                  <p className="text-gray-500 text-sm">On Platform</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <StarRating rating={2} />
              </div>
              <p className="text-gray-600">
                "QuickBlog stands out for its clean design and focus on what
                bloggers really need."
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl shadow mt-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200">
                  <img
                    src={assets.testimonials5}
                    alt=""
                    className="w-12 h-12 rounded-full object-fit"
                  />
                </div>
                <div>
                  <p className="font-playfair text-lg">Liam Johnson</p>
                  <p className="text-gray-500 text-sm">On Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <StarRating rating={3} />
              </div>
              <p className="text-gray-600">
                "From writing to sharing, QuickBlog offers a seamless blogging
                journey."
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl shadow mt-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200">
                  <img
                    src={assets.testimonials6}
                    alt=""
                    className="w-12 h-12 rounded-full object-fit"
                  />
                </div>
                <div>
                  <p className="font-playfair text-lg">Olivia Martinez</p>
                  <p className="text-gray-500 text-sm">On Support</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <StarRating rating={5} />
              </div>
              <p className="text-gray-600">
                "Whenever I had questions, QuickBlog’s support team was quick
                and helpful."
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl shadow mt-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200">
                  <img
                    src={assets.testimonials7}
                    alt=""
                    className="w-12 h-12 rounded-full object-fit"
                  />
                </div>
                <div>
                  <p className="font-playfair text-lg">Noah Wilson</p>
                  <p className="text-gray-500 text-sm">On Usability</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <StarRating rating={4} />
              </div>
              <p className="text-gray-600">
                "Super easy to use, and the reading experience is pleasant for
                my audience."
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl shadow mt-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200">
                  <img
                    src={assets.testimonials8}
                    alt=""
                    className="w-12 h-12 rounded-full object-fit"
                  />
                </div>
                <div>
                  <p className="font-playfair text-lg">Emma Davis</p>
                  <p className="text-gray-500 text-sm">On Growth</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <StarRating rating={4} />
              </div>
              <p className="text-gray-600">
                "QuickBlog helped me grow my readership steadily with great
                tools and insights."
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl shadow mt-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200">
                  <img
                    src={assets.testimonials9}
                    alt=""
                    className="w-12 h-12 rounded-full object-fit"
                  />
                </div>
                <div>
                  <p className="font-playfair text-lg">James Brown</p>
                  <p className="text-gray-500 text-sm">On Speed</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <StarRating rating={4} />
              </div>
              <p className="text-gray-600">
                "The platform loads fast and handles my posts without any
                hiccups."
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl shadow mt-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200">
                  <img
                    src={assets.testimonials10}
                    alt=""
                    className="w-12 h-12 rounded-full object-fit"
                  />
                </div>
                <div>
                  <p className="font-playfair text-lg">Isabella Garcia</p>
                  <p className="text-gray-500 text-sm">On Personalization</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <StarRating rating={5} />
              </div>
              <p className="text-gray-600">
                "I can truly express myself with QuickBlog’s customizable
                layouts and themes."
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl shadow mt-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200">
                  <img
                    src={assets.testimonials11}
                    alt=""
                    className="w-12 h-12 rounded-full object-fit"
                  />
                </div>
                <div>
                  <p className="font-playfair text-lg">Mia Thompson</p>
                  <p className="text-gray-500 text-sm">On Inspiration</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <StarRating rating={4} />
              </div>
              <p className="text-gray-600">
                "QuickBlog inspires me to write every day. It’s not just a
                platform it’s my creative space."
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl shadow mt-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200">
                  <img
                    src={assets.testimonials12}
                    alt=""
                    className="w-12 h-12 rounded-full object-fit"
                  />
                </div>
                <div>
                  <p className="font-playfair text-lg">Alexandra Green</p>
                  <p className="text-gray-500 text-sm">On Community Growth</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <StarRating rating={3} />
              </div>
              <p className="text-gray-600">
                "QuickBlog helped me build a loyal audience. It’s the best space
                for passionate writers to be seen."
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="bg-primary text-white rounded-xl p-8 text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
            Ready to share your voice with the world ?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Start writing your own blogs or explore trending posts from other
            writers.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all cursor-pointer"
          >
            Explore Blogs
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Experiences;
