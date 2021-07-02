import React, { useRef, useState, useEffect } from "react";
import { update_profile } from "../api";
import { Link } from "react-router-dom";

const Profile = () => {
  const imageRef = useRef();
  let [res, setRes] = useState({ status: "", message: "" });
  let [image, setImage] = useState("");
  let [preview, setPreview] = useState("");
  let [error, setError] = useState("");
  let [added, setAdded] = useState(false);

  useEffect(() => {}, [image, preview]);

  const handleUpload = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onloadend = (e) => {
      localStorage.setItem("profileImage", reader.result);
    };
    reader.readAsDataURL(image);
    let { status, message } = await update_profile();
    setRes({ status, message });
  };
  console.log(res);
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-300 bg-opacity-50 h-screen flex justify-content items-center ">
      <form
        onSubmit={(e) => handleUpload(e)}
        className="bg-white shadow-xl rounded-lg h-96 w-4/5 md:w-3/5 ml-20 flex flex-col justify-around items-center fixed right-auto top-auto"
      >
        <Link
          onClick={() => window.location.reload()}
          className="absolute text-red-500 text-lg rounded-sm right-1 top-1 text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
        <h1 className="text-lg text-bold text-gray-600 text-center w-full">
          Upload Your File
        </h1>

        <div className=" rounded-xl flex justify-center items-center bg-blue-100 border-2 border-dashed border-blue-500 border-opacity-70 w-4/5 h-3/5">
          {image ? (
            <div className="flex flex-col justify-center items-center">
              {" "}
              <img
                className="object-cover w-44 h-44 rounded-md"
                src={preview}
              />{" "}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  imageRef.current.click();
                }}
                className="ml-2 border-b-2  border-white text-red-500"
              >
                Change
              </button>{" "}
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <p className="text-gray-400 text-sm">Drag & Drop file or </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  imageRef.current.click();
                }}
                className="ml-2 border-b-2  border-white text-red-500"
              >
                Choose
              </button>
            </div>
          )}
        </div>

        <input
          onChange={(e) => {
            const files = e.target.files[0];
            if (files) {
              setImage(files);
              const reader = new FileReader();
              reader.onloadend = (e) => {
                setPreview(reader.result);
              };
              reader.readAsDataURL(files);
            } else {
              setError("Please choose an image before uploading!");
            }
          }}
          ref={imageRef}
          type="file"
          name="image"
          hidden
          id=""
        />
        <button
          onClick={(e) => {
            setAdded(!added);

            if (added) {
              window.location.reload();
            }
          }}
          type="submit"
          className="bg-blue-500 py-2 px-3 rounded text-white shadow-md"
        >
          {added ? "Upload" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
