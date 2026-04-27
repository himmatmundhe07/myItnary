import { lazy } from "react";
import { Route } from "react-router-dom";

const SafetyDashboard = lazy(() => import("../pages/safety/SafetyDashboard"));
const SOSScreen = lazy(() => import("../pages/safety/SOSScreen"));
const SOSConfirmation = lazy(() => import("../pages/safety/SOSConfirmation"));
const EmergencyContacts = lazy(() => import("../pages/safety/EmergencyContacts"));
const GuardianBrowse = lazy(() => import("../pages/safety/GuardianBrowse"));
const GuardianProfile = lazy(() => import("../pages/safety/GuardianProfile"));
const RequestGuardian = lazy(() => import("../pages/safety/RequestGuardian"));

const SafetyRoutes = () => (
  <>
    <Route path="/safety" element={<SafetyDashboard />} />
    <Route path="/safety/sos" element={<SOSScreen />} />
    <Route path="/safety/sos/sent" element={<SOSConfirmation />} />
    <Route path="/safety/contacts" element={<EmergencyContacts />} />
    <Route path="/safety/guardians" element={<GuardianBrowse />} />
    <Route path="/safety/guardian/request" element={<RequestGuardian />} />
    <Route path="/safety/guardian/:id" element={<GuardianProfile />} />
  </>
);

export default SafetyRoutes;
