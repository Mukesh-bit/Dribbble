import React from "react";

const Button = ({handleClick, text, width }) => {
  return (
    <>
      <div>
        <button onClick={handleClick} style={{width: `${width}`}} className="bg-[#EA4B8B] py-1 px-9 text-white rounded-lg text-center">{text}</button>
      </div>
    </>
  );
};

export default Button;
