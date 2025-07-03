import React from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <div className="mt-20 p-8 bg-gray-50 ">
        <h1 className="text-4xl  mt-10 text-center text-blue-400 mb-6 font-extrabold">
          Mental Health Blogs
        </h1>
        <div className="flex flex-col md:flex-row items-start gap-4 p-4 rounded-3xl shadow-md hover:shadow-xl mb-5 rounded-2xl transition-shadow duration-300">
          <img
            src="../images/blog/blog1.png"
            alt="Blog 1 Thumbnail"
            className=" w-48 h-32 object-cover rounded"
          />
          <div>
            <p className="text-blue-600 font-semibold mb-2">June 27,2025</p>
            <h2 className="text-2xl font-bold mb-2">
              Inside Schizophrenia Podcast
            </h2>
            <p>
              Inside Schizophrenia is a monthly podcast with a unique
              perspective.
            </p>
            <Link
              to="/blog/1"
              className="text-yellow-500 font-semibold hover:underline"
              onClick={() => nav}
            >
              READ MORE →{" "}
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-4 p-4 rounded-3xl shadow-md hover:shadow-xl mb-5 rounded-2xl transition-shadow duration-300">
          <img
            src="../images/blog/blog2.png"
            alt="Blog 1 Thumbnail"
            className=" w-48 h-32 object-cover rounded"
          />
          <div>
            <p className="text-blue-600 font-semibold mb-2">June 28,2025</p>
            <h2 className="text-2xl font-bold mb-2">
              How Does Social Anxiety Affect the Brain
            </h2>
            <p>
              Social anxiety can affect the areas of the brain that help you
              process fear, anxiety, and information about other people.
            </p>
            <Link
              to="/blog/2"
              className="text-yellow-500 font-semibold hover:underline"
            >
              READ MORE →{" "}
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-4 p-4 rounded-3xl shadow-md hover:shadow-xl mb-5 rounded-2xl transition-shadow duration-300">
          <img
            src="../images/blog/blog3.png"
            alt="Blog 1 Thumbnail"
            className=" w-48 h-32 object-cover rounded"
          />
          <div>
            <p className="text-blue-600 font-semibold mb-2">June 29,2025</p>
            <h2 className="text-2xl font-bold mb-2">
              Foregiveness: Yes? No? Maybe?
            </h2>
            <p>
              “My step-father abused me, and my mother is always telling me to
              forgive and forget.” Jodie shook her head ruefully. “And how is
              that going
            </p>
            <Link
              to="/blog/3"
              className="text-yellow-500 font-semibold hover:underline"
            >
              READ MORE →{" "}
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-4 p-4 rounded-3xl shadow-md hover:shadow-xl mb-5 rounded-2xl transition-shadow duration-300">
          <img
            src="../images/blog/blog4.png"
            alt="Blog 1 Thumbnail"
            className=" w-48 h-32 object-cover rounded"
          />
          <div>
            <p className="text-blue-600 font-semibold mb-2">June 30,2025</p>
            <h2 className="text-2xl font-bold mb-2">
              Do you feel Shame about Being Single?
            </h2>
            <p>
              If find yourself single, are you ok with that or distressed by it?
              Do you feel judged by others — or perhaps judge yourself for
            </p>
            <Link
              to="/blog/4"
              className="text-yellow-500 font-semibold hover:underline"
            >
              READ MORE →{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
