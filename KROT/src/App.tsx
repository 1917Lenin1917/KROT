import './App.css'
import {LoginPage, LoginRegistrationPage, RegistrationPage} from "@pages/LoginRegistrationPage";
import {useState} from "react";

function App() {
  const pages = [
    <LoginRegistrationPage/>,
      <RegistrationPage/>,
      <LoginPage/>
  ]
  const [currentPageIdx, setCurrentPageIdx] = useState(0)
  const currentPage = pages[currentPageIdx]
  console.log(currentPage)
  return (
      <>
        {currentPage}
        {`Current: ${currentPage.type.name}`} <br/>
        <button className={"border-4 border-black"} onClick={() => {
          setCurrentPageIdx(pageIdx => (pageIdx+1)%pages.length)
        }}>Next</button>
      </>
  )

}

export default App
