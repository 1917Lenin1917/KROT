import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {LoginPage, LoginRegistrationPage, RegistrationPage} from "@pages/LoginRegistrationPage.tsx";
import HomePage from "@pages/HomePage.tsx";
import ExitModal from "@components/ExitModal.tsx";
import LevelPage from "@pages/LevelPage.tsx";
import {ChapterSelectFunction, ChapterSelectOutlet, LevelSelectFunction} from "@pages/LevelSelectPage.tsx";
import Help from "./help/help.tsx";
import TutorialPage from "@pages/TutorialPage.tsx";
import {useEffect} from "react";
import {PCPage} from "@pages/PCPage.tsx";
import {Mail1, Mail2, MailMail, MailNotes, MailOutlet, MailPage} from "@pages/MailPage.tsx";
import DialogPage from "@pages/DialogPage.tsx";

export default function Router() {
  const location = useLocation()
  const background = location.state && location.state.background
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user')!)
      if (user.first_login)
       navigate('/tutorial')
    }
  }, [])

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
          <Route path={"tutorial"} element={<TutorialPage/>}></Route>
          <Route path={"dialog"} element={<DialogPage/>}></Route>
          <Route path={"computer"} element={<PCPage/>}></Route>
          <Route path={"mail"} element={<MailPage/>}>
            <Route index element={<MailOutlet/>}></Route>
            <Route path={"mail"} element={<MailMail/>}></Route>
            <Route path={"mail/1"} element={<Mail1/>}></Route>
            <Route path={"mail/2"} element={<Mail2/>}></Route>
            <Route path={"notes"} element={<MailNotes/>}></Route>
          </Route>
        </Route>
      </Routes>
        {background && <Routes>
          <Route path={"exit"} element={<ExitModal/>}></Route>
        </Routes>}
      </>
  )
}