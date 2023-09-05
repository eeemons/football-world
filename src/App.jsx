import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Footerbar from "./Components/FooterBar/Footerbar";

const Home = lazy(() => import("./Pages/Home/Home"));
const League = lazy(() => import("./Pages/League/League"));
const Loader = lazy(() => import("./Components/Loader/Loader"));
const LeagueInfo = lazy(() => import("./Pages/LeagueInfo/LeagueInfo"));
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/league" element={<League />}></Route>
        <Route path="/league/:leagueId" element={<LeagueInfo />}></Route>
      </Routes>
      <br />
      <Footerbar />
    </Suspense>
  );
}

export default App;
