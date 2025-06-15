import React, { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/assets";
import BlogTableitem from "../../components/admin/BlogTableitem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

/**
 * Admin Dashboard Component
 * Displays key metrics (blogs count, comments count, drafts count)
 * and a table of recent blog posts with actions
 */

const Dashboard = () => {
  // State to store dashboard data including counts and recent blogs

  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  // Access axios instance from app context

  const { axios } = useAppContext();

  // Function to fetch dashboard data from API

  const fetchDashbord = async () => {
    try {
      const { data } = await axios.get("/api/admin/dashbord");
      // Update state if successful, show error if not
      data.success
        ? setDashboardData(data.dashboardData)
        : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Load data on component mount

  useEffect(() => {
    fetchDashbord();
  });

  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
      {/* Metrics cards section showing counts */}

      <div className="flex flex-wrap gap-4">
        {/* Blogs count card */}

        <div
          className="flex items-center gap-4 bg-white p-4 min-w-58 rounded
        shadow cursor-pointer hover:scale-105 transition-all"
        >
          <img src={assets.dashboard_icon_1} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData.blogs}
            </p>
            <p className="text-gray-400 font-light">Blogs</p>
          </div>
        </div>

        {/* Comments count card */}

        <div
          className="flex items-center gap-4 bg-white p-4 min-w-58 rounded
        shadow cursor-pointer hover:scale-105 transition-all"
        >
          <img src={assets.dashboard_icon_2} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData.comments}
            </p>
            <p className="text-gray-400 font-light">Comments</p>
          </div>
        </div>

        {/* Drafts count card */}

        <div
          className="flex items-center gap-4 bg-white p-4 min-w-58 rounded
        shadow cursor-pointer hover:scale-105 transition-all"
        >
          <img src={assets.dashboard_icon_3} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData.drafts}
            </p>
            <p className="text-gray-400 font-light">Drafts</p>
          </div>
        </div>
      </div>

      {/* Recent blogs table section */}

      <div>
        <div className="flex items-center gap-3 m-4 mt-8 text-gray-600">
          <img src={assets.dashboard_icon_4} alt="" />
          <p>Latest Blogs</p>
        </div>

        {/* Blogs table */}

        <div
          className="relative max-w-4xl overflow-x-auto shadow rounded-lg
      scrollbar-hide bg-white mt-8"
        >
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-gray-600 text-left uppercase">
              <tr>
                <th scope="col" className="px-2 py-4 xl:px-6">
                  #
                </th>
                <th scope="col" className="px-2 py-4">
                  Blog Title
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Date
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Status
                </th>
                <th scope="col" className="px-2 py-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Map through recent blogs and render table rows */}

              {dashboardData.recentBlogs.map((blog, index) => {
                return (
                  <BlogTableitem
                    key={blog._id}
                    blog={blog}
                    fetchBlogs={fetchDashbord}
                    index={index + 1}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
