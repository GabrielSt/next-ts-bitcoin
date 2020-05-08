import { elastic as Menu } from "react-burger-menu";
import Link from "next/link";

const Sidebar = (props) => {
  return (
    <Menu {...props}>
      <Link href="/">
        <a className="bm-item menu-item">Home</a>
      </Link>
      <Link href="/about">
        <a className="bm-item menu-item">About</a>
      </Link>
    </Menu>
  );
};

export default Sidebar;
