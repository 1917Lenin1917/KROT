import Window from "@components/Window.tsx";

import magnifierIconImg from "@assets/MagnifierIcon.png";
import {RefObject, useEffect, useState} from "react";
import axios from "axios";
import Help from "../../help/help.tsx";
import {useDebounce} from "use-debounce";
import mailIcon from "@assets/MailIcon.png"
import Pegament from "@assets/pergament.png";

export default function Level() {
  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [a1Debounce] = useDebounce(answer1, 500)
  const [a2Debounce] = useDebounce(answer2, 500)
  const [isCorrect1, setIsCorrect1] = useState<boolean | null>(null)
  const [isCorrect2, setIsCorrect2] = useState<boolean | null>(null)
  const [renderLibrary, setRenderLibrary] = useState(false)

  useEffect(() => {
    console.log(a1Debounce, a2Debounce)
    axios.post('http://localhost:8000/check_level_answer/1', {
      token: localStorage.getItem('token')!,
      answer: {
        a1: a1Debounce,
        a2: a2Debounce
      }
    }).then(response => {
      setIsCorrect1(response.data.a1)
      setIsCorrect2(response.data.a2)
    })
  }, [a1Debounce, a2Debounce])

  if (renderLibrary) {
    window.ref.current!.className += " hidden"
    return (
      <div className={"-mt-10"}>
        <Help fromLevel setRenderLibrary={setRenderLibrary}></Help>

      </div>
    )
  } else {
    window.ref.current!.className = window.ref.current!.className.replace(" hidden", "")
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
          Задание 1
        </button>
        <div className={"p-1 border-black border-4 bg-orange-100 text-2xl"}
             style={{gridArea: "24 / 5 / span 3 / span 36"}}>В какой аэропорт вы прилетите?
        </div>
        <input className={"p-1 border-black border-4 bg-orange-100"} placeholder={"ВВЕСТИ ОТВЕТ"}
               style={{gridArea: "28 / 5 / span 3 / span 32"}} onChange={(e) => {
          setAnswer2(e.currentTarget.value)
        }}>
        </input>
        <button
          className={`${a2Debounce.length === 0 ? "border-black" : isCorrect2 ? "border-green-700" : "border-red-800"} text-[30px] border-4 bg-orange-300`}
          style={{gridArea: "28 / 37 / span 3 / span 4"}}>

        </button>


        <div className={"p-1 border-black border-4 bg-orange-100 text-2xl"}
             style={{gridArea: "12 / 5 / span 3 / span 36"}}>В какой стране будет проходить миссия?
        </div>
        <input className={"p-1 border-black border-4 bg-orange-100"} placeholder={"ВВЕСТИ ОТВЕТ"}
               style={{gridArea: "16 / 5 / span 3 / span 32"}} onChange={(e) => {
          setAnswer1(e.currentTarget.value)
        }}>
        </input>
        <button
          className={`${a1Debounce.length === 0 ? "border-black" : isCorrect1 ? "border-green-700" : "border-red-800"} text-[30px] border-4 bg-orange-300`}
          style={{gridArea: "16 / 37 / span 3 / span 4"}}>

        </button>
        <button className={"hover_size border-4 text-3xl border-black bg-orange-200 hover:border-green-700"}
                style={{gridArea: "32 / 5 / span 3 / span 10"}}>ПОДСКАЗКА
        </button>

        { isCorrect1 && isCorrect2 && <button className={"hover_size border-4 text-3xl border-black bg-orange-200 hover:border-green-700"}
                style={{gridArea: "32 / 31 / span 3 / span 10"}}>ЗАВЕРШИТЬ
        </button>}


        <button className={"hover_size"} onClick={() => {
          setRenderLibrary(true)
        }}
                style={{gridArea: "32 / 50 / span 3 / span 3", backgroundImage: `url(${magnifierIconImg})`}}>
        </button>
        <button className={"hover_size"} onClick={() => {
        }}
                style={{gridArea: "28 / 50 / span 3 / span 3", backgroundImage: `url(${mailIcon})`}}>
        </button>
      </div>
    </>
  )
}

declare global {
  interface Window {
    ref: RefObject<HTMLButtonElement>
  }
}
