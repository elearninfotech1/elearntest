import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./static_website/Home";
import Aboutus from "./static_website/AboutUs";
import Services from "./static_website/Services";
import Gallery from "./static_website/Gallery";
import ContactUs from "./static_website/ContactUs";
import NoPage from "./static_website/NoPage";
import Admin from "./AdminDashboard/Admin";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AddLnews from "./AdminDashboard/AddLnews";
import DeleteLnews from "./AdminDashboard/DeleteLnews";
import EditLnews from "./AdminDashboard/EditLnews";
import LnewsEdit from "./AdminDashboard/LnewsEdit";
import UseParamEx from "./static_website/UseParamEx";
import UserDeatils from "./static_website/UserDeatils";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route path="" element={<AddLnews />} />
          <Route path="deletelnews" element={<DeleteLnews />} />
          <Route path="editlnews" element={<EditLnews />} />
        </Route>

        <Route path="lnewsedit/:lid" element={<LnewsEdit />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/userdata" element={<UseParamEx />} />
        <Route path="/userdetails/:uid" element={<UserDeatils />} />
      </Routes>
    </>
  );
};

export default Routing;
