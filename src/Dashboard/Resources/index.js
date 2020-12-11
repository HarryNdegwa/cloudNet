import DashboardHeader from "../DashboardHeader";
import DashboardSidebar from "../DashboardSidebar";
import "./style.css";

function Resources(props) {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="dashboard-wrapper container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 dashboard-left">
            <DashboardSidebar />
          </div>
          <div className="col-12 col-md-9 col-lg-10 dashboard-right"></div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
