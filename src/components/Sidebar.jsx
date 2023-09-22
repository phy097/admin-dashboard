import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  faUsers,
  faPenToSquare,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import {
  faChartLine,
  faFlag,
  faGhost,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <>
      <nav className="col-2 bg-light pe-3">
        <h1 className="h4 py-3 text-center text-primary">
          <FontAwesomeIcon icon={faGhost} />
          <span className="d-none d-lg-inline me-2"> ADMIN </span>
        </h1>
      </nav>
      <div className="list-group text-center text-lg-start">
        <span className="list-group-item disabled d-none d-lg-block">
          <small>CONTROLS</small>
        </span>
        <a href="#" className="list-group-item list-group-item-action active">
          <FontAwesomeIcon icon={faHouse} />
          <span className="d-none d-lg-inline">Dashboard</span>{" "}
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faUsers} />
          <span className="d-none d-lg-inline">Users</span>
          <span className="d-none d-lg-inline badge bg-danger rounded-pill float-end">
            20
          </span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faChartLine} />
          <span className="d-none d-lg-inline">Statistics</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faFlag} />
          <span className="d-none d-lg-inline">Reports</span>
        </a>
      </div>
      <div className="list-group mt-4 text-center text-lg-start">
        <span className="list-group-item disabled d-none d-lg-block">
          <small>ACTIONS</small>
        </span>
        <a href="#" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faUser} />
          <span className="d-none d-lg-inline">New User</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faPenToSquare} />
          <span className="d-none d-lg-inline">Update Data</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faCalendarDays} />
          <span className="d-none d-lg-inline">Add Events</span>
        </a>
      </div>
    </>
  );
};

export default Sidebar;
