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
      case "/desktop-119":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-120":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-90":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-94":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-95":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-89":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-92":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-107":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-108":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-114":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-115":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-109":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-91":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-93":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-83":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-216":
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
      <Route path="/desktop-119" element={<Desktop3 />} />
      <Route path="/desktop-120" element={<Desktop4 />} />
      <Route path="/desktop-90" element={<Desktop5 />} />
      <Route path="/desktop-94" element={<Desktop6 />} />
      <Route path="/desktop-95" element={<Desktop7 />} />
      <Route path="/desktop-89" element={<Desktop8 />} />
      <Route path="/desktop-92" element={<Desktop9 />} />
      <Route path="/desktop-107" element={<Desktop10 />} />
      <Route path="/desktop-108" element={<Desktop11 />} />
      <Route path="/desktop-114" element={<Desktop12 />} />
      <Route path="/desktop-115" element={<Desktop13 />} />
      <Route path="/desktop-109" element={<Desktop14 />} />
      <Route path="/desktop-91" element={<Desktop15 />} />
      <Route path="/desktop-93" element={<Desktop16 />} />
      <Route path="/desktop-83" element={<Desktop17 />} />
      <Route path="/new-desktop-216" element={<Report />} />

      
    </Routes>
  );
}
export default App;
