import React, { ReactNode } from "react";

interface iProps {
  HomeIcon: ReactNode;
  notificationIcon: ReactNode;
  reelsIcon: ReactNode;
  settingIcon: ReactNode;
}

const DesignHeader: React.FC<iProps> = ({
  HomeIcon,
  notificationIcon,
  reelsIcon,
  settingIcon,
}) => {
  return (
    <div>
      <div className="w-full h-[80px] border flex items-center justify-center">
        <div className="flex w-[90%] h-[100%] items-center justify-around border ">
          {HomeIcon && <div className="cursor-pointer"> {HomeIcon}</div>}
          {notificationIcon && (
            <div className="font-semibold cursor-pointer relative">
              {notificationIcon}
              <div className="w-[10px] h-[10px] bg-red-500 rounded-md right-0 top-0 absolute"></div>
            </div>
          )}
          {reelsIcon && (
            <div className="font-semibold cursor-pointer">{reelsIcon}</div>
          )}
          {settingIcon && (
            <div className="font-semibold px-3 py-2 rounded-md  text-center  cursor-pointer">
              {settingIcon}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignHeader;
