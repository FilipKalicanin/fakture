import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SuspenseContainer from "../Helpers/Suspense";

const AddMain = lazy(() => import("../Pages/AddProject/AddMain"));
const DetailsMain = lazy(() => import("../Pages/ProjectDetails/DetailsMain"));

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <SuspenseContainer>
            <AddMain />
          </SuspenseContainer>
        }
      />
      <Route
        path='/details'
        element={
          <SuspenseContainer>
            <DetailsMain />
          </SuspenseContainer>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
