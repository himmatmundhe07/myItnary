import { lazy } from "react";
import { Route } from "react-router-dom";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const CompleteProfile = lazy(() => import("../pages/auth/CompleteProfile"));
const PermissionsSetup = lazy(() => import("../pages/onboarding/PermissionsSetup"));
const GlobalSearch = lazy(() => import("../pages/dashboard/GlobalSearch"));

const DashboardRoutes = () => (
  <>
    <Route path="/home" element={<HomePage />} />
    <Route path="/complete-profile" element={<CompleteProfile />} />
    <Route path="/onboarding/permissions" element={<PermissionsSetup />} />
    <Route path="/search" element={<GlobalSearch />} />
  </>
);

export default DashboardRoutes;
