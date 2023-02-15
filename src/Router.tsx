import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Vehicle } from "./pages/Vehicle";
import { DefaultLayout } from "./layouts/DefaultLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/vehicle/add" element={<Vehicle />} />
        <Route path="/vehicle/view/:id" element={<Vehicle />} />
        <Route path="vehicle/edit/:id" element={<Vehicle />} />
      </Route>
    </Routes>
  );
};
