import Navigation from "../../components/navigation/Navigation";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Navigation />
      <div className="container-fluid d-flex h-100">
        <div className="sidebar w-25 mt-2">
          <div className="d-flex flex-column">
            <button className="btn btn-outline-dark mb-2" type="button">
              Button
            </button>
            <button className="btn btn-outline-dark mb-2" type="button">
              Button
            </button>
            <button className="btn btn-outline-dark mb-2" type="button">
              Button
            </button>
            <button className="btn btn-outline-dark mb-2" type="button">
              Button
            </button>
          </div>
        </div>
        <div className="main w-75 mx-5">
          <div className="row d-flex flex-column">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea
                  className="form-control"
                  id="body"
                  rows="20"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
