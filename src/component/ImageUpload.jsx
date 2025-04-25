import { useRef } from "react";
import { FiUpload } from "react-icons/fi";
import profile from "../assets/images/profileupload.jpg";

const ImageUpload = () => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <div className="relative w-40 h-40 mx-auto mt-5 sm:hidden block">
        <img
          src={profile}
          alt="Profile"
          className="w-full h-full object-cover rounded-full border-[2px] border-blue"
        />
        <button
          onClick={handleClick}
          className="absolute bottom-1 right-1 bg-blue text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition"
        >
          <FiUpload className="text-xl" />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={(e) => {
            console.log("File selected:", e.target.files[0]);
          }}
        />
      </div>
    </>
  );
};

export default ImageUpload;
