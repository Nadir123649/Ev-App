import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageUpload from "../../component/ImageUpload";
import left from "../../assets/images/right.svg";
import Layout from "../../layout";
import getInstance from "../../service/getInstance";
import { DotLoader } from "react-spinners";
import toast from "react-hot-toast";
const AccountSetting = () => {

  const [userProfile, setUserProfile] = React.useState({});
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();



  useEffect(() => {
    getInstance
      .get("/profile")
      .then((res) => {
        setUserProfile(res.data.data.user)
      })
      .catch((err) => {
        console.error("Error fetching car data:", err);
      });
  }, []);

  const updatePassword = async () => {
    // Password validation
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

    if (!passwordRegex.test(password)) {
      toast.error("Password must be at least 12 characters long and include letters, numbers, and a symbol.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const response = await getInstance.put("/updatePassword", { password, confirmPassword });
      console.log(response.data);
      toast.success("Password updated successfully!");
      setTimeout(() => navigate("/home"), 1500);
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("Failed to update password.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Layout>
      <div className="lg:w-custom w-[95%] mx-auto grid grid-cols-3 pt-10 items-center">
        <Link to="/profile-setting">
          <div className="flex">
            <div className="p-3 bg-white rounded-full custom-shadow ">
              <img className="w-[21px] h-[21px]" src={left} alt="" />
            </div>
          </div>
        </Link>
        <div className="md:col-span-1 col-span-2">
          <h1 className="text-[#4D4D4D] font-bold md:text-center text-start sm:text-[28px] text-xl">
            Account Settings
          </h1>
        </div>
      </div>
      <ImageUpload />
      <div className="lg:w-custom w-[95%] mx-auto grid sm:grid-cols-2 grid-cols-1 gap-5 sm:pt-10 pt-5">
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm " htmlFor="">
            Account Name
          </label>
          <input
            type="text"
            disabled
            className="w-full px-3 py-2 mt-1 cursor-not-allowed rounded-xl border-[1px] border-[#ACACAC] text-[#4D4D4D]  focus:outline-none"
            placeholder=""
            value={userProfile.name}
          ></input>
        </div>
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm " htmlFor="">
            Email Address
          </label>
          <input
            type="email"
            value={userProfile.email}
            disabled
            className="w-full px-3 py-2 mt-1 cursor-not-allowed rounded-xl border-[1px] border-[#ACACAC] text-[#4D4D4D]  focus:outline-none"
            placeholder=""
          ></input>
        </div>
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm " htmlFor="">
            Password
          </label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full px-3 py-2 mt-1 rounded-xl border-[1px] border-[#ACACAC] text-[#4D4D4D]  focus:outline-none"
            placeholder="**************"
          ></input>
        </div>
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm " htmlFor="">
            Confirm Password
          </label>
          <input
            type="text"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            className="w-full px-3 py-2 mt-1 rounded-xl border-[1px] border-[#ACACAC] text-[#4D4D4D]  focus:outline-none"
            placeholder="**************"
          ></input>
        </div>
      </div>
      <hr className="text-[#ECECEC] my-5 hidden sm:block lg:w-custom  w-[95%] mx-auto" />
      <div className="text-end lg:w-custom w-[95%] mx-auto">
        <button className={`${!password || !confirmPassword ? 'bg-gray-300 cursor-not-allowed' : "bg-blue cursor-default"} px-10 py-2  text-white rounded-2xl font-bold sm:mt-0 mt-5 w-full sm:w-auto`} disabled={!password || !confirmPassword} onClick={updatePassword}>
          {!loading ? "Update Profile" : <DotLoader color="#fff" size={21} />}
        </button>
      </div>
    </Layout>
  );
};

export default AccountSetting;
