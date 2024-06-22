import Logo from "../../assets/icons/blackLogo.svg";
import Actions from "../../assets/icons/actions.svg";
import { Button } from "../Button";
import { Modal } from "../../modal/Modal";
import { useState } from "react";
import { AddNewTask } from "../AddNewTask";

export function NavBar() {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }
  return (
    <div className="p-8">
      <div className="flex gap-[120px]">
        <img src={Logo} />
        <div className="flex justify-between items-center w-full">
          <p className="mr-12">Platform Launch</p>
          <div className="flex items-center gap-6">
            <Button
              onClick={toggle}
              className="w-[164px] text-[15px] rounded"
              children="+ Add New Task"
            />

            <img src={Actions} />
          </div>
        </div>
      </div>
      <Modal show={isShowing}>
        <AddNewTask />
      </Modal>
    </div>
  );
}
