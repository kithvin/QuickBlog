// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { assets, blog_data, comments_data } from "../assets/assets";
// import Navbar from "../components/Navbar";
// import Moment from "moment";
// import Footer from "../components/Footer"
// import Loader from "../components/Loader";

// const Blog = () => {
//   const { id } = useParams();

//   const [data, setData] = useState(null);
//   const [comments, setComments] = useState([]);

//   const [name, setName] = useState('');
//   const [content, setContent] = useState('');

//   const fetchBlogData = async () => {
//     const data = blog_data.find((item) => item._id === id);
//     setData(data);
//   };

//   const fetchComments = async () => {
//     setComments(comments_data);
//   };

//   const addComment = async ()=>{
//     e.preventDefault();
//   }

//   useEffect(() => {
//     fetchBlogData();
//     fetchComments();
//   }, []);

//   return data ? (
//     <div className="relative">
//       <img
//         src={assets.gradientBackground}
//         alt=""
//         className="absolute -top-50 -z-10
//     opacity-50"
//       />
//       <Navbar />

//       <div className="text-center mt-20 text-gray-600">
//         <p className="text-primary py-4 font-medium">
//           Published on {Moment(data.createdAt).format("MMMM Do YYYY")}
//         </p>
//         <h1
//           className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto
//       text-gray-800 mt-1"
//         >
//           {data.title}
//         </h1>
//         <h2 className="my-5 max-w-lg truncate mx-auto">{data.subTitle}</h2>
//         <p
//           className="inline-block py-1 px-4 rounded-full mb-6 border
//       text-sm border-primary/35 bg-primary/5 font-medium text-primary mt-2"
//         >
//           Michael Brown
//         </p>
//       </div>

//       <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
//         <img src={data.image} alt="" className="rounded-4xl mb-5" />
//         <div
//           className="rich-text max-w-3xl mx-auto"
//           dangerouslySetInnerHTML={{ __html: data.description }}
//         ></div>

//         {/* Comments Section */}

//         <div className="mt-14 mb-10 max-w-3xl mx-auto">
//           <p className="font-semibold mb-4">Comments ({comments.length})</p>
//           <div className="flex flex-col gap-4">
//             {comments.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative bg-primary/2 border border-primary/5
//       max-w-xl p-4 rounded text-gray-600"
//               >
//                 <div className="flex items-center gap-2 mb-2">
//                   <img src={assets.user_icon} alt="" className="w-6" />
//                   <p className="font-medium">{item.name}</p>
//                 </div>
//                 <p className="text-sm max-w-md ml-8">{item.content}</p>
//                 <div
//                   className="absolute right-4 bottom-3 flex items-center
//         gap-2 text-xs"
//                 >
//                   {Moment(item.createdAt).fromNow()}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Add Comment Section */}

//         <div className="max-w-3xl mx-auto">
//             <p className="font-semibold mb-4">Add Your comment</p>
//             <form onSubmit={addComment} className="flex flex-col items-start
//             gap-4 max-w-lg">
//               <input onChange={(e)=>setName(e.target.value)} value={name}
//               type="text" placeholder="Name" required className="w-full
//               p-2 border border-gray-300 rounded outline-none"/>
//               <textarea onChange={(e)=>setContent(e.target.value)} value={content}
//                placeholder="Comment" className="w-full border
//               border-gray-300 rounded outline-none h-48"></textarea>
//               <button type="submit" className="bg-primary text-white
//               rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer">Submit</button>
//             </form>
//         </div>

//         {/* Share Button */}

//         <div className="my-24 max-w-3xl max-auto">
//           <p className="font-semibold my-4">Share this article on social media
//           </p>
//           <div className="flex">
//             <img src={assets.facebook_icon} width={50} alt="" />
//             <img src={assets.twitter_icon} width={50} alt="" />
//             <img src={assets.googleplus_icon} width={50} alt="" />
//           </div>
//         </div>
//     </div>
//     <Footer />
//     </div>
//   ) :
//     <Loader/>

// };

// export default Blog;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import Moment from "moment";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Blog = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogData = async () => {
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  };

  const fetchComments = async () => {
    setComments(comments_data);
  };

  const addComment = async (e) => {
    e.preventDefault();
    // Your comment submission logic here
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div className="relative min-h-screen flex flex-col">
      <img
        src={assets.gradientBackground}
        alt="gradient background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-20"
      />
      <Navbar />

      <div className="text-center mt-20 text-gray-600 px-4">
        <p className="text-primary py-2 font-medium text-sm md:text-base">
          Published on {Moment(data.createdAt).format("MMMM Do YYYY")}
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold max-w-4xl mx-auto text-gray-900 mt-2 leading-tight">
          {data.title}
        </h1>
        <h2 className="my-5 max-w-2xl mx-auto text-lg text-gray-500 font-medium">
          {data.subTitle}
        </h2>
        <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full mb-8 border border-primary/20 bg-primary/10 font-medium text-primary mt-4">
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-xs font-bold">MB</span>
          </div>
          <span>Michael Brown</span>
        </div>
      </div>

      <div className="mx-4 max-w-6xl md:mx-auto my-10 mt-8 flex-1">
        <img
          src={data.image}
          alt="blog cover"
          className="rounded-xl md:rounded-2xl mb-8 w-full h-auto max-h-[500px] object-cover shadow-lg"
        />

        <div
          className="rich-text max-w-3xl mx-auto prose prose-sm sm:prose-base prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-lg prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />

        {/* Comments Section */}
        <div className="mt-16 mb-12 max-w-3xl mx-auto">
          <p className="font-bold text-xl mb-6 text-gray-800">
            Comments ({comments.length})
          </p>
          <div className="flex flex-col gap-5">
            {comments.map((item, index) => (
              <div
                key={index}
                className="relative bg-white border border-gray-100 max-w-xl p-5 rounded-lg text-gray-600 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={assets.user_icon}
                    alt="user avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <p className="font-semibold text-gray-700">{item.name}</p>
                </div>
                <p className="text-gray-600 text-sm sm:text-base ml-11">
                  {item.content}
                </p>
                <div className="absolute right-5 bottom-4 flex items-center gap-2 text-xs text-gray-400">
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Comment Section */}

        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="font-bold text-xl mb-5 text-gray-800 text-center">
            Add Your Comment
          </p>
          <form
            onSubmit={addComment}
            className="flex flex-col items-center mx-auto gap-5 max-w-lg w-full"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Your name"
              required
              className="w-full p-3 border border-gray-200 rounded-lg outline-none 
              focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all mt-2"
            />
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="Write your comment here..."
              className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent mt-2 transition-all h-40"
            />
            <button
              type="submit"
              className="bg-primary text-white rounded-lg py-3 px-8 hover:bg-primary/90 transition-all 
              cursor-pointer font-medium shadow-md hover:shadow-lg mt-2"
            >
              Post Comment
            </button>
          </form>
        </div>

        {/* Share Buttons */}

        <div className="flex flex-col items-center my-2 mt-10">
          <p className="font-semibold my-4 text-center">
            Share this article on social media
          </p>
          <div className="flex mt-2">
            <img src={assets.facebook_icon} width={50} alt="" />
            <img src={assets.twitter_icon} width={50} alt="" />
            <img src={assets.googleplus_icon} width={50} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  ) : (
    <Loader />
  );
};

export default Blog;
