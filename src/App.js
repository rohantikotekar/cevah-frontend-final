import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop from "./pages/Desktop";
import Desktop1 from "./pages/Desktop1";
import Desktop2 from "./pages/Desktop2";
import Desktop3 from "./pages/Desktop3";
import Desktop4 from "./pages/Desktop4";
import Desktop5 from "./pages/Desktop5";
import Desktop6 from "./pages/Desktop6";
import Desktop7 from "./pages/Desktop7";
import Desktop8 from "./pages/Desktop8";
import Desktop9 from "./pages/Desktop9";
import Desktop10 from "./pages/Desktop10";
import Desktop11 from "./pages/Desktop11";
import Desktop12 from "./pages/Desktop12";
import Desktop13 from "./pages/Desktop13";
import Desktop14 from "./pages/Desktop14";
import Desktop15 from "./pages/Desktop15";
import Desktop16 from "./pages/Desktop16";
import Desktop17 from "./pages/Desktop17";
import Report from "./pages/report";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-197":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-87":
        title = "";
        metaDescription = "";
        break;
      case "/Getting-started":
        title = "";
        metaDescription = "";
        break;
      case "/About-Yourself":
        title = "";
        metaDescription = "";
        break;
      case "/Add-Name":
        title = "";
        metaDescription = "";
        break;
      case "/Education2":
        title = "";
        metaDescription = "";
        break;
      case "/Education3":
        title = "";
        metaDescription = "";
        break;
      case "/otp-verification":
        title = "";
        metaDescription = "";
        break;
      case "/Education-Details":
        title = "";
        metaDescription = "";
        break;
      case "/Address":
        title = "";
        metaDescription = "";
        break;
      case "/Calculation-Details":
        title = "";
        metaDescription = "";
        break;
      case "/Speciality":
        title = "";
        metaDescription = "";
        break;
      case "/Loading":
        title = "";
        metaDescription = "";
        break;
      case "/View-Report":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-91":
        title = "";
        metaDescription = "";
        break;
      case "/Education1":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/Report":
          title = "";
          metaDescription = "";
          break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop />} />
      <Route path="/desktop-197" element={<Desktop1 />} />
      <Route path="/desktop-87" element={<Desktop2 />} />
      <Route path="/Getting-started" element={<Desktop3 />} />
      <Route path="/About-Yourself" element={<Desktop4 />} />
      <Route path="/Add-Name" element={<Desktop5 />} />
      <Route path="/Education2" element={<Desktop6 />} />
      <Route path="/Education3" element={<Desktop7 />} />
      <Route path="/otp-verification" element={<Desktop8 />} />
      <Route path="/Education-Details" element={<Desktop9 />} />
      <Route path="/Address" element={<Desktop10 />} />
      <Route path="/Calculation-Details" element={<Desktop11 />} />
      <Route path="/Speciality" element={<Desktop12 />} />
      <Route path="/Loading" element={<Desktop13 />} />
      <Route path="/View-Report" element={<Desktop14 />} />
      <Route path="/desktop-91" element={<Desktop15 />} />
      <Route path="/Education1" element={<Desktop16 />} />
      <Route path="/login" element={<Desktop17 />} />
      <Route path="/Report" element={<Report />} />

      
    </Routes>
  );
}
export default App;
