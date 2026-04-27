import { lazy } from "react";
import { Route } from "react-router-dom";

const HealthcareHome = lazy(() => import("../pages/healthcare/HealthcareHome"));
const DoctorResults = lazy(() => import("../pages/healthcare/DoctorResults"));
const DoctorProfile = lazy(() => import("../pages/healthcare/DoctorProfile"));

const HealthcareRoutes = () => (
  <>
    <Route path="/healthcare" element={<HealthcareHome />} />
    <Route path="/healthcare/doctors" element={<DoctorResults />} />
    <Route path="/healthcare/doctor/:id" element={<DoctorProfile />} />
  </>
);

export default HealthcareRoutes;
