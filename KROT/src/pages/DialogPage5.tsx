import HomePage from "@pages/HomePage.tsx";
import Чубзик4 from "@assets/Чубзик4.png";
import DialogBubble from "@assets/dialogBubble.png"
import {Dispatch, ReactNode, SetStateAction, useState} from "react";
import {useNavigate} from "react-router-dom";
import Left from "@assets/arrowLeft.png";
import Right from "@assets/arrowRight.png";


function StepTemplate({step, setStep, children, ЧубзикПик = Чубзик4}: {step: number, setStep: Dispatch<SetStateAction<number>>, children?: ReactNode, ЧубзикПик?: string}) {
  const navigate = useNavigate()
  return (
    <>
      <div className={"grid mt-10 absolute w-[1060px] h-[740.5px]"} style={{
        gridTemplateRows: "repeat(auto-fill, 20px)",
        gridTemplateColumns: "repeat(auto-fill, 20px)"
      }}>
        {children}

        <img style={{gridArea: "19 / 38 / span 14 / span 14", userSelect: "none"}} draggable={"false"}
             src={ЧубзикПик}></img>

        {step !== 0 ? <button className={"hover_size z-10"} onClick={() => {
          setStep(step - 1)
        }} style={{gridArea: "32 / 8 / span 3 / span 6", backgroundImage: `url(${Left})`}}>
        </button> : null}

        {step !== 1 ?
          <button disabled={step === 1} className={"hover_size z-10"} onClick={() => {
            setStep(step + 1)
          }} style={{gridArea: "32 / 13 / span 3 / span 6", backgroundImage: `url(${Right})`}}>
          </button> : null}
        {step === 1 ?
          <button className={"border border-black hover_size z-10 bg-orange-200"} onClick={() => {
            navigate("/home")
          }} style={{gridArea: "32 / 20 / span 3 / span 12" }}> Завершить диалог!
          </button> : null}
      </div>
    </>
  )
}

export default function DialogPage() {
  const [step, setStep] = useState(0)
  const steps = [
    // 1
    <StepTemplate ЧубзикПик={Чубзик4} step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 20 / span 24 / span 24", userSelect: "none"}} draggable={"false"}
           src={DialogBubble}></img>
      <p style={{gridArea: "13 / 24 / span 10 / span 18", userSelect: "none", fontSize: "24px"}}>От достоверного источника стало известно, что один из агентов высылал секретную информацию британской разведке.</p>
    </StepTemplate>,
    <StepTemplate ЧубзикПик={Чубзик4} step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 20 / span 24 / span 24", userSelect: "none"}} draggable={"false"}
           src={DialogBubble}></img>
      <p style={{gridArea: "13 / 24 / span 10 / span 18", userSelect: "none", fontSize: "24px"}}>
        Зашифруйте фамилию предателя современным шифром. Используйте, только один раунд. <br/>
        Ключ - КРОТ.
</p>
    </StepTemplate>,
  ]
  return (
    <div className={"flex justify-center pt-10"}>
      {(step > -1) && <HomePage/>}
      {steps[step]}
    </div>
  )
}