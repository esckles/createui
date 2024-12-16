import React from "react";
import DesignHeader from "./DesignHeader";
import { BiBell, BiHome } from "react-icons/bi";
import { MdMovie } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

const Header: React.FC = () => {
  return (
    <div>
      <DesignHeader
        HomeIcon={<BiHome size={30} />}
        notificationIcon={<BiBell size={30} />}
        reelsIcon={<MdMovie size={30} />}
        settingIcon={<CiSettings size={30} />}
      />
    </div>
  );
};

export default Header;
