import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Founder & Developer",
      image: assets.team1,
      bio: "Passionate about open platforms that empower everyday voices.",
    },
    {
      id: 2,
      name: "Sarah Lee",
      role: "Content Strategist",
      image: assets.team2,
      bio: "Helps creators craft engaging stories and reach wider audiences.",
    },
    {
      id: 3,
      name: "David Kim",
      role: "UI/UX Designer",
      image: assets.team3,
      bio: "Designs intuitive experiences for writers and readers.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Published Posts" },
    { number: "5K+", label: "Active Users" },
    { number: "100+", label: "Daily Readers" },
    { number: "24/7", label: "Platform Access" },
  ];

  return (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-10 opacity-50 w-full"
      />
      <Navbar />
      <div className="px-4 md:px-16 pt-28 pb-12 min-h-screen font-outfit">
        {/* Hero Section */}
        <div className="relative h-80 md:h-120 rounded-xl overflow-hidden mb-16">
          <img
            src={assets.aboutHero}
            alt="Hero"
            className="w-full h-full object-fit"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Our Blog Journey
            </h1>
          </div>
        </div>

        {/* About Description */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Empowering Every Voice</h2>
            <p className="text-gray-700 text-justify leading-relaxed">
              Our blog platform was created to give everyone a space to express
              their ideas, share stories, and connect with others. Whether
              you're a passionate writer or an enthusiastic reader, our platform
              brings the blog community together in one place. Anyone can write.
              Everyone can read. We believe in the power of personal stories.
              Here, creativity knows no bounds. Our platform encourages diverse
              voices from all walks of life to share their unique perspectives,
              insights, and experiences. Whether you want to inspire, educate,
              entertain, or simply share your journey, this is the perfect space
              to do so. We foster a welcoming and inclusive environment where
              ideas flourish and meaningful conversations begin. With
              easy-to-use tools and a supportive community, writing and
              publishing your thoughts has never been more accessible.
            </p>
            <p className="text-gray-700 text-justify leading-relaxed">
              Readers can explore a vast array of topics, discover new passions,
              and engage with content that resonates deeply on a personal level.
              Our platform is not just about blogging.it’s about building
              genuine connections, sparking inspiration, and celebrating the
              timeless art of storytelling in all its diverse forms. Join us
              today and become part of a vibrant, supportive community where
              your voice truly matters, your stories are deeply valued, and your
              creativity is wholeheartedly celebrated. Together, we’re creating
              a welcoming space where everyone has the freedom to express
              themselves openly and the opportunity to be heard, understood, and
              inspired by others. Whether you’re here to share your journey or
              to learn from others, this is a place where meaningful
              conversations flourish and lifelong connections are made.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={assets.aboutMission}
              alt="Blog Mission"
              className="w-full h-full object-fit"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-50 py-12 rounded-xl mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((item, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-primary">{item.number}</p>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Why Use Our Blog App?
          </h2>
          <p className="text-center text-gray-600 mb-10">
            We make blogging simple and accessible
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-primary/5 p-10 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-8">
                Easy Publishing
              </h3>
              <p className="text-gray-600">
                Create and publish your posts quickly and easily in just a few
                clicks with our clean, intuitive interface.
              </p>
            </div>
            <div className="bg-primary/5 p-10 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-8">
                Community Driven
              </h3>
              <p className="text-gray-600">
                Engage with fellow writers, share your thoughts through
                comments, and follow inspiring authors you love.
              </p>
            </div>
            <div className="bg-primary/5 p-10 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-8">
                Your Voice, Your Space
              </h3>
              <p className="text-gray-600">
                Share your unique experiences and actively build your personal
                blogging profile with ease.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-600 mb-10">
            The people who make user blogging possible
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="h-64 w-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-primary transition">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
                <p className="text-gray-600 text-sm mt-2 max-w-xs mx-auto">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action */}
        <div className="bg-primary text-white text-center py-8 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to share your story?
          </h2>
          <p className="mb-6">
            Start writing or explore blogs from amazing people around the world.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-primary font-medium px-6 py-3 rounded-lg 
          hover:bg-gray-100 transition cursor-pointer"
          >
            Explore Blogs
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
