import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Main";
import Navbars from "../Navbars";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Main/>}>
          {/* <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} /> */}
          {/* </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
