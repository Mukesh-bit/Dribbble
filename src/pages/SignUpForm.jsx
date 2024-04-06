import React from "react";
import Button from "../components/Button";
import Text from "../components/Text";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/CreateAccount')
  }

  return (
    <div className="signUpContainer w-full h-screen flex items-center justify-between">

      <div className="left bg-[#F2D184] w-[35%] h-screen ">

        <div className="w-[50%]  mt-[5rem] ml-[4rem] flex flex-col gap-4">
          <h2 className="text-2xl  font-[Pacifico] text-[#A8833C]">dribbble</h2>
          <h1 className="text-xl text-[#856115] font-bold font-sans">Discover the world's top Desigers & Creatives.</h1>
        </div>

        <div className="w-[95%] mt-10 ml-8">
          <img className="w-[25rem]" src="https://media.licdn.com/dms/image/D5612AQEV2NX7mzp8zA/article-cover_image-shrink_600_2000/0/1668156269953?e=2147483647&v=beta&t=RDVA4aE7z8aeTPhTVoIFaeWyXlfoloUnSOxXhRgFnns" alt="" />
        </div>

        <div className="mt-[5rem] ml-[4rem]">
          <p>Art by <a className="border-b-[1px] border-[#A8833C] text-[#A8833C]" href="#">Peter Tarka</a></p>
        </div>

      </div>

      <div className="right  w-[65%] h-screen">
        <h3 className="text-right mt-5 mr-8 font-normal">
          Already a member? <a className="text-blue-800">Sign In</a>
        </h3>

        <div className="flex m-auto mt-7 w-[43%] ">
          <form className="w-full">
            <h1 className="font-bold text-left text-3xl">Sign up to Dribble</h1>

            <div className="mt-5">
              <h4 className="text-[#EF5E5C] font-medium">
                Username has already been taken
              </h4>
            </div>

            <div className="flex justify-between w-full mt-5 gap-6">
              <div className="w-1/2">
                <Text text={"Name"} />
                <Input bgColor="#F3F3F3" />
              </div>

              <div className="w-1/2">
                <Text text={"Username"} />
                <Input bgColor="#FEEEEE" />
              </div>
            </div>

            <div className="flex flex-col justify-between w-full mt-5">
              <Text text={"Email"} />
              <Input bgColor="#F3F3F3" placeholder="account@refero.design" />
            </div>

            <div className="flex flex-col justify-between w-full mt-5">
              <Text text={"Password"} />
              <Input bgColor="#F3F3F3" placeholder="6+ characters" />
            </div>

            <div className="flex items-start gap-3 w-full mt-5 mb-5">
              <input
                type="checkbox"
                className="bg-[#F3F3F3] rounded-lg mt-1 py-2 px-4"
              />
              <p className="text-sm text-[#717171]">
                Creating an account means you're okay with our{" "}
                <a href="#" className="text-blue-600">
                  Terms of Service, Privacy Policy,
                </a>{" "}
                and our default{" "}
                <a href="#" className="text-blue-600">
                  Notification Settings
                </a>
              </p>
            </div>

            <Button handleClick={handleClick} text="Create Account" width="12rem"/>

            <div className="mt-5">
              <p className="text-[11px] text-[#717171]">
                This site is protected by reCAPTCHA and the Google
              </p>
              <p className="text-[11px] text-[#717171]">
                <a href="#" className="text-blue-600">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600">
                  Terms of Service apply
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
