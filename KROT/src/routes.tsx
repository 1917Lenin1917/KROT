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
import {Mail1, Mail2, Mail3, Mail4, Mail5, Mail6, MailMail, MailNotes, MailOutlet, MailPage} from "@pages/MailPage.tsx";
import DialogPage from "@pages/DialogPage.tsx";
import DialogPage2 from "@pages/DialogPage2.tsx";
import DialogPage3 from "@pages/DialogPage3.tsx";
import DialogPage4 from "@pages/DialogPage4.tsx";
import DialogPage5 from "@pages/DialogPage5.tsx";
import HelpModal from "@components/HelpModal.tsx";

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
          <Route path={"hint"} element={<HelpModal/>}></Route>
          <Route path={"levels"} element={<ChapterSelectFunction/>}>
            <Route index element={<ChapterSelectOutlet/>}/>
            <Route path={":chapter"} element={<LevelSelectFunction/>}>
              <Route path={":level"} element={<LevelPage/>}></Route>
            </Route>
          </Route>
          <Route path={"help/"} element={<Help/>}></Route>
          <Route path={"tutorial"} element={<TutorialPage/>}></Route>
          <Route path={"dialog"} element={<DialogPage/>}></Route>
          <Route path={"dialog2"} element={<DialogPage2/>}></Route>
          <Route path={"dialog3"} element={<DialogPage3/>}></Route>
          <Route path={"dialog4"} element={<DialogPage4/>}></Route>
          <Route path={"dialog5"} element={<DialogPage5/>}></Route>
          <Route path={"computer"} element={<PCPage/>}></Route>
          <Route path={"mail"} element={<MailPage/>}>
            <Route index element={<MailOutlet/>}></Route>
            <Route path={"mail"} element={<MailMail/>}></Route>
            <Route path={"mail/1"} element={<Mail1/>}></Route>
            <Route path={"mail/2"} element={<Mail2/>}></Route>
            <Route path={"mail/3"} element={<Mail3/>}></Route>
            <Route path={"mail/4"} element={<Mail4/>}></Route>
            <Route path={"mail/5"} element={<Mail5/>}></Route>
            <Route path={"mail/6"} element={<Mail6/>}></Route>
            <Route path={"notes"} element={<MailNotes/>}></Route>
          </Route>
        </Route>
      </Routes>
        {background && <Routes>
          <Route path={"exit"} element={<ExitModal/>}></Route>
          <Route path={"hint"} element={<HelpModal/>}></Route>
        </Routes>}
      </>
  )
}