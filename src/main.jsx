import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./page/dashboard/Dashbord.jsx";
import Team from "./page/team/Team.jsx";
import Contact from "./page/contact/Contact.jsx";
import Description from "./page/description/Description.jsx";
import Form from "./page/form/Form.jsx";
import Calander from "./page/calendar/Calendar.jsx";
import Faq from "./page/faq/Faq.jsx";
import BarChart from "./page/Bar/BarChart.jsx";
import PieCHart from "./page/pie/PieChart.jsx";
import LineChart from "./page/line/LineChart.jsx";
import Geography from "./page/geography/Geography.jsx";
import NotFound from "./page/Ntofound/NotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contact" element={<Contact />} />
      <Route path="description" element={<Description />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calander />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieCHart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
