import "./sidebar.css";
import { CgNotes, CgTimer } from "react-icons/cg";
import { BsListTask } from "react-icons/bs";
import { BiLogOut, BiHelpCircle } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { LiaHighlighterSolid, LiaHistorySolid } from "react-icons/lia";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Quick Links</h2>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <i className="sidebar-icon">
            <CgNotes />
          </i>
          All Notes
        </li>
        <li className="sidebar-item">
          <i className="sidebar-icon">
            <CgTimer />
          </i>
          Reminder
        </li>
        <li className="sidebar-item">
          <i className="sidebar-icon">
            <BsListTask />
          </i>
          Tasks
        </li>
        <li className="sidebar-item">
          <i className="sidebar-icon">
            <MdFavorite />
          </i>
          Favorites
        </li>
        <li className="sidebar-item">
          <i className="sidebar-icon">
            <LiaHighlighterSolid />
          </i>
          Highlights
        </li>
        <li className="sidebar-item">
          <i className="sidebar-icon">
            <LiaHistorySolid />
          </i>
          Activity
        </li>
      </ul>
      <div className="sidebar-buttons">
        <button className="sidebar-button">
          <i>
            <AiFillSetting />
          </i>
          Settings
        </button>
        <button className="sidebar-button">
          <i>
            <BiHelpCircle />
          </i>
          Help
        </button>
        <button className="sidebar-button">
          <i>
            <BiLogOut />
          </i>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
