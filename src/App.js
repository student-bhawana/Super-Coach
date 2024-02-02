import "../src/assets/styles/App.css";
import Header from "./components/header";
import "../src/assets/styles/bootstrap.min.css";
import "../src/assets/fonts/fontawesome-webfont.eot";
import "../src/assets/fonts/fontawesome-webfont.ttf";
import "../src/assets/fonts/fontawesome-webfont.woff";
import "../src/assets/fonts/fontawesome-webfont.woff2";
import "../src/assets/fonts/FontAwesome.otf";
import Home from "./pages/home";
import "../src/assets/styles/font-awesome.min.css";
import ForAtheletic from "./pages/for atheletic";
import ForCoaches from "./pages/for coaches";
import FreeTrial from "./pages/free trial";
import Login from "./pages/login";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/for-coach" element={<ForCoaches />} />
          <Route path="/for-athelete" element={<ForAtheletic />} />
          <Route path="/login" element={<Login />} />
          <Route path="/free-trial" element={<FreeTrial />} />
        </Routes>
        <Footer />
      </Router>

      {/* <Home /> */}
      {/* <ForAtheletic /> */}
      {/* <ForCoaches /> */}
      {/* <FreeTrial /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
