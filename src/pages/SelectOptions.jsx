import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Text from "../components/Text";

const SelectOptions = () => {

  const [hide, setHide] = useState(false)


  const navigate = useNavigate()

  const handleClickVerify = () => {
    navigate('/verify')
  }

  return (
    <>
      <div className="w-full h-screen">
        <nav className="w-full h-[4rem] text-[#EA4B8B] flex items-center pl-10 text-2xl  font-[Pacifico] sticky top-0">
          <h1>dribbble</h1>
        </nav>

        <div className="w-[60%]  m-auto text-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold">What brings you to Dribble?</h1>
            <p className="text-gray-500 font-semibold">
              Select the options that best describe you. Dont't worry, you can
              explore other options later
            </p>
          </div>

          <div className="w-full mt-10 flex justify-between">
            <Card hide={hide} setHide={setHide}/>
            <Card hide={hide} setHide={setHide}/>
            <Card hide={hide} setHide={setHide}/>
          </div>

         <div className="mt-7">
          {
            hide && (<Text text="Anything else? You can select multiple"/>)
          }
         </div>

          <div className="mt-4">
            <Button text="Finish" handleClick={handleClickVerify} width="12rem"/>
            {
            hide && (<p className="text-xs text-gray-500 mt-1">or Press RETURN</p>)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectOptions;
