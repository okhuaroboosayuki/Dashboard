import Single from "./pages/Single";
import New from "./pages/New";
import List from "./pages/List";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { userInputs } from "./formData";
import "./assets/scss/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<List title="Add New User" />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path="Units">
              <Route index element={<List title="Add New Unit" />} />
              <Route path=":unitId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New Unit" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
