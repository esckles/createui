import { useState } from "react";
import { MdClose } from "react-icons/md";

const Dashboard = () => {
  const [toggle, setToggle] = useState<boolean>();
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-blue-200">
      <div className="flex ">
        <div className="w-[50vh] h-[calc(100vh-80px)]  border-r">
          <p> last post</p>
        </div>
        <div className="w-[100vh] h-[calc(100vh-80px)] border-r  flex  justify-end items-start">
          <div className=" mt-4 relative">
            {" "}
            <button
              className="px-2 py-2 rounded-md text-center bg-black text-white"
              onClick={() => setToggle(!toggle)}
            >
              create post
            </button>
          </div>
          {toggle && (
            <div className="w-[30%] h-[70%] bg-[#242527] rounded-md absolute mt-[60px] p-3 flex gap-9 flex-col">
              <div className="flex gap-4">
                <MdClose
                  onClick={() => setToggle(false)}
                  className=" mt-2"
                  size={30}
                />
                <div className=" mt-4 ml-4">
                  <input
                    type="text"
                    className="w-[200px] py-1 bg-transparent outline-none rounded-md text-[13px] text-white"
                    placeholder=" say something about this post !!"
                  />
                </div>
                <div className="h-[25px] w-[40px] text-center text-white flex items-center justify-center bg-[#0865FF] rounded-md font-semibold text-[10px] ml-9 cursor-pointer">
                  post
                </div>
              </div>
              <div className=" w-[60%] h-[70%] border ml-[70px]">
                {/* <img src={} alt="" /> */}
              </div>
              <div className=" flex items-end justify-end w-full">
                <label
                  className="px-1 py-2 text-[10px] cursor-pointer rounded-md bg-blue-300  "
                  htmlFor="image"
                >
                  select image
                  <input
                    type="file"
                    className="hidden"
                    name="text"
                    id="image"
                  />
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
