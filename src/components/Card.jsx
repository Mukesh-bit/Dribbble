import React, { useState } from "react";
import Text from "../components/Text";

const Card = ({hide, setHide}) => {


 

  return (
    <>
      <div className="border-2 w-[14rem] p-1">
        <img
          className="w-[15rem]"
          src="https://leadingedgeinfosolutions.com/wp-content/uploads/2021/06/website-design-company-new-york-banner.png"
          alt=""
        />
        <Text text="I'm a designer looking to share my work" />

        {
          hide && (<p className="text-sm text-gray-500">With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration</p>)
        }
        

        <input className="w-5 h-5 mt-2 cursor-pointer" type="checkbox" onChange={() => setHide(!hide)} />
      </div>
    </>
  );
};

export default Card;
