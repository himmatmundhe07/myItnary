import { lazy } from "react";
import { Route } from "react-router-dom";

const MyTrips = lazy(() => import("../pages/trips/MyTrips"));
const NewTripStep1 = lazy(() => import("../pages/trips/NewTripStep1"));
const TripItinerary = lazy(() => import("../pages/trips/TripItinerary"));
const TripMapView = lazy(() => import("../pages/trips/TripMapView"));

const TripRoutes = () => (
  <>
    <Route path="/trips" element={<MyTrips />} />
    <Route path="/trips/new" element={<NewTripStep1 />} />
    <Route path="/trips/:id" element={<TripItinerary />} />
    <Route path="/trips/:id/map" element={<TripMapView />} />
  </>
);

export default TripRoutes;
