import Window from "@components/Window.tsx";

import magnifierIconImg from "@assets/MagnifierIcon.png";
import {RefObject, useEffect, useState} from "react";
import axios from "axios";
import Help from "../../help/help.tsx";
import {useDebounce} from "use-debounce";
import mailIcon from "@assets/MailIcon.png"
import Pegament from "@assets/pergament.png";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {BACKEND_IP} from "../../main.tsx";

export default function Level() {
  const hints = [
    'Посмотри внимательно на поздравление!',
    'В записке две части текста защифрованы разными шифрами!'
  ]
  const location = useLocation()
  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")
  const [a1Debounce] = useDebounce(answer1, 500)
  const [a2Debounce] = useDebounce(answer2, 500)
  const [a3Debounce] = useDebounce(answer3, 500)
  const [isCorrect1, setIsCorrect1] = useState<boolean | null>(null)
  const [isCorrect2, setIsCorrect2] = useState<boolean | null>(null)
  const [isCorrect3, setIsCorrect3] = useState<boolean | null>(null)

  const [renderLibrary, setRenderLibrary] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    console.log(a1Debounce, a2Debounce)
    axios.post(`${BACKEND_IP}/api/check_level_answer/7`, {
      token: localStorage.getItem('token')!,
      answer: {
        a1: a1Debounce,
        a2: a2Debounce,
        a3: a3Debounce
      }
    }).then(response => {
      setIsCorrect1(response.data.a1)
      setIsCorrect2(response.data.a2)
      setIsCorrect3(response.data.a3)
    })
  }, [a1Debounce, a2Debounce, a3Debounce])

  if (renderLibrary) {
    window.ref.current!.className += " hidden"
    return (
      <div className={"-mt-10"}>
        <Help fromLevel setRenderLibrary={setRenderLibrary}></Help>

      </div>
    )
  } else {
    try {
      window.ref.current!.className = window.ref.current!.className.replaceAll(" hidden", "")

    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div className={"grid w-full h-full"} style={{
        gridTemplateRows: "repeat(auto-fill, 20px)",
        gridTemplateColumns: "repeat(auto-fill, 20px)"
      }}>

        <div style={{gridArea: "6 / 4 / span 3 / span 22"}}>
          <Window w={1000} h={550} backgroundImg={Pegament}>
          </Window>
        </div>
        <button className={"hover_size text-[30px] border-black border-4 bg-orange-100 cursor-default"}
                style={{gridArea: "4 / 41 / span 3 / span 12"}}>
          Задание 5
        </button>
        <div className={"p-1 border-black border-4 bg-orange-100 text-2xl"}
             style={{gridArea: "24 / 5 / span 3 / span 36"}}>За кем приглядеть?
        </div>
        <input className={"p-1 border-black border-4 bg-orange-100"} placeholder={"ВВЕСТИ ОТВЕТ"}
               style={{gridArea: "28 / 5 / span 2 / span 32"}} onChange={(e) => {
          setAnswer3(e.currentTarget.value)
        }}>
        </input>
        <button
          className={`${a3Debounce.length === 0 ? "border-black" : isCorrect3 ? "border-green-700" : "border-red-800"} text-[30px] border-4 bg-orange-300`}
          style={{gridArea: "28 / 37 / span 2 / span 4"}}>
        </button>

        <div className={"p-1 border-black border-4 bg-orange-100 text-2xl"}
             style={{gridArea: "16 / 5 / span 3 / span 36"}}>Кто и куда уезжает?
        </div>
        <input className={"p-1 border-black border-4 bg-orange-100"} placeholder={"ВВЕСТИ ОТВЕТ"}
               style={{gridArea: "20 / 5 / span 2 / span 32"}} onChange={(e) => {
          setAnswer2(e.currentTarget.value)
        }}>
        </input>
        <button
          className={`${a2Debounce.length === 0 ? "border-black" : isCorrect2 ? "border-green-700" : "border-red-800"} text-[30px] border-4 bg-orange-300`}
          style={{gridArea: "20 / 37 / span 2 / span 4"}}>

        </button>

        <div className={"p-1 border-black border-4 bg-orange-100 text-2xl"}
             style={{gridArea: "9 / 5 / span 3 / span 36"}}>Какой ключ?
        </div>
        <input className={"p-1 border-black border-4 bg-orange-100"} placeholder={"ВВЕСТИ ОТВЕТ"}
               style={{gridArea: "13 / 5 / span 2 / span 32"}} onChange={(e) => {
          setAnswer1(e.currentTarget.value)
        }}>
        </input>
        <button
          className={`${a1Debounce.length === 0 ? "border-black" : isCorrect1 ? "border-green-700" : "border-red-800"} text-[30px] border-4 bg-orange-300`}
          style={{gridArea: "13 / 37 / span 2 / span 4"}}>

        </button>
        <Link to={"/hint"} state={{ background: location, hints: hints }} className={"hover_size border-4 text-3xl border-black bg-orange-200 hover:border-green-700"}
                style={{gridArea: "32 / 5 / span 3 / span 10"}}>ПОДСКАЗКА
        </Link>

        {isCorrect1 && isCorrect2 && isCorrect3 && <button onClick={() => {
          axios.post(`${BACKEND_IP}/api/complete_level/7`, {token: localStorage.getItem('token')}).then(() => {
            navigate('/dialog4')
          })
        }} className={"hover_size border-4 text-3xl border-black bg-orange-200 hover:border-green-700"}
                                             style={{gridArea: "32 / 31 / span 3 / span 10"}}>ЗАВЕРШИТЬ
        </button>}


        <button className={"hover_size"} onClick={() => {
          setRenderLibrary(true)
        }}
                style={{gridArea: "32 / 50 / span 3 / span 3", backgroundImage: `url(${magnifierIconImg})`}}>
        </button>
        <Link to={"/mail/mail/5"} className={"hover_size"} onClick={() => {
        }}
              style={{gridArea: "28 / 50 / span 3 / span 3", backgroundImage: `url(${mailIcon})`}}>
        </Link>
      </div>
    </>
  )
}

declare global {
  interface Window {
    ref: RefObject<HTMLButtonElement>
  }
}
