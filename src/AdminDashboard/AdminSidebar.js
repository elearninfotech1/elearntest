import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div>
      <ul>
        <li className="mb-3">
          <NavLink to="">Add Lnews</NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="deletelnews">Delete Lnews</NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="editlnews">Edit Lnews</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
