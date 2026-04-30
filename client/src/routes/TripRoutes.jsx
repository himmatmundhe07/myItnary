import { lazy } from "react";
import { Route } from "react-router-dom";

const NewTripStep1 = lazy(() => import("../pages/trips/NewTripStep1"));
const TripItinerary = lazy(() => import("../pages/trips/TripItinerary"));
const TripMapView = lazy(() => import("../pages/trips/TripMapView"));

const TripRoutes = () => (
  <>
    <Route path="/trips/new" element={<NewTripStep1 />} />
    <Route path="/trips/jaisalmer/itinerary" element={<TripItinerary />} />
    <Route path="/trips/:id/itinerary" element={<TripItinerary />} />
    <Route path="/trips/:id" element={<TripItinerary />} />
    <Route path="/trips/:id/map" element={<TripMapView />} />
  </>
);

export default TripRoutes;
