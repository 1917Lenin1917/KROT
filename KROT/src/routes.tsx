import {Route, Routes, useLocation} from "react-router-dom";
import {LoginPage, LoginRegistrationPage, RegistrationPage} from "@pages/LoginRegistrationPage.tsx";
import HomePage from "@pages/HomePage.tsx";
import ExitModal from "@components/ExitModal.tsx";
import LevelPage from "@pages/LevelPage.tsx";
import LevelSelectPage from "@pages/LevelSelectPage.tsx";

export default function Router() {
  const location = useLocation()
  const background = location.state && location.state.background
  return (
      <>
      <Routes location={background || location}>
        <Route path={"/"}>
          <Route index element={<LoginRegistrationPage/>}></Route>
          <Route path={"login"} element={<LoginPage/>}></Route>
          <Route path={"registration"} element={<RegistrationPage/>}></Route>
          <Route path={"home"} element={<HomePage/>}></Route>
          <Route path={"exit"} element={<ExitModal/>}></Route>
          <Route path={"level"} element={<LevelSelectPage/>}></Route>
          <Route path={"level/:id"} element={<LevelPage/>}></Route>

        </Route>
      </Routes>
        {background && <Routes>
          <Route path={"exit"} element={<ExitModal/>}></Route>
        </Routes>}
      </>
  )
}