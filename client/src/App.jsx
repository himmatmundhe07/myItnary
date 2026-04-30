import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logout } from "./store/authSlice";
import Loader from "./components/shared/Loader";

/* Route modules — each owns its own lazy imports */
import {
  ProtectedRoute,
  PublicRoutes,
  DashboardRoutes,
  HealthcareRoutes,
  TripRoutes,
  DiscoverRoutes,
  SafetyRoutes,
} from "./routes";

function App() {
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    // If we have a token but aren't authenticated in Redux (e.g. after a page refresh), fetch the user profile
    if (token && !isAuthenticated) {
      const fetchUser = async () => {
        try {
          const res = await fetch('http://localhost:5000/api/auth/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const data = await res.json();
          if (res.ok) {
            dispatch(loginSuccess({ user: data, token }));
          } else {
            // Token might be expired or invalid
            dispatch(logout());
          }
        } catch (err) {
          console.error("Failed to fetch user:", err);
          dispatch(logout());
        }
      };
      fetchUser();
    }
  }, [token, isAuthenticated, dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public Routes (Landing, Auth) */}
          {PublicRoutes()}

          {/* Protected Routes — require authentication */}
          <Route element={<ProtectedRoute />}>
            {DashboardRoutes()}
          </Route>

          {/* Healthcare */}
          {HealthcareRoutes()}

          {/* Trip Planning (Public for review) */}
          {TripRoutes()}

          {/* Experience Discovery (Public for review) */}
          {DiscoverRoutes()}

          {/* Safety & Emergency */}
          {SafetyRoutes()}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
