import HomePage from "@pages/HomePage.tsx";
import Window from "@components/Window.tsx";
import Left from "@assets/arrowLeft.png";
import Right from "@assets/arrowRight.png";
import Чубзик2 from "@assets/Чубзик2.png";
import Чубзик3 from "@assets/Чубзик3.png";
import Чубзик4 from "@assets/Чубзик4.png";
import Чубзик5 from "@assets/Чубзик5.png";
import Чубзик6 from "@assets/Чубзик6.png";
import backgroundImg from '@assets/LondonBackgound.png';
import DialogBubble from "@assets/dialogBubble.png"
import {Dispatch, ReactNode, SetStateAction, useState} from "react";
import {useNavigate} from "react-router-dom";


function StepTemplate({step, setStep, children, ЧубзикПик = Чубзик2}: {step: number, setStep: Dispatch<SetStateAction<number>>, children?: ReactNode, ЧубзикПик?: string}) {
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

        {step !== 4 ?
          <button disabled={step === 4} className={"hover_size z-10"} onClick={() => {
            setStep(step + 1)
          }} style={{gridArea: "32 / 13 / span 3 / span 6", backgroundImage: `url(${Right})`}}>
          </button> : null}
        {step === 4 ?
          <button className={"border border-black hover_size z-10 bg-orange-200"} onClick={() => {
            // axios.post('http://krot-game.ru/api/complete_dialog', {
            //   token: localStorage.getItem('token')
            // }).then((resp) => {
            //   localStorage.setItem('user', JSON.stringify(resp.data.user))
            //   navigate('/home')
            // }).catch((err) => {
            //   console.log(err)
            // })
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
    <StepTemplate step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 20 / span 24 / span 24", userSelect: "none"}} draggable={"false"}
           src={DialogBubble}></img>
      <p style={{gridArea: "13 / 24 / span 10 / span 18", userSelect: "none", fontSize: "30px"}}>Здравствуйте, сержант! Меня зовут Кузнецов Сергей.</p>
    </StepTemplate>,
    //2
    <StepTemplate ЧубзикПик={Чубзик3} step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 20 / span 24 / span 24", userSelect: "none"}} draggable={"false"}
           src={DialogBubble}></img>
      <p style={{gridArea: "13 / 24 / span 10 / span 18", userSelect: "none", fontSize: "30px"}}>Я буду помогать Вам выполнять задачи в секретной миссии.</p>
    </StepTemplate>,
    //3
    <StepTemplate ЧубзикПик={Чубзик4} step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 20 / span 24 / span 24", userSelect: "none"}} draggable={"false"}
           src={DialogBubble}></img>
      <p style={{gridArea: "13 / 24 / span 10 / span 18", userSelect: "none", fontSize: "26px"}}>В последнее время много наших сотрудников было выслано обратно в СССР. </p>
    </StepTemplate>,

    //4
    <StepTemplate ЧубзикПик={Чубзик5} step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 20 / span 24 / span 24", userSelect: "none"}} draggable={"false"}
           src={DialogBubble}></img>
      <p style={{gridArea: "13 / 24 / span 10 / span 18", userSelect: "none", fontSize: "26px"}}>Мы считаем это подозрительным. В системе есть предатель, его нужно найти.</p>
    </StepTemplate>,

    //5
    <StepTemplate ЧубзикПик={Чубзик6} step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 20 / span 24 / span 24", userSelect: "none"}} draggable={"false"}
           src={DialogBubble}></img>
      <p style={{gridArea: "13 / 24 / span 10 / span 18", userSelect: "none", fontSize: "26px"}}>Вот списки агентов. Ваша задача: выяснить, кто из них предатель.</p>
    </StepTemplate>,
  ]
  return (
    <div className={"flex justify-center pt-10"}>
      {(step < 3) && <Window w={1060} h={740.5} windowClasses={"mt-10 flex flex-wrap content-center justify-center"}
                           backgroundImg={backgroundImg}/>}
      {(step >= 3) && <HomePage/>}
      {steps[step]}
    </div>
  )
}