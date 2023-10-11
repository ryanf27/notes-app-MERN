import Sidebar from "./../../components/sidebar/Sidebar";
import NoteEditor from "../../components/note-editor/NoteEditor";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-content">
          <Sidebar />
          <div className="main-content">
            <NoteEditor />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
