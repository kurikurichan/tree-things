import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { startSession } from "mongoose";

const AddSessionModal = ({ setShowModal }) => {
  const [userData, setUserData] = useState({
    description: "",
    imageUrl:
      "https://images.pexels.com/photos/53435/tree-oak-landscape-view-53435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    totalTrees: "",
    location: "",
  });

  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
  }, []);
  const handleSubmit = async () => {
    const data = {
      author: session.user._id,
      description: userData.description,
      image: userData.imageUrl,
      totalTrees: userData.totalTrees,
      location: userData.location,
      schoolName: session.user.schoolName,
    };
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(res);
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };
  const name = "Mikey";
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setShowModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative max-w-lg mx-auto bg-white rounded-md shadow-lg">
            <h4 className="text-lg p-4  bg-indigo-600 font-medium mb-4 text-center text-indigo-100">
              Add New Tree Report?
            </h4>
            <div className="mt-3 p-4 sm:flex">
              <div className="mt-2 text-center sm:ml-4 sm:text-left">
                <div className="flex justify-center flex-col space-y-3">
                  <span className="text-lg text-center mb-2 font-extrabold text-gray-700">
                    {" "}
                    Hi! name {session.user?.firstName}
                  </span>

                  {/* <div>
                    <label
                      htmlFor="upload_photo"
                      className="block px-3 py-2 overflow-hidden border border-gray-200 rounded-md shadow-sm focus-within:ring-1 focus-within:ring-zinc-600 focus-within:border-zinc-600"
                    >
                      <span className="text-xs font-medium text-gray-700">
                        {" "}
                        Change Photo
                      </span>

                      <span className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <span className="font-medium text-gray-600">
                          Browse Profile Photo to Attach
                        </span>
                      </span>

                      <input
                        className="w-full p-0 mt-1 border-none sm:text-sm focus:outline-none focus:border-transparent focus:ring-0"
                        type="file"
                        name="file"
                        //   onChange={handleOnChange}
                      ></input>
                    </label>
                  </div> */}

                  <label
                    htmlFor="treeAmount"
                    className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <span className="text-xs font-medium text-gray-700">
                      {" "}
                      How many tree's were planted?
                    </span>

                    <input
                      type="text"
                      id="treeAmount"
                      onChange={(e) =>
                        setUserData({ ...userData, totalTrees: e.target.value })
                      }
                      placeholder="Enter tree planted amount?"
                      className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </label>
                  <label
                    htmlFor="treeAmount"
                    className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <span className="text-xs font-medium text-gray-700">
                      {" "}
                      Location?
                    </span>

                    <input
                      type="text"
                      id="treeAmount"
                      onChange={(e) =>
                        setUserData({ ...userData, location: e.target.value })
                      }
                      placeholder="Where were the trees planted?"
                      className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </label>
                  <label
                    for="plantingExperience"
                    className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <span className="text-xs font-medium text-gray-700">
                      {" "}
                      Planting Experience?
                    </span>

                    <textarea
                      type="text"
                      id="treeExperience"
                      rows={8}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          description: e.target.value,
                        })
                      }
                      placeholder="Talk about you planting experience?"
                      className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    ></textarea>
                  </label>
                </div>

                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigio-600 focus:ring-2"
                    onClick={() => handleSubmit()}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSessionModal;
