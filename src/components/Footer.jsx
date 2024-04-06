import React from "react";
import Text from "./Text";

const Footer = () => {
  return (
    <>
      <div className="mt-[5rem] bg-[#FAFAFA] px-16 py-14 flex  justify-between">

        <div className="flex flex-col gap-5">
          <h1 className="text-[#EA4B8B] text-2xl font-[Pacifico]">dribbble</h1>
          <p className="w-[18rem] font-normal">
            Dribbble is the world's leading community for creatives to share,
            grow, and get hired
          </p>
          <div className="flex gap-3 text-xl">
            <i class="ri-basketball-line"></i>
            <i class="ri-twitter-fill"></i>
            <i class="ri-facebook-box-fill"></i>
            <i class="ri-instagram-line"></i>
            <i class="ri-pinterest-fill"></i>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Text text="For Designers"/>
          <a>Go Pro!</a>
          <a>Explore design work</a>
          <a>Design blog</a>
          <a>Overtime podcast</a>
          <a>Playoffs</a>
          <a>Weekly Warm-Up</a>
          <a>Refer a Friend</a>
          <a>Code of conduct</a>
        </div>

        <div className="flex flex-col gap-4">
          <Text text="Hire Designers"/>
          <a>Post a job opening</a>
          <a>Post a freelance project</a>
          <a>Search for Designers</a>
          <Text text="Brands"/>
          <a>Code of conduct</a>
        </div>

        <div className="flex flex-col gap-4">
          <Text text="Company"/>
          <a>About</a>
          <a>Careers</a>
          <a>Support</a>
          <a>Media kit</a>
          <a>Testimonials</a>
          <a>API</a>
          <a>Term of service</a>
          <a>Privacy policy</a>
          <a>Cookie policy</a>
        </div>

        <div className="flex flex-col gap-4">
          <Text text="Directories"/>
          <a>Design jobs</a>
          <a>Designers for hire</a>
          <a>Freelance designers for hire</a>
          <a>Tags</a>
          <a>Places</a>
          <Text text="Design assets"/>
          <a>Dribbble Marketplace</a>
          <a>Creative Market</a>
          <a>Fontspring</a>
          <a>Font Squirrel</a>
        </div>

        <div className="flex flex-col gap-4">
          <Text text="Design Resources"/>
          <a>Freelancing</a>
          <a>Design Hiring</a>
          <a>Design Portfolio</a>
          <a>Design Education</a>
          <a>Creative Process</a>
          <a>Design Industry Trends</a>
        </div>

      </div>
    </>
  );
};

export default Footer;
