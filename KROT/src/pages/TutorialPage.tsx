import HomePage from "@pages/HomePage.tsx";
import Window from "@components/Window.tsx";
import Left from "@assets/arrowLeft.png";
import Right from "@assets/arrowRight.png";
import Чубзик1 from "@assets/Чубзик1.png";
import backgroundImg from '@assets/TableBackground.png';
import DialogBubble from "@assets/dialogBubble.png"
import Удостоверение from "@assets/Удостоверение.png"
import Arrow19 from "@assets/Arrow 19.png"
import Arrow1 from "@assets/Arrow 1.png"
import Arrow2 from "@assets/Arrow 2.png"
import М from "@assets/М.png"
import Ж from "@assets/Ж.png"
import ХЗ from "@assets/hz_funny.png"
import {Dispatch, ReactNode, SetStateAction, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function StepTemplate({step, setStep, children}: {step: number, setStep: Dispatch<SetStateAction<number>>, children?: ReactNode}) {
  const navigate = useNavigate()
  return (
    <>
      <div className={"grid mt-10 absolute w-[1060px] h-[740.5px]"} style={{
        gridTemplateRows: "repeat(auto-fill, 20px)",
        gridTemplateColumns: "repeat(auto-fill, 20px)"
      }}>
        {children}

        <img style={{gridArea: "19 / 40 / span 12 / span 12", userSelect: "none"}} draggable={"false"}
             src={Чубзик1}></img>


        {step !== 0 ? <button className={"hover_size z-10"} onClick={() => {
          setStep(step - 1)
        }} style={{gridArea: "32 / 8 / span 3 / span 6", backgroundImage: `url(${Left})`}}>
        </button> : null}

        {step !== 10 ?
          <button disabled={step === 10} className={"hover_size z-10"} onClick={() => {
            setStep(step + 1)
          }} style={{gridArea: "32 / 13 / span 3 / span 6", backgroundImage: `url(${Right})`}}>
          </button> : null}
        {step === 10 ?
          <button className={"border border-black hover_size z-10 bg-orange-200"} onClick={() => {
            axios.post('http://localhost:8000/complete_tutorial', {
              token: localStorage.getItem('token')
            }).then((resp) => {
              localStorage.setItem('user', JSON.stringify(resp.data.user))
              navigate('/home')
            }).catch((err) => {
              console.log(err)
            })
          }} style={{gridArea: "32 / 20 / span 3 / span 12" }}> Завершить обучение!
          </button> : null}
      </div>
    </>
  )
}

export default function TutorialPage() {
  const [step, setStep] = useState(0)
  const user = JSON.parse(localStorage.getItem('user')!)
  const steps = [
    // 1
    <StepTemplate step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 20 / span 24 / span 24", userSelect: "none"}} draggable={"false"}
           src={DialogBubble}></img>
      <p style={{gridArea: "13 / 24 / span 10 / span 18", userSelect: "none", fontSize: "30px"}}>Здравствуйте, сержант. Поздравляю с повышением!</p>
    </StepTemplate>,
    //2
    <StepTemplate step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 8 / span 32 / span 39", userSelect: "none"}} draggable={"false"}
           src={Удостоверение}></img>
      <img style={{gridArea: "9 / 8 / span 9 / span 9 ", userSelect: "none"}} draggable={"false"}
           src={user.gender === 'М' ? М : user.gender === 'Ж' ? Ж : ХЗ}></img>

      <p style={{gridArea: "13 / 30 / span 1 / span 12", userSelect: "none", fontSize: "1.5vw"}}>{user.username}</p>

    </StepTemplate>,
    //3
    <StepTemplate step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 20 / span 24 / span 24", userSelect: "none"}} draggable={"false"}
           src={DialogBubble}></img>
      <p style={{gridArea: "13 / 24 / span 10 / span 18", userSelect: "none", fontSize: "23px"}}>Добро пожаловать в нашу новую систему криптоанализа!
Хочу познакомить Вас с новыми элементами управления.</p>
    </StepTemplate>,
    //4
    <StepTemplate step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 20 / span 24 / span 24", userSelect: "none"}} draggable={"false"}
           src={DialogBubble}></img>
      <p style={{gridArea: "13 / 24 / span 10 / span 18", userSelect: "none", fontSize: "42px"}}>Это ваше рабочее место</p>
    </StepTemplate>,
    //5
    <StepTemplate step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 20 / span 24 / span 24", userSelect: "none"}} draggable={"false"}
           src={DialogBubble}></img>

      <img style={{gridArea: "8 / 6 / span 10 / span 10", userSelect: "none"}} draggable={"false"}
           src={Arrow19}></img>
      <p style={{gridArea: "13 / 24 / span 10 / span 18", userSelect: "none", fontSize: "42px"}}>Это выход из игры</p>
    </StepTemplate>,
    //6
    <StepTemplate step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 20 / span 24 / span 24", userSelect: "none"}} draggable={"false"}
           src={DialogBubble}></img>

      <img style={{gridArea: "22 / 7 / span 14 / span 14", userSelect: "none"}} draggable={"false"}
           src={Arrow1}></img>
      <p style={{gridArea: "13 / 24 / span 10 / span 18", userSelect: "none", fontSize: "30px"}}>Это библиотека. Здесь вы сможете найти теоретические сведения.</p>
    </StepTemplate>,
    //7
    <StepTemplate step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 20 / span 24 / span 24", userSelect: "none"}} draggable={"false"}
           src={DialogBubble}></img>

      <img style={{gridArea: "8 / 43 / span 4 / span 4", userSelect: "none"}} draggable={"false"}
           src={Arrow2}></img>
      <p style={{gridArea: "13 / 24 / span 10 / span 18", userSelect: "none", fontSize: "30px"}}>Это карта локаций.</p>
    </StepTemplate>,
    //8
    <StepTemplate step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 20 / span 24 / span 24", userSelect: "none"}} draggable={"false"}
           src={DialogBubble}></img>

      <img style={{gridArea: "8 / 46 / span 4 / span 4", userSelect: "none"}} draggable={"false"}
           src={Arrow2}></img>
      <p style={{gridArea: "13 / 26 / span 10 / span 18", userSelect: "none", fontSize: "30px"}}>Компьютер с необходимыми программами</p>
    </StepTemplate>,
    //9
    <StepTemplate step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 20 / span 24 / span 24", userSelect: "none"}} draggable={"false"}
           src={DialogBubble}></img>

      <img style={{gridArea: "8 / 49 / span 4 / span 4", userSelect: "none"}} draggable={"false"}
           src={Arrow2}></img>
      <p style={{gridArea: "13 / 24 / span 10 / span 18", userSelect: "none", fontSize: "30px"}}>Почтовый ящик. Здесь будут задания и телеграммы.</p>
    </StepTemplate>,
    //10
    <StepTemplate step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 20 / span 24 / span 24", userSelect: "none"}} draggable={"false"}
           src={DialogBubble}></img>

      <p style={{gridArea: "13 / 24 / span 10 / span 18", userSelect: "none", fontSize: "30px"}}>Прогресс будет отображаться на этой доске.</p>
    </StepTemplate>,

    //11
    <StepTemplate step={step} setStep={setStep}>
      <img style={{gridArea: "9 / 20 / span 24 / span 24", userSelect: "none"}} draggable={"false"}
           src={DialogBubble}></img>

      <p style={{gridArea: "13 / 24 / span 10 / span 18", userSelect: "none", fontSize: "20px"}}>Благодаря нашей системе вы изучите разные шифры, научитесь шифровать и расшифровывать сообщения.</p>
    </StepTemplate>,
  ]
  return (
    <div className={"flex justify-center pt-10"}>
      {(step < 3 || step === 10) && <Window w={1060} h={740.5} windowClasses={"mt-10 flex flex-wrap content-center justify-center"}
                           backgroundImg={backgroundImg}/>}
      {(step >= 3 && step !== 10) && <HomePage/>}
      {steps[step]}
    </div>
  )
}