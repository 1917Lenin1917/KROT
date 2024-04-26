import {Route, Routes, useLocation} from "react-router-dom";
import {LoginPage, LoginRegistrationPage, RegistrationPage} from "@pages/LoginRegistrationPage.tsx";
import HomePage from "@pages/HomePage.tsx";
import ExitModal from "@components/ExitModal.tsx";
import LevelPage from "@pages/LevelPage.tsx";
import {ChapterSelectFunction, ChapterSelectOutlet, LevelSelectFunction} from "@pages/LevelSelectPage.tsx";
import {CaesarRender} from "./help/Cesar.tsx";
import Help from "./help/help.tsx";

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
          <Route path={"levels"} element={<ChapterSelectFunction/>}>
            <Route index element={<ChapterSelectOutlet/>}/>
            <Route path={":chapter"} element={<LevelSelectFunction/>}>
              <Route path={":level"} element={<LevelPage/>}></Route>
            </Route>
          </Route>
          <Route path={"help/"} element={<Help/>}></Route>
          <Route path={"help/caesar/:qWord"} element={<CaesarRender/>}></Route>
        </Route>
      </Routes>
        {background && <Routes>
          <Route path={"exit"} element={<ExitModal/>}></Route>
        </Routes>}
      </>
  )
}