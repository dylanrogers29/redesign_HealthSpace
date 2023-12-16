import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ScheduleAppointmentScreenThree = React.lazy(
  () => import("pages/ScheduleAppointmentScreenThree"),
);
const InsuranceCardExpanded = React.lazy(
  () => import("pages/InsuranceCardExpanded"),
);
const ScheduleAppointmentScreenTwo = React.lazy(
  () => import("pages/ScheduleAppointmentScreenTwo"),
);
const LabResultsExpanded = React.lazy(() => import("pages/LabResultsExpanded"));
const LabResults = React.lazy(() => import("pages/LabResults"));
const InsuranceCard = React.lazy(() => import("pages/InsuranceCard"));
const AppointmentPopupOne = React.lazy(
  () => import("pages/AppointmentPopupOne"),
);
const MedicalClearances = React.lazy(() => import("pages/MedicalClearances"));
const Handouts = React.lazy(() => import("pages/Handouts"));
const ScheduleAppointmentScreenOne = React.lazy(
  () => import("pages/ScheduleAppointmentScreenOne"),
);
const Immunizations = React.lazy(() => import("pages/Immunizations"));
const Referrals = React.lazy(() => import("pages/Referrals"));
const HealthHistory = React.lazy(() => import("pages/HealthHistory"));
const Letters = React.lazy(() => import("pages/Letters"));
const Schedulingquestionnnaire = React.lazy(
  () => import("pages/Schedulingquestionnnaire"),
);
const AppointmentHistory = React.lazy(() => import("pages/AppointmentHistory"));
const Forms = React.lazy(() => import("pages/Forms"));
const AppointmentPopup = React.lazy(() => import("pages/AppointmentPopup"));
const MessageScreen = React.lazy(() => import("pages/MessageScreen"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const MedicalRecords = React.lazy(() => import("pages/MedicalRecords"));
const Documents = React.lazy(() => import("pages/Documents"));
const ProfileScreen = React.lazy(() => import("pages/ProfileScreen"));
const ScheduleReschedule = React.lazy(() => import("pages/ScheduleReschedule"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/schedulereschedule" element={<ScheduleReschedule />} />
          <Route path="/profilescreen" element={<ProfileScreen />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/medicalrecords" element={<MedicalRecords />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/messagescreen" element={<MessageScreen />} />
          <Route path="/appointmentpopup" element={<AppointmentPopup />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/appointmenthistory" element={<AppointmentHistory />} />
          <Route
            path="/schedulingquestionnnaire"
            element={<Schedulingquestionnnaire />}
          />
          <Route path="/letters" element={<Letters />} />
          <Route path="/healthhistory" element={<HealthHistory />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/immunizations" element={<Immunizations />} />
          <Route
            path="/scheduleappointmentscreenone"
            element={<ScheduleAppointmentScreenOne />}
          />
          <Route path="/handouts" element={<Handouts />} />
          <Route path="/medicalclearances" element={<MedicalClearances />} />
          <Route
            path="/appointmentpopupone"
            element={<AppointmentPopupOne />}
          />
          <Route path="/insurancecard" element={<InsuranceCard />} />
          <Route path="/labresults" element={<LabResults />} />
          <Route path="/labresultsexpanded" element={<LabResultsExpanded />} />
          <Route
            path="/scheduleappointmentscreentwo"
            element={<ScheduleAppointmentScreenTwo />}
          />
          <Route
            path="/insurancecardexpanded"
            element={<InsuranceCardExpanded />}
          />
          <Route
            path="/scheduleappointmentscreenthree"
            element={<ScheduleAppointmentScreenThree />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
