import BrightIcon from "../../assets/icons/bright.svg";
import DarkIcon from "../../assets/icons/dark.svg";
import EyeIcon from "../../assets/icons/eye.svg";
import { NavLink } from "react-router-dom";
import { Modal } from "../../modal";
import { AddNewBoard } from "../AddNewBoard";
import { useState } from "react";

export function SideNav() {
  const [isShowing, setIsShowing] = useState(false);

  function toggleModal() {
    setIsShowing(!isShowing);
  }
  return (
    <div className="max-w-[300px] h-full pr-[23px] flex flex-col">
      <div className="">
        <p className="pb-[20px] pl-8 text-[12px] text-grey-1000">
          ALL BOARDS (3)
        </p>
        <div>
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "bg-purple-1000 text-white py-3 pl-8 pr-[90px] rounded-[0_50px_50px_0] max-h-[48px] block"
                  : "text-grey-1000 py-3 pl-8 pr-[90px] max-h-[48px] block"
              }
            >
              <div className="flex items-center gap-3">
                <SideIcon />
                <p className="text-[15px]">{item.name}</p>
              </div>
            </NavLink>
          ))}
        </div>
        <div
          className="flex items-center gap-3 text-purple-1000 py-3 px-8"
          onClick={toggleModal}
        >
          <SideIcon />
          <p>+ Create New Board</p>
        </div>
      </div>
      <div className="">
        <div className="flex items-center gap-3 px-8 py-3 bg-grey-100 rounded ml-[24px] justify-center">
          <img src={BrightIcon} alt="Bright Mode" />
          <div className="bg-purple-1000 w-[40px] h-[20px] p-[3px] rounded-full">
            <div className="bg-white w-[14px] h-[14px] rounded-full "></div>
          </div>
          <img src={DarkIcon} alt="Dark Mode" />
        </div>
        <div className="flex px-8 gap-[15px] pt-6">
          <img src={EyeIcon} />
          <p className=" text-grey-1000">Hide Sidebar</p>
        </div>
      </div>
      <Modal show={isShowing}>
        <AddNewBoard />
      </Modal>
    </div>
  );
}

const menuItems = [
  {
    name: "Platform Launch",
    path: "/",
  },
  {
    name: "Marketing Plan",
    path: "marketing-plan",
  },
  {
    name: "Roadmap",
    path: "roadmap",
  },
];

const SideIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.846133 0.846133C0.304363 1.3879 0 2.12271 0 2.88889V13.1111C0 13.8773 0.304363 14.6121 0.846133 15.1538C1.3879 15.6957 2.12271 16 2.88889 16H13.1111C13.8773 16 14.6121 15.6957 15.1538 15.1538C15.6957 14.6121 16 13.8773 16 13.1111V2.88889C16 2.12271 15.6957 1.3879 15.1538 0.846133C14.6121 0.304363 13.8773 0 13.1111 0H2.88889C2.12271 0 1.3879 0.304363 0.846133 0.846133ZM1.33333 13.1111V8.44448H9.77781V14.6667H2.88889C2.03022 14.6667 1.33333 13.9698 1.33333 13.1111ZM9.77781 7.11111V1.33333H2.88889C2.47633 1.33333 2.08067 1.49723 1.78895 1.78895C1.49723 2.08067 1.33333 2.47633 1.33333 2.88889V7.11111H9.77781ZM11.1111 5.77778H14.6667V10.2222H11.1111V5.77778ZM14.6667 11.5555H11.1111V14.6667H13.1111C13.5236 14.6667 13.9194 14.5028 14.2111 14.2111C14.5028 13.9194 14.6667 13.5236 14.6667 13.1111V11.5555ZM14.6667 2.88889V4.44445H11.1111V1.33333H13.1111C13.5236 1.33333 13.9194 1.49723 14.2111 1.78895C14.5028 2.08067 14.6667 2.47633 14.6667 2.88889Z"
        fill="currentColor"
      />
    </svg>
  );
};
