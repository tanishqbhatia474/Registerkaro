import React from "react";

const blogs = [
  {
    image: "https://img.freepik.com/free-photo/business-woman-talking-with-two-businessmen_1262-806.jpg?semt=ais_hybrid", // Replace with actual image URL
    author: "Prabhash Mishra",
    date: "1 Jan 2023 - Today",
    title: "Small business & Startup",
    description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Tax & Audit", "Management"],
  },
  {
    image: "https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?cs=srgb&dl=pexels-rebrand-cities-581004-1367276.jpg&fm=jpg", // Replace with actual image URL
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Tax", "Research", "Compliance"],
  },
  {
    image: "https://media.istockphoto.com/id/515306510/photo/making-decision-on-the-move.jpg?s=612x612&w=0&k=20&c=2bKoyPS-Yfo8VymP16mLdfB3FIAsvhozT1crLqelFFQ=", // Replace with actual image URL
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    title: "Growing Business Package",
    description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Audit", "Money Back"],
  },
  {
    image: "https://media.istockphoto.com/id/541114144/photo/bound-by-business.jpg?s=612x612&w=0&k=20&c=sRpFWa216olf8SZkAK3MTwyNAfHNt4G5eGZPHNfOvvQ=", // Replace with actual image URL
    author: "Karan Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "Collaboration can make our teams stronger, and our individual designs better.",
    tags: ["Money", "Management"],
  },
  {
    image: "https://t4.ftcdn.net/jpg/05/14/20/47/240_F_514204795_EjU9ZglP3ZXDshXrNOU6haOMNY2DNS2g.jpg", // Replace with actual image URL
    author: "Richa Singh",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "JavaScript frameworks make development easy with extensive features and functionalities.",
    tags: ["Tax Return", "News", "Audit"],
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_TSarCV1vxvzrO3-tKP1WgG7XAlYtH0RcQ&s", // Replace with actual image URL
    author: "Miss Nora",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "Starting a company doesn’t need to be complicated, but how do you get started?",
    tags: ["Private Limited Company", "Customer Success"],
  },
];

const BlogGrid = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-yellow-500 uppercase text-sm font-bold tracking-wide">
            Explore Our Blogs
          </h2>
          <h1 className="text-3xl font-bold text-gray-800">
            Accelerate Digital Transformation
          </h1>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">
                  {blog.author} • {blog.date}
                </p>
                <h3 className="text-lg font-semibold text-gray-800 my-2">
                  {blog.title}{" "}
                  <a href="#" className="inline-block text-blue-500 text-xl">
                    →
                  </a>
                </h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 text-blue-500 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Show more blogs →
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
