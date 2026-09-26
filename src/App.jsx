import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketingLayout from "./layouts/MarketingLayout";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Product = lazy(() => import("./pages/Product"));
const Features = lazy(() => import("./pages/Features"));
const Pricing = lazy(() => import("./pages/Pricing"));
const About = lazy(() => import("./pages/About"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const InvitationsCatalog = lazy(() => import("./pages/InvitationsCatalog"));
const Experiences = lazy(() => import("./pages/Experiences"));
const FeatureDetail = lazy(() => import("./pages/FeatureDetail"));
const InvitationDetail = lazy(() => import("./pages/InvitationDetail"));
const CreateWizard = lazy(() => import("./pages/CreateWizard"));
const HostDashboard = lazy(() => import("./pages/HostDashboard"));
const SuperAdmin = lazy(() => import("./pages/SuperAdmin"));
const EventWorkspace = lazy(() => import("./pages/EventWorkspace"));

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-black" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<MarketingLayout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="features" element={<Features />} />
            <Route path="features/:slug" element={<FeatureDetail />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="about" element={<About />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="invitations" element={<InvitationsCatalog />} />
            <Route path="invitations/:slug" element={<InvitationDetail />} />
            <Route path="experiences" element={<Experiences />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="create" element={<CreateWizard />} />
          <Route path="dashboard" element={<HostDashboard />} />
          <Route path="admin" element={<SuperAdmin />} />
          <Route path="workspace" element={<EventWorkspace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
