import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Vehicle } from "./pages/Vehicle";
import { DefaultLayout } from "./layouts/DefaultLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/vehicle/:id" element={<Vehicle />} />
      </Route>
    </Routes>
  );
};
