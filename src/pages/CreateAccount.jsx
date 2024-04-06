import React, { useRef, useState } from "react";

import Text from '../components/Text'
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {

  const [image, setImage] = useState('https://static.thenounproject.com/png/3465532-200.png')

  const inputRef = useRef(null)

  const navigate = useNavigate()

  const handleClick = () => {
    console.log("first")
    inputRef.current.click()
  }

  const handleChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
  }

  const handleClickOptions = () => {
      navigate('/selectOptions')
  }

  return (
    <>
      <div className="w-full h-screen ">
        <nav className="w-full h-[4rem] text-[#EA4B8B] flex items-center pl-10 text-2xl  font-[Pacifico]">
          <h1>dribbble</h1>
        </nav>

        <div className="w-[40%] h-[50%] m-auto ">

          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold">
              Welcome! Let's create your profile
            </h1>
            <p className="text-sm text-[#76757C] font-medium">
              Let others get to know you better! You can do these later
            </p>
          </div>

          <div className="mt-10">
            <h1 className="text-2xl font-bold">Add an avatar</h1>
          </div>

          <div className="flex items-center gap-8 mt-4">

            <div>
              <img className="w-[200px] h-[200px] rounded-full object-cover border-spacing-1  " src={image} alt="" />
            </div>

            <div>
              <div className="flex flex-col gap-7">
                <input ref={inputRef} hidden type="file" name="" id="" onChange={handleChange}/>
                <button onClick={handleClick} className="border-[1px] border-grey py-2 rounded-lg font-bold">Choose image</button>
                <p className="text-gray-500 font-semibold"><i class="ri-arrow-right-s-line"></i> Or Choose one of our defaults</p>
              </div>
            </div>

          </div>

          <div className="mt-3">
            <Text text="Add your location"/>
            <Input placeholder="Enter a location" bgColor="#F3F3F3"/>
          </div>

          <div className="mt-10 flex flex-col gap-2">
            <Button handleClick={handleClickOptions} text="Next" width="12rem"/>
            <h5 className="text-sm text-gray-500">or Press RETURN</h5>
          </div>

        </div>
      </div>
    </>
  );
};

export default CreateAccount;
