import React from "react";

import Navbar from "../components/Navbar";
import Text from "../components/Text";
import Footer from "../components/Footer";

const Verify = () => {
  return (
    <>
      <div className="w-full">
        <Navbar/>

        <div className="w-[50%] h-[50%] m-auto text-center flex flex-col gap-4 mt-12">
          <h1 className="text-4xl font-bold">Please verify your email</h1>
          <i class="text-7xl ri-mail-unread-line"></i>
          <p className="text-gray-500">Please verify your email address. We've sent a confirmation email to</p>
          <Text text="account@refero.design"/>
          <p className="text-gray-500">Click the confirmation link in that email to begin using Dribbble.</p>
          <div>
            <p className="text-gray-500">Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If</p>
            <p className="text-gray-500">you still don't see it, you can <a className="text-[#EA4B8B]" href="#">resend the confirmation email</a></p>
          </div>
          <p className="text-gray-500">Wrong email address? <a className="text-[#EA4B8B]" href="#">Change it.</a></p>
        </div>

        <Footer/>
      </div>
    </>
  );
};

export default Verify;
