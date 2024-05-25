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
    '',
  ]
  const location = useLocation()
  const [answer1, setAnswer1] = useState("")
  const [a1Debounce] = useDebounce(answer1, 500)
  const [isCorrect1, setIsCorrect1] = useState<boolean | null>(null)

  const [renderLibrary, setRenderLibrary] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    console.log(a1Debounce)
    axios.post(`${BACKEND_IP}/api/check_level_answer/15`, {
      token: localStorage.getItem('token')!,
      answer: {
        a1: a1Debounce,
      }
    }).then(response => {
      setIsCorrect1(response.data.a1)
    })
  }, [a1Debounce])

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
          Задание 7.6
        </button>

        <div className={"p-1 border-black border-4 bg-orange-100 text-xl"}
             style={{gridArea: "9 / 5 / span 3 / span 36"}}>Запишите ответ 1 раунда шифрования. Ответ в 16-им виде.
        </div>

        <input className={"p-1 border-black border-4 bg-orange-100"} placeholder={"ВВЕДИТЕ ОТВЕТ"}
               style={{gridArea: "12 / 5 / span 2 / span 32"}} onChange={(e) => {
          setAnswer1(e.currentTarget.value)
        }}>
        </input>
        <button
          className={`${a1Debounce.length === 0 ? "border-black" : isCorrect1 ? "border-green-700" : "border-red-800"} text-[30px] border-4 bg-orange-300`}
          style={{gridArea: "12 / 37 / span 2 / span 4"}}>
        </button>
        <Link to={"/hint"} state={{background: location, hints: hints}}
              className={"hover_size border-4 text-3xl border-black bg-orange-200 hover:border-green-700"}
              style={{gridArea: "32 / 5 / span 3 / span 10"}}>ПОДСКАЗКА
        </Link>

        {isCorrect1  && <button onClick={() => {
          axios.post(`${BACKEND_IP}/api/complete_level/15`, {token: localStorage.getItem('token')}).then(() => {
            navigate('/home')
          })
        }} className={"hover_size border-4 text-3xl border-black bg-orange-200 hover:border-green-700"}
                                             style={{gridArea: "32 / 31 / span 3 / span 10"}}>ЗАВЕРШИТЬ
        </button>}


        <button className={"hover_size"} onClick={() => {
          setRenderLibrary(true)
        }}
                style={{gridArea: "32 / 50 / span 3 / span 3", backgroundImage: `url(${magnifierIconImg})`}}>
        </button>
        <Link to={"/mail/mail/3"} className={"hover_size"} onClick={() => {
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
